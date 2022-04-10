<?php

namespace App\Http\Controllers;
use App\Classes\ApiManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

use Excel;

use Auth;
use DataTables;
use App\User;
use App\Model\City;
use App\Model\UserBank;
use App\Model\Transactions;
use App\Model\ResponseTable;
use App\Model\KycDoc;
use App\Model\AppBanner;

use App\Model\News;

use App\Model\AForm;
use App\Model\AFormFeild;
use App\Model\AFormData;

class HomeController extends Controller
{
    public function __construct(ApiManager $apiManager) {
        $this->middleware('auth');
        $this->apiManager = $apiManager;
    }

    public function index() {
        
        if(Auth::User()->user_type == 1){
            return view('pages.dashboard');
        }else{
            $form_list = AForm::get();
            return view('pages.dashboard',compact('form_list'));
            
        }
       

    }
    
    public function getCreateForm(){
        return view('pages.create_form');
    }
    
    public function postCreateForm(Request $request){
        
        $v = Validator::make($request->all(), [
        'form_name' => 'required',
        'form_feild' => 'required',
        ]);
     
        if ($v->fails())
        {
            return redirect()->back()->withErrors($v->errors());
        }
        
        $f = new AForm();
        $f->name = $request->form_name;
        $f->feild = $request->form_feild;
        $f->save();
        
        $form_feild = $request->form_feild;
        $form_id = $f->id;
        
        return view('pages.create_form_2',compact('form_id','form_feild'));
    }
    
    public function postCreateForm2(Request $request){
        
        $n = count($request->feild_name);
        
        for($i=0;$i<$n;$i++){
            
        $f = new AFormFeild();
        $f->form_id = $request->form_id;
        $f->feild_name = $request->feild_name[$i];
        $f->rules = $request->rules[$i];
        $f->feild_type = $request->input_type[$i];
        $f->save();
        }
        
        Session::flash('success', 'Form Created');
        return redirect('/');
        
    }
    
    public function getFormFill($id){
        $form = AForm::select('a_form_feilds.*')
                ->join('a_form_feilds','a_form_feilds.form_id','a_forms.id')
                ->where('a_forms.id',$id)
                ->get();
        
        if($form){
            $form_id = $id;
            
            $f = AForm::find($form_id);
            $f->open = $f->open + 1;
            $f->save();
            
            return view('pages.form_fill',compact('form','form_id'));
        }else{
            Session::flash('error', 'Form Not Valid');
            return redirect('/');
        }
    }
    
    public function postFormFill(Request $request) {
        $form = AForm::select('a_form_feilds.*')
                ->join('a_form_feilds','a_form_feilds.form_id','a_forms.id')
                ->where('a_forms.id',$request->form_id)
                ->get();
        
        $val_array = array();
        
        foreach($form as $r){
            $val_array[$r->feild_name] = $r->rules;
        }
        
        $v = Validator::make($request->all(), $val_array);
     
        if ($v->fails())
        {
            return redirect()->back()->withErrors($v->errors());
        }
        
        
        
        foreach($form as $r1){
            
            $feildname= $r1->feild_name;
            $f = new AFormData();
            $f->user_id = Auth::User()->id;
            $f->form_id = $request->form_id;
            $f->feild_name = $feildname;
            $f->feild_value = $request->$feildname;
            $f->save();
        }
        
        $f = AForm::find($request->form_id);
            $f->submited = $f->submited + 1;
            $f->save();
        
        
        Session::flash('success', 'Form Submited!!!');
        return redirect('/');
        
    }
    
    public function getFormList(){
        return view('pages.form_list');
    }
    
    public function getFormListData(){
        $data = AForm::get();
        return Datatables::of($data)->make(true);
    }
    
    public function getFormSubmited($id){
        
        return view('pages.form_submited',compact('id'));
    }
    
    public function getFormSubmitedData(Request $request){
        $form_id = $request->form_id;
        $data = AFormData::select('a_form_datas.*','users.name as uname')->join('users','users.id','a_form_datas.user_id')->where('form_id',$form_id)->get();
        return Datatables::of($data)->make(true);
    }
    
    public function getStatesCity(Request $request) {
        $state = $request->state;
        $cities = City::where('state_id',$state)->orderBy('name')->get();
        return view('pages.ajax.city',compact('cities'));
    }
    
    public function getEditStatesCity(Request $request) {
        $state = $request->state;
        $selected_city = $request->city;
        
        $cities = City::where('state_id',$state)->orderBy('name')->get();
        return view('pages.ajax.city',compact('cities','selected_city'));
    }
    
            
    public function checkMobileRegistration(Request $request) {
        $mobile = $request->get('mobile');
        $registered = User::where('mobile',$mobile)->first();
        
        if($registered) {
            return response()->json(['success' => true, 'message' => 'Mobile number already registered!']);
        }
        else{
            return response()->json(['success' => false, 'message' => 'Mobile number not registered!']);
        }
    }
   

}