<?php

namespace App\Http\Controllers;
use App\Classes\ApiManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;
use DataTables;
use Excel;
use Auth;
use DB;

use App\User;
use App\Model\DmtApi;
use App\Model\Address;
use App\Model\AdminEkoBank;
use App\Model\AdminEkoSettlementRequest;
use App\Model\Dispute;
use App\Model\State;
use App\Model\UsersMapping;
use App\Model\UsersRelation;
use App\Model\KycDoc;
use App\Model\ResponseTable;
use App\Model\Setting;
use App\Model\Operators;
use App\Model\Notifications;
use App\Model\AppBanner;
use App\Model\Operator_Slab;
use App\Model\RechargeApi;
use App\Model\Transactions;

use App\Model\OpApiRelation;
use App\Model\RechargeAmountSlab;
use App\Model\OpApiSwitch;
use App\Model\UserWebsite;

class AdminController extends Controller
{
    public function __construct(ApiManager $apiManager) {
        $this->middleware('auth');
        $this->apiManager = $apiManager;
    }
    
    public function getAddDistributor() {
        $states = State::where('country_id',1)->get();
        return view('pages.admin_panel.distributors.add_distributor',compact('states'));
    }
    
    public function postAddDistributor(Request $request) {
        $user_id = Auth::user()->id;
        
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
        $user->password = bcrypt($request->get('password'));
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
        
        
        

        Session::flash('success', 'User registred successfully');
        return redirect()->back();
    }
    
    public function getManageDistributors() {
        
        return view('pages.admin_panel.distributors.manage_distributors');
    }
    
    public function getManageDistributorsData() {  
        
        $user_id = Auth::User()->id;
        
        $data = User::select('users.*','cities.name as cityname','states.name as statename')
        ->leftjoin('addresses','addresses.user_id','users.id')
        ->leftjoin('cities','cities.id','addresses.city')
        ->leftjoin('states','states.id','addresses.state')
        ->where('users.user_type','3')
        ->get();
        
        return DataTables::of($data)->make(true);
    }
    
    public function getAppSettings() {
        $data = Setting::first();
        return view('pages.admin_panel.settings',compact('data'));
    }
    
    public function postAppSettings(Request $request) {  
        
        $user_id = Auth::User()->id;
        $update = Setting::where('id', 1)->update([
        "gst" => $request->get('gst'),
        "tds" => $request->get('tds'),
        "membership" => $request->get('membership'),				"news_in" => $request->get('news_in'),				"news_out" => $request->get('news_out'),
        "retailer_membership_fee" => $request->get('retailer_membership_fee'),
        "distributor_membership_fee" => $request->get('distributor_membership_fee'),
        "bank_verification_fee" => $request->get('bank_verification_fee')]);
            
        Session::flash('success', 'Settings updated successfully!');
        return redirect()->back();
    }
    
    public function getMyApp() {
        $data = UserWebsite::where('user_id',Auth::User()->id)->first();
        if($data){
            return view('pages.admin_panel.myapp',compact('data'));
        }else{
            $data = UserWebsite::where('id',2)->first();
            return view('pages.admin_panel.myapp',compact('data'));
        }
        
    }
    
    public function postMyApp(Request $request) {  
        
        $user_id = Auth::User()->id;
        $data = UserWebsite::where('user_id',Auth::User()->id)->first();
        if($data){
            
        
            if ($request->hasFile('logo')) {
                $file = $request->file('logo');
                $destinationPath = public_path('/uploads/website_logo/');
                $imagename = 'logo'. $user_id . time() . '.' . $file->getClientOriginalExtension();
                $file->move($destinationPath, $imagename);
                
                $update = UserWebsite::where('user_id', Auth::User()->id)->update([
                "website_url" => $request->get('website_url'),
                "title" => $request->get('title'),
                "contact_number" => $request->get('contact_number'),				
                "address" => $request->get('address'),
                "logo" => $imagename]);
            }else{
                $update = UserWebsite::where('user_id', Auth::User()->id)->update([
                "website_url" => $request->get('website_url'),
                "title" => $request->get('title'),
                "contact_number" => $request->get('contact_number'),				
                "address" => $request->get('address')]);
            }
        }else{
            $w = new UserWebsite();
            
            $file = $request->file('logo');
            $destinationPath = public_path('/uploads/website_logo/');
            $imagename = 'logo'. $user_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            
            $w->user_id = Auth::User()->id;
            $w->website_url = $request->get('website_url');
            $w->title = $request->get('title');
            $w->contact_number = $request->get('contact_number');
            $w->address = $request->get('address');
            $w->logo = $imagename;
            $w->save();
        }
        
        
            
        Session::flash('success', 'App Settings updated successfully!');
        return redirect()->back();
    }
    
    
    
}