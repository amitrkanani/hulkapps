<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Model\State;
use App\Model\City;

use App\Model\Address;
use App\Model\UsersMapping;
use App\Model\UsersRelation;


use App\Classes\ApiManager;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ApiManager $apiManager) {
        $this->middleware('guest');
        $this->apiManager = $apiManager;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|min:10|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'user_type' => 'merchant',
            'referral_code' => $data['referral'],
            'password' => Hash::make($data['password']),
        ]);
    }
    
    //Distributor Registration
    public function getDistributorRegistration() {
        $states = State::where('country_id',1)->get();
        return view('auth/distributor_registration',compact('states'));
    }
    
    public function postDistributorRegistration(Request $request) {
        $user_id = 1;
    
        $mobile = $request->get('mobile');
        
        $checkMobile = User::where('mobile', $mobile)->first();
        
        if ($checkMobile) {
            Session::flash('error', 'Mobile number already in use!');
            return redirect()->back()->withInput();
        }

        $password = $this->apiManager->getPassword(8);   
            
        $user = new User();    
        $user->name = ucfirst($request->get('name'));
        $user->mobile = $mobile;
        $user->dob = $request->get('dob');
        $user->email = $request->get('email');
        $user->password = bcrypt($password);
        $user->status = 1;
        $user->user_type = 3;
        $user->save();
        
        $address = new Address();
        $address->user_id = $user->id;
        $address->address = $request->get('address');
        $address->pincode = $request->get('pincode');
        $address->state = $request->get('state');
        $address->city = $request->get('city');
        $address->save();
        
        $dist_id = $user->id;
        
        $mapping = new UsersMapping();
        $mapping->user_id = $dist_id;
        $mapping->toplevel_id = $user_id;
        $mapping->save();
        
        $relation = new UsersRelation();
        $relation->distributor_id = $dist_id;
        $relation->admin_id = $user_id;
        $relation->save();
        
        $sms_message = 'Welcome to '.env('APP_NAME').' family, Your user I’d : '.$mobile.', password : '.$password.' Login : https://my.rppay.in';
        $sendsms = $this->apiManager->sendSMS($dist_id,$sms_message);
        
        Session::flash('success', 'Distributor registration successfully');
        // return redirect()->back();
        return redirect()->route('login');
    }
    
    public function getStatesIdCity(Request $request) {
        $state = $request->state;
        $cities = City::where('state_id',$state)->orderBy('name')->get();
        return view('pages.ajax.city',compact('cities'));
    }
 
    
}
