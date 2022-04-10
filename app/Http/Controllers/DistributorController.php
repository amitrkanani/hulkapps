<?php

namespace App\Http\Controllers;
use App\Classes\ApiManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;

use Excel;

use Auth;
use DataTables;
use App\User;
use App\Model\KycDoc;
use App\Model\Address; 
use App\Model\State;
use App\Model\UserBank;
use App\Model\UsersMapping;
use App\Model\UsersRelation;
use App\Model\Transactions;
use App\Model\RetailerIdsHistory;
use App\Model\Operators;
use App\Model\Category;

class DistributorController extends Controller
{
    public function __construct(ApiManager $apiManager) {
        $this->middleware('auth');
        $this->apiManager = $apiManager;
    }
    
    public function getAddRetailer() {
        
        $user_id = Auth::user()->id;
        $user_type = Auth::user()->user_type;
        
        $user = User::find($user_id);
        
        $kycdocs = kycdoc::where('user_id',$user_id)->where('status',1)->first();
        if(!$kycdocs) {
            Session::flash('error', 'Please verify your kyc first');
            return redirect()->back();
        }
        
        if($user->retailer_ids <= 0 && $user_type !=1) {
            Session::flash('error', 'Please purchase retailers registration ids');
            return redirect()->back();
        }
        
        $states = State::where('country_id',1)->get();
        $categories = Category::select('id','cat_name')->get();
        return view('pages.distributor_panel.retailers.add_retailer',compact('states','categories'));
    }
    
    public function postAddRetailer(Request $request) {
        $user_id = Auth::user()->id;
        $user_type = Auth::user()->user_type;
        
       
        $distributor = User::find($user_id);
        
        $pre_stock = $distributor->retailer_ids;
        $cur_stock = $distributor->retailer_ids - 1;
        $retailer_ids = $pre_stock;
        if($retailer_ids <= 0 && $user_type !=1){
            Session::flash('error', 'Please purchase retailers registration ids');
            return redirect()->back();
        }
        
        $mobile = $request->get('mobile');
        $checkMobile = User::where('mobile', $mobile)->first();
        
        if($checkMobile) {
            Session::flash('error', 'Mobile number already in use!');
            return redirect()->back()->withInput();
        }
        
        $check_pan_num = KycDoc::where('pan_number',$request->get("pan_number"))->first();
        if($check_pan_num) {
            Session::flash('error', 'PAN number already in use!');
            return redirect()->back()->withInput();
        }
        
        $check_aadhaar_num = KycDoc::where('aadhaar_number',$request->get("aadhaar_number"))->first();
        if($check_aadhaar_num) {
            Session::flash('error', 'Aadhaar number already in use!');
            return redirect()->back()->withInput();
        }
        
        $usertoken = $this->apiManager->getUserToken();
            
        $user = new User();    
        $user->name = trim(ucfirst($request->name));
        $user->mobile = trim($request->mobile);
        $user->status = 1;
        $user->user_type = 2;
        $user->reg_completed = 1;
        $user->email = $request->get('email');
        $user->dob = $request->get('dob');
        $user->category_id = $request->get('category_id');
        $user->user_type = 2;
        $user->password = bcrypt($mobile);
        $user->user_token = $usertoken;
        $user->payment_status = 1;
        $user->save();
        
        $retailer_id = $user->id;
        
        $mapping = new UsersMapping();
        $mapping->user_id = $retailer_id;
        $mapping->toplevel_id = $user_id;
        $mapping->save();
        
        if($user_type == 5){
            $has_super_distributor = UsersRelation::where('white_admin_id',$user_id)->first();
                
            $relation = new UsersRelation();
            $relation->retailer_id = $retailer_id;
            $relation->white_admin_id = $user_id;
            $relation->admin_id = 1;
            $relation->save();
            
        }else{
            
            $has_super_distributor = UsersRelation::where('distributor_id',$user_id)->first();
            
            if($has_super_distributor){ 
                $super_distributor_id = $has_super_distributor->super_distributor_id;
                $white_admin_id = $has_super_distributor->white_admin_id;
            }else{
                $super_distributor_id = NULL;
                $white_admin_id = NULL;
            }
            
            $relation = new UsersRelation();
            $relation->retailer_id = $retailer_id;
            $relation->distributor_id = $user_id;
            $relation->super_distributor_id = $super_distributor_id;
            $relation->white_admin_id = $white_admin_id;
            $relation->admin_id = 1;
            $relation->save();
        }
        
        
        
        
        
        
        //Address
        $address = new Address();
        $address->user_id = $retailer_id;
        $address->address = $request->get('address');
        $address->city = $request->get('city');
        $address->state = $request->get('state');
        $address->pincode = $request->get('pincode');
        $address->latitude = $request->get('latitude');
        $address->longitude = $request->get('longitude');
        $address->save();
            
        //Bank
        $bank = new UserBank();
        $bank->user_id = $retailer_id;
        $bank->bank_name = $request->get('bank_name');
        $bank->account_no = $request->get('account_no');
        $bank->ifsc = $request->get('ifsc');
        $bank->holder = $request->get('holder');
        $bank->branch = $request->get('branch');
        $bank->city = $request->get('bank_city');
        $bank->state = $request->get('bank_state');
        $bank->address = $request->get('bank_address');
        $bank->primary_bank = 1;
        $bank->save();
        
        //KYC
        $kyc = new KycDoc();
        $kyc->user_id = $retailer_id;
        $kyc->pan_number = strtoupper($request->get('pan_number'));
        $kyc->aadhaar_number = $request->get('aadhaar_number');
        $kyc->status = 0;
        
        if ($request->hasFile('pan_image')) {
            $file = $request->file('pan_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'PAN'. $retailer_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->pan_image = $imagename;
        }
        if ($request->hasFile('aadhaar_front_image')) {
            $file = $request->file('aadhaar_front_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'ADHARF'. $retailer_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->aadhaar_front_image = $imagename;
        }
        if($request->hasFile('aadhaar_back_image')) {
            $file = $request->file('aadhaar_back_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'ADHARB'. $retailer_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->aadhaar_back_image = $imagename;
        }
        $kyc->save();
        
        $distributor->retailer_ids = $cur_stock;
        $distributor->save();
        
        $history = new RetailerIdsHistory();
        $history->distributor_id = $user_id;
        $history->retailer_id = $retailer_id;
        $history->previous_stock = $pre_stock;
        $history->current_stock = $cur_stock;
        $history->txn_type = "Debit";
        $history->save();
        
        $sms = 'Welcome to Family, Your Registered number is '.$mobile.' Your KYC under process. Thank You';
        $sendsms = $this->apiManager->sendSMS($retailer_id,$sms);
        
        Session::flash('success', 'Retailer registred successfully');
        return redirect()->back();
    }
    
    public function postEditRetailer(Request $request) {
        $user_id = Auth::user()->id;
        $user_type = Auth::user()->user_type;
        
        $mobile = $request->get('mobile');
        // print_r($mobile);exit;
        $checkMobile = User::where('mobile', $mobile)->first();
        $retailerid = $checkMobile->id;
        
        $usertoken = $this->apiManager->getUserToken();
            
        $user = User::find($retailerid);    
        $user->name = trim(ucfirst($request->name));
        // $user->mobile = trim($request->mobile);
        $user->status = 1;
        $user->user_type = 2;
        $user->reg_completed = 1;
        $user->email = $request->get('email');
        $user->dob = $request->get('dob');
        $user->category_id = $request->get('category_id');
        $user->user_type = 2;
        $user->password = bcrypt($mobile);
        $user->user_token = $usertoken;
        $user->payment_status = 1;
        $user->save();
        
        $retailer_id = $retailerid;
        
        $address_data = Address::where('user_id',$retailer_id)->first();
        //Address
        $address = Address::find($address_data->id);
        $address->user_id = $retailer_id;
        $address->address = $request->get('address');
        $address->city = $request->get('city');
        $address->state = $request->get('state');
        $address->pincode = $request->get('pincode');
        $address->latitude = $request->get('latitude');
        $address->longitude = $request->get('longitude');
        $address->save();
        
        $bank_data =  UserBank::where('user_id',$retailer_id)->first();   
        //Bank
        $bank = UserBank::find($bank_data->id);
        $bank->user_id = $retailer_id;
        $bank->bank_name = $request->get('bank_name');
        $bank->account_no = $request->get('account_no');
        $bank->ifsc = $request->get('ifsc');
        $bank->holder = $request->get('holder');
        $bank->branch = $request->get('branch');
        $bank->city = $request->get('bank_city');
        $bank->state = $request->get('bank_state');
        $bank->address = $request->get('bank_address');
        $bank->primary_bank = 1;
        $bank->save();
        
        $kyc_data = KycDoc::where('user_id',$retailer_id)->first();
        //KYC
        $kyc = KycDoc::find($kyc_data->id);
        $kyc->user_id = $retailer_id;
        $kyc->pan_number = strtoupper($request->get('pan_number'));
        $kyc->aadhaar_number = $request->get('aadhaar_number');
        $kyc->status = 0;
        
        if ($request->hasFile('pan_image')) {
            $file = $request->file('pan_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'PAN'. $retailer_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->pan_image = $imagename;
        }
        if ($request->hasFile('aadhaar_front_image')) {
            $file = $request->file('aadhaar_front_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'ADHARF'. $retailer_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->aadhaar_front_image = $imagename;
        }
        if($request->hasFile('aadhaar_back_image')) {
            $file = $request->file('aadhaar_back_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'ADHARB'. $retailer_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->aadhaar_back_image = $imagename;
        }
        $kyc->save();
        
        
        
        Session::flash('success', 'Retailer Update successfully');
        return redirect()->back();
    }
    
    public function getManageRetailer() {
        return view('pages.distributor_panel.retailers.manage_retailers');
    }
    
    public function getManageRetailerData() {
        
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
        
        
        if($user_type == 1) {
            
            $data = User::select('users.*','cities.name as cityname','states.name as statename','kyc_docs.status as kyc_status',
            'distributor.name as dist_name','distributor.mobile as dist_mobile')
            ->leftjoin('users_mappings','users_mappings.user_id','users.id')
            ->leftjoin('users as distributor','distributor.id','users_mappings.toplevel_id')
            ->leftjoin('kyc_docs','kyc_docs.user_id','users.id')
            ->leftjoin('addresses','addresses.user_id','users.id')
            ->leftjoin('cities','cities.id','addresses.city')
            ->leftjoin('states','states.id','addresses.state')
            ->where('users.user_type','2')->get();
            
        }
        else{
            $data = User::select('users.*','cities.name as cityname','states.name as statename','kyc_docs.status as kyc_status')
            ->join('users_mappings','users_mappings.user_id','users.id')
            ->leftjoin('kyc_docs','kyc_docs.user_id','users.id')
            ->leftjoin('addresses','addresses.user_id','users.id')
            ->leftjoin('cities','cities.id','addresses.city')
            ->leftjoin('states','states.id','addresses.state')
            ->where('users_mappings.toplevel_id',$user_id)
            ->where('users.user_type','2')->get();
        
        }
        
        
        return DataTables::of($data)->make(true);
    }
    
    public function getUploadKycDocuments() {
        
        $user_id = Auth::User()->id;
        $kycdocs = KycDoc::where('user_id',$user_id)->whereIn('status',[1,0])->first();
            
        if($kycdocs) {
            Session::flash('error', 'Kyc already uploaded!');
            return redirect()->back()->withInput();
        }
        
        
        return view('pages.distributor_panel.kyc.upload_kyc_documents');
    }
    
    public function postUploadKycDocuments(Request $request) {
        
        $user_id = Auth::User()->id;
        $kycdocs = KycDoc::where('user_id',$user_id)->where('status',2)->first();
            
        if($kycdocs) {
            $kyc = KycDoc::find($kycdocs->id);
            
            $check_pan_num = KycDoc::where('user_id','!=',$user_id)->where('pan_number',$request->get("pan_number"))->first();
            
            if($check_pan_num) {
                Session::flash('error', 'PAN number already used!');
                return redirect()->back()->withInput();
            }
            
            $check_aadhaar_num = KycDoc::where('user_id','!=',$user_id)->where('aadhaar_number',$request->get("aadhaar_number"))->first();
            
            if($check_aadhaar_num) {
                Session::flash('error', 'Aadhaar number already used!');
                return redirect()->back()->withInput();
            }
        }
        else {
            
            $check_pan_num = KycDoc::where('pan_number',$request->get("pan_number"))->first();
            
            if($check_pan_num) {
                Session::flash('error', 'PAN number already used!');
                return redirect()->back()->withInput();
            }
            
            $check_aadhaar_num = KycDoc::where('aadhaar_number',$request->get("aadhaar_number"))->first();
            
            if($check_aadhaar_num) {
                Session::flash('error', 'Aadhaar number already used!');
                return redirect()->back()->withInput();
            }
            
            $kyc = new KycDoc();
        }
        
        $kyc->user_id = $user_id;
        $kyc->pan_number = strtoupper($request->get('pan_number'));
        $kyc->aadhaar_number = $request->get('aadhaar_number');
        $kyc->status = 0;
        
        if ($request->hasFile('pan_image')) {
            $file = $request->file('pan_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'PAN'. $user_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->pan_image = $imagename;
        }
        
        if ($request->hasFile('aadhaar_front_image')) {
            $file = $request->file('aadhaar_front_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'ADHARF'. $user_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->aadhaar_front_image = $imagename;
        }
        
        if ($request->hasFile('aadhaar_back_image')) {
            $file = $request->file('aadhaar_back_image');
            $destinationPath = public_path('/uploads/kycdocs/');
            $imagename = 'ADHARB'. $user_id . time() . '.' . $file->getClientOriginalExtension();
            $file->move($destinationPath, $imagename);
            $kyc->aadhaar_back_image = $imagename;
        }
        
        $kyc->save();
        
        Session::flash('success', 'KYC documents uploaded successfully');
        return redirect('dashboard');
        // return redirect()->route("dashboard");
    }
    
    public function getDistributorPassbook($mobile) {
       
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
        
        $distributor = User::where('mobile',$mobile)->where('user_type','3')->first();
        if($distributor) {
            $distributor_id = $distributor->id;
            $distributor_name = $distributor->name;
            
            return view('pages.distributor_panel.passbook.distributor_passbook',compact('mobile','distributor_id','distributor_name'));
        }
        else {
            Session::flash('error', 'Distributor not found!');
            return redirect()->back();
        }
    }
    
    public function getMyPassbook() {
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
    
        if($user_type == 3) {
            return view('pages.distributor_panel.passbook.distributor_passbook');
        }
        elseif($user_type == 4) {
            return view('pages.distributor_panel.passbook.super_distributor_passbook');
        }
        else{
            Session::flash('error', 'Unauthorised access!');
            return redirect()->back();
        }
    }
    
    public function getDistributorPassbookData(Request $request) {
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
        
        if($user_type == 1) {
            $distributor_id = $request->get('distributor_id');
            $data = Transactions::where('user_id',$distributor_id)
            ->whereDate('created_at', $request->get('start_date'))
            ->get();
        }
        elseif($user_type == 3){
            $data = Transactions::where('user_id',$user_id)
            ->whereDate('created_at', $request->get('start_date'))
            ->get();
        }
        else{
            $data = [];
        }
        
        // return DataTables::of($data)->make(true);
        $total_success_sum = collect($data)->sum('amount');
        return Datatables::of($data)->with(['total_success_sum' => $total_success_sum])->make(true);
    }
    
    public function getRetailerPassbook($mobile) {
        
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
    
        $retailer = User::where('mobile',$mobile)->where('user_type',2)->first();
        if($retailer) {
            $retailer_id = $retailer->id;
            $retailer_name = $retailer->name;
            
            $mapping = UsersMapping::where('user_id',$retailer_id)->where('toplevel_id',$user_id)->first();
            
            if($mapping) {
                return view('pages.distributor_panel.passbook.retailer_passbook',compact('mobile','retailer_id','retailer_name'));
            }
            elseif($user_type == 1) {
                return view('pages.distributor_panel.passbook.retailer_passbook',compact('mobile','retailer_id','retailer_name'));
            }
            else {
                Session::flash('error', 'Retailer not found!');
                return redirect()->back();
            }
        }
        else {
            Session::flash('error', 'Retailer not found!');
            return redirect()->back();
        }
    }
    
    public function getRetailerPassbookData(Request $request) {
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
        
        $retailer_id = $request->get('retailer_id');
        $retailer_mobile = $request->get('retailer_mobile');
        
        $mapping = UsersMapping::where('user_id',$retailer_id)->where('toplevel_id',$user_id)->first();
        
        if($mapping) {
            $data = Transactions::where('user_id',$retailer_id)
            ->whereDate('created_at', $request->get('start_date'))
            ->get();
        }
        elseif($user_type == 1) {
            $data = Transactions::where('user_id',$retailer_id)
            ->whereDate('created_at', $request->get('start_date'))
            ->get();
        }
        else {
            $data = [];
        }
        return DataTables::of($data)->make(true);
    }
    
    public function getCommissionReport() {
        return view('pages.comman.reports.commission_report');
    }
    
    public function getCommissionReportData(Request $request) {
        
        $user_id = Auth::user()->id;
        $user_type = Auth::user()->user_type;
        $data = [];
        
        $from = $this->apiManager->fetchFromDate($request->start_date);
        $to = $this->apiManager->fetchToDate($request->end_date);
        
        $commissoin_events = $this->apiManager->getCommissionEvents();
        
        $data = Transactions::select('transactions.*',
        'txn_tbl.amount as txn_amount','txn_tbl.event as txn_event')
        ->join('transactions as txn_tbl','txn_tbl.transaction_id','transactions.ref_txn_id')
        ->whereIn('transactions.event',$commissoin_events)
        ->where('transactions.user_id',$user_id)
        ->where('transactions.amount','>',0)
        ->whereBetween('transactions.created_at', array($from, $to))->get();
        
        $total_success_sum = collect($data)->sum('amount');
        return Datatables::of($data)->with(['total_success_sum' => $total_success_sum])->make(true);
    }
    
    public function getSuperDistributorPassbook($mobile) {
       
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
        
        $super_distributor = User::where('mobile',$mobile)->where('user_type','4')->first();
        if($super_distributor) {
            $super_distributor_id = $super_distributor->id;
            $super_distributor_name = $super_distributor->name;
            
            return view('pages.distributor_panel.passbook.super_distributor_passbook',compact('mobile','super_distributor_id','super_distributor_name'));
        }
        else {
            Session::flash('error', 'Super Distributor not found!');
            return redirect()->back();
        }
    }
    
    public function getSuperDistributorPassbookData(Request $request) {
        $user_id = Auth::User()->id;
        $user_type = Auth::User()->user_type;
        
        if($user_type == 1) {
            $super_distributor_id = $request->get('super_distributor_id');
            $data = Transactions::where('user_id',$super_distributor_id)
            ->whereDate('created_at', $request->get('start_date'))
            ->get();
        }
        elseif($user_type == 4){
            $data = Transactions::where('user_id',$user_id)
            ->whereDate('created_at', $request->get('start_date'))
            ->get();
        }
        else{
            $data = [];
        }
        $total_success_sum = collect($data)->sum('amount');
        return Datatables::of($data)->with(['total_success_sum' => $total_success_sum])->make(true);
    }
    
    
    //Retailer Ids
    public function getPurchaseRetailerIds() {
        return view('pages.distributor_panel.retailers.purchase_retailer_ids');
    }
    
    public function postPurchaseRetailerIds(Request $request) {
    
        $user_id = Auth::user()->id;
        $user_type = Auth::user()->user_type;
        
        $user = User::find($user_id);
        $quantity = $request->get('quantity');
        $plan_amount = env('RETAILER_IDS_FEE');
        $plan_min_qty = env('RETAILER_IDS_MIN_QTY');
        
        $stock_amount = $quantity * $plan_amount;
        
        if($quantity < $plan_min_qty) {
            Session::flash('error', "Minimum ".$plan_min_qty." retailer ids required");
            return redirect()->back();
        }
        elseif($stock_amount > $user->wallet) {
            Session::flash('error', 'Wallet amount is too low!');
            return redirect()->back();
        }else {
            
            $current_balance = $user->wallet;
            $final_balance = $user->wallet-$stock_amount;
            
            $pre_stock = $user->retailer_ids;
            $cur_stock = $user->retailer_ids+$quantity;
            
            $user->wallet = $final_balance;
            $user->retailer_ids = $cur_stock;
            $user->save();
            
            $txn_id = $this->apiManager->txnId("RID");
            
            $transaction = new Transactions();
            $transaction->transaction_id = $txn_id;
            $transaction->user_id = $user_id;
            $transaction->event = 'ADDRETAILERIDS';
            $transaction->amount = $stock_amount;
            $transaction->current_balance = $current_balance;
            $transaction->final_balance = $final_balance;
            $transaction->status = 1;
            $transaction->txn_type = 'Debit';
            $transaction->txn_note = 'Retailer Ids purchased';
            $transaction->save();
            
            $history = new RetailerIdsHistory();
            $history->distributor_id = $user_id;
            $history->previous_stock = $pre_stock;
            $history->current_stock = $cur_stock;
            $history->txn_type = "Credit";
            $history->save();
            
            Session::flash('success', 'Retailer Ids added successfully');
            return redirect()->back();
        }
    }
    
    public function getPurchaseRetailerIdsReport(Request $request) {
        return view('pages.distributor_panel.retailers.purchase_retailer_ids_report');
    }
    
    public function getPurchaseRetailerIdsReportData(Request $request) {
        
        $user_id = Auth::user()->id;
        $user_type = Auth::user()->user_type;
        
        $from = $this->apiManager->fetchFromDate($request->start_date);
        $to = $this->apiManager->fetchToDate($request->end_date);
        
        $query = RetailerIdsHistory::query();
    
        // $data = $query->select('transactions.*','users.retailer_ids')
        // ->join('users','users.id','transactions.user_id')
        // ->where('transactions.user_id',$user_id)
        // ->where('transactions.event','ADDRETAILERIDS')
        // ->whereBetween('transactions.created_at', array($from, $to))
        // ->get();
        
        
        $data = $query->select('*')
        ->where('distributor_id',$user_id)
        ->whereBetween('created_at', array($from, $to))
        ->get();
        
        return DataTables::of($data)->make(true);
    }
    
    public function getEditRetailer($mobile) {
        
        $user_id = Auth::user()->id;
        $user_type = Auth::user()->user_type;
        
        $retailer = User::select('users.*','addresses.*','kyc_docs.*',
        'user_banks.bank_name','user_banks.account_no','user_banks.ifsc','user_banks.branch','user_banks.primary_bank','user_banks.holder',
        'user_banks.city as bank_city','user_banks.state as bank_state','user_banks.address as bank_address')
        ->where('users.mobile',$mobile)
        ->leftjoin('addresses','addresses.user_id','users.id')
        ->leftjoin('kyc_docs','kyc_docs.user_id','users.id')
        ->leftjoin('user_banks','user_banks.user_id','users.id')
        ->first();
        
        if($retailer) {
            
            $retailer_id = $retailer->id;
            
            $mapping = UsersMapping::where('user_id',$retailer_id)->first();
            
            if($user_type != 1) {
                if($mapping->toplevel != $user_id){
                    Session::flash('error', 'Unauthorized access!');
                    return redirect()->back();      
                }
            }
            
            $states = State::where('country_id',1)->get();
            $categories = Category::select('id','cat_name')->get();
            
            $edit = $retailer;
            
            // dd($edit);
            
            return view('pages.distributor_panel.retailers.edit_retailer',compact('edit','states','categories'));
        } 
        else{
            Session::flash('error', 'Unauthorized access!');
            return redirect()->back();   
        }
        
        
       
    }
    
    public function getRecharge() {

		

        $user_id = Auth::user()->id;

        $user_type = Auth::user()->user_type;

        

        if($user_type != 2) {

            Session::flash('error', 'Unauthorized access!');

            return redirect()->back();     

        }

        

        $op = Operators::where('status','1')->where('service_id',1)->get();

        $txns = Transactions::where('user_id',$user_id)->where('event','PREPAID')->orderBy('id','desc')->limit(10)->get();

        return view('pages.services.recharge',compact('op','txns'));

    }

    

    public function getDthRecharge() {

        $user_id = Auth::user()->id;

        $user_type = Auth::user()->user_type;

        

        if($user_type != 2) {

            Session::flash('error', 'Unauthorized access!');

            return redirect()->back();     

        }

        

        $op = Operators::where('status','1')->where('service_id',2)->get();
        $txns = Transactions::where('user_id',$user_id)->where('event','DTH')->orderBy('id','desc')->limit(10)->get();
        

        return view('pages.services.dth',compact('op','txns'));

    }
    
    public function postRecharge(Request $request) {

        $user_id = Auth::user()->id;

        $user_type = Auth::user()->user_type;

        $usertoken = Auth::user()->user_token;

        

        if($user_type != 2) {

            Session::flash('error', 'Unauthorized access!'.$user_type);

            return redirect()->back();     

        }

        

       

        $mobile = $request->get("mobile");

        $opcode = $request->get("opcode");

        $amount = $request->get("amount");

        $event = "PREPAID";

        

        

        // echo $url;

        $post_data = array(

            'user_id'=>$user_id,

            'user_token'=>$usertoken,

            'mobile'=>$mobile,

            'opcode'=>$opcode,

            'amount'=>$amount,

            'event'=>$event,

            );

        $curl = curl_init();

        

        curl_setopt_array($curl, array(

          CURLOPT_URL => "https://maatarinimobile.in/api/recharge_service",

          CURLOPT_RETURNTRANSFER => true,

          CURLOPT_ENCODING => '',

          CURLOPT_MAXREDIRS => 10,

          CURLOPT_TIMEOUT => 0,

          CURLOPT_FOLLOWLOCATION => true,

          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

          CURLOPT_CUSTOMREQUEST => 'POST',

          CURLOPT_POSTFIELDS => $post_data,

        ));

        

        $response = curl_exec($curl);

        

        curl_close($curl);

        

        $data = json_decode($response);

        // print_r($response);exit;

        if($response){

            

        
            if(isset($data->success)){
                
            
                if($data->success){
    
                    Session::flash('success', $data->message);
    
                    return redirect()->back(); 
    
                }else{
    
                    Session::flash('error', $data->message);
    
                    return redirect()->back(); 
    
                }
                
            }else{
                Session::flash('error', 'Try After Few min.');
    
                    return redirect()->back(); 
            }

        }else{

           Session::flash('error', $data->message);

                return redirect()->back();  

        }

    }
    
    public function postRechargeRoffer(Request $request) {
        $user_id = Auth::user()->id;

        $user_type = Auth::user()->user_type;

        $usertoken = Auth::user()->user_token;

        

        if($user_type != 2) {

            Session::flash('error', 'Unauthorized access!'.$user_type);

            return redirect()->back();     

        }

        

       

        $mobile = $request->get("mobile");

        $op = $request->get("op");
        
        $post_data = array(

            'user_id'=>$user_id,

            'user_token'=>$usertoken,

            'tel'=>$mobile,

            'op'=>$op

            );

        $curl = curl_init();

        

        curl_setopt_array($curl, array(

          CURLOPT_URL => "https://maatarinimobile.in/api/get_recharge_roffer",

          CURLOPT_RETURNTRANSFER => true,

          CURLOPT_ENCODING => '',

          CURLOPT_MAXREDIRS => 10,

          CURLOPT_TIMEOUT => 0,

          CURLOPT_FOLLOWLOCATION => true,

          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

          CURLOPT_CUSTOMREQUEST => 'POST',

          CURLOPT_POSTFIELDS => $post_data,

        ));

        

        $response = curl_exec($curl);

        

        curl_close($curl);

        

        $data = json_decode($response);
        
        return view('pages.services.ajax.roffer',compact('data'));
    }
    
    public function postDthInfo(Request $request) {
        $user_id = Auth::user()->id;

        $user_type = Auth::user()->user_type;

        $usertoken = Auth::user()->user_token;

        

        if($user_type != 2) {

            Session::flash('error', 'Unauthorized access!'.$user_type);

            return redirect()->back();     

        }

        

       

        $mobile = $request->get("mobile");

        $op = $request->get("op");
        
        $post_data = array(

            'user_id'=>$user_id,

            'user_token'=>$usertoken,

            'number'=>$mobile,

            'op'=>$op

            );

        $curl = curl_init();

        

        curl_setopt_array($curl, array(

          CURLOPT_URL => "https://maatarinimobile.in/api/get_dth_info",

          CURLOPT_RETURNTRANSFER => true,

          CURLOPT_ENCODING => '',

          CURLOPT_MAXREDIRS => 10,

          CURLOPT_TIMEOUT => 0,

          CURLOPT_FOLLOWLOCATION => true,

          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

          CURLOPT_CUSTOMREQUEST => 'POST',

          CURLOPT_POSTFIELDS => $post_data,

        ));

        

        $response = curl_exec($curl);

        

        curl_close($curl);

        

        $data = json_decode($response);
        
        return view('pages.services.ajax.dthinfo',compact('data'));
    }
    
    public function getDmtEko() {



        $user_id = Auth::user()->id;



        $user_type = Auth::user()->user_type;



        



        if($user_type != 2) {



            Session::flash('error', 'Unauthorized access!');



            return redirect()->back();     



        }



        



        return view('pages.services.dmt_eko');



    }



    public function getCustomerInfoDmt(Request $request) {
    
        $user_id = Auth::user()->id;



        $user_type = Auth::user()->user_type;
        $mobile = $request->mobile;



        $url2 = "dmt_get_customer_info";



        $post_data2 = array(



            'user_id'=>$user_id,



            'user_token'=>Auth::user()->user_token,



            'mobile'=>$mobile,



            );
        
        $response = $this->apiManager->DomainAPIcall($url2,$post_data2);    
        
        // print_r($response);exit;
        
        $d = json_decode($response);
        

        Session::put('customer_id', $d->data->mobile);
        Session::put('remitterid', $d->data->remitterid);
        // benf get
        $url = "dmt_get_recipients";



        $post_data = array(



            'user_id'=>$user_id,



            'user_token'=>Auth::user()->user_token,



            'mobile'=>$mobile,



            );
        
        $response = $this->apiManager->DomainAPIcall($url,$post_data); 

        $r_r = json_decode($response);
        return view('pages.services.ajax.customer_info',compact('r_r'));

    }



    public function addRecipientAccount(Request $request) {

        $user_id = Auth::user()->id;



        $url = "dmt_get_banks";



        $post_data = array(



            'user_id'=>$user_id,



            'user_token'=>Auth::user()->user_token,



            );



        $apicall = $this->apiManager->DomainAPIcall($url,$post_data);



        $bank = json_decode($apicall,true);



        $cmobile = Session::get('customer_id');



        return view('pages.services.ajax.add_recipient',compact('bank','cmobile'));

    }



    public function verifyRecipientAccount(Request $request) {

        $user_id = Auth::user()->id;



        $acc = $request->account;

        $ifsc = $request->ifsc;



        $url = "user_verify_bank_account";



        $post_data = array(



            'user_id'=>$user_id,



            'user_token'=>Auth::user()->user_token,



            'number'=>$acc,



            'ifsc'=>$ifsc,



            );



        $apicall = $this->apiManager->DomainAPIcall($url,$post_data);



        $data = json_decode($apicall,true);

        

        if($data['success']){

            return response()->json(['success' => true, 'name' =>$data]);

        }else{

            return response()->json(['success' => false, 'name' =>$data['message']]);

        }

        

    }



    public function addRecipientAccountDetail(Request $request) {

        $user_id = Auth::user()->id;



        $acc = $request->account;

        $ifsc = $request->ifsc;

        // $bank_id = $request->bank_id;

        $recipient_mobile = $request->recipient_mobile;

        $recipient_name = $request->recipient_name;
        $remitterid = Session::get('remitterid');


        $url = "dmt_add_recipient";



        $post_data = array(

            'remitterid'=>$remitterid,

            'user_id'=>$user_id,



            'user_token'=>Auth::user()->user_token,



            'account_number'=>$acc,



            'ifsc'=>$ifsc,



            'recipient_name'=>$recipient_name,



            'recipient_mobile'=>$recipient_mobile,



            'branch'=>'',

            'city'=>0,

            'state'=>0,



            );



        $apicall = $this->apiManager->DomainAPIcall($url,$post_data);



        $data = json_decode($apicall,true);

        

        if($data['success']){

            return response()->json(['success' => true, 'name' =>$apicall, 'mobile'=>Session::get('customer_id')]);

        }else{

            return response()->json(['success' => false, 'name' =>$apicall, 'mobile'=>Session::get('customer_id')]);

        }

        

    }



    public function getDmtPay(Request $request) {

        $user_id = Auth::user()->id;



      

        

        $res_name = $request->rec_name;

        $res_number = $request->res_number;

        $ifsc = $request->ifsc;

        $account = $request->account;

        

        $txn_type = $request->txn_type;

        $bank = $request->bank;

        $cut_mobile = Session::get('customer_id');



        return view('pages.services.ajax.pay',compact('res_name','res_number','ifsc','account','cut_mobile','txn_type','bank'));

    }



    public function postDmtPay(Request $request) {

        $user_id = Auth::user()->id;



      

        $res_id = $request->rid;

        $res_name = $request->rec_name;

        $res_number = $request->res_number;

        $ifsc = $request->ifsc;

        $account = $request->account;

        $txn_limit = $request->used_limit;

        $txn_type = $request->txn_type;

        $bank = $request->bank;

        $amount = $request->amount;

        $cut_mobile = Session::get('customer_id');



        $url = "dmt_initiate_transaction";





        $post_data = array(



            'user_id'=>$user_id,



            'user_token'=>Auth::user()->user_token,



            'payment_type'=>$txn_type,



            'amount'=>$amount,



            'latitude'=>'19.0760',



            'longitude'=>'72.8777',



            'ifsc'=>$ifsc,



            'number' =>$account,



            'beneficiary_name' =>$res_name,
            
            'recipient_id'=>$res_number,



            'mobile'=>Session::get('customer_id'),



            );



        $apicall = $this->apiManager->DomainAPIcall($url,$post_data);



        $data = json_decode($apicall,true);



        return $apicall;

    }



    public function getDmtTxn(Request $request) {

        $user_id = Auth::user()->id;

        $txn = Transactions::where('event','QUICKDMT')->where('user_id',$user_id)->orderBy('id','desc')->limit(10)->get();





        return view('pages.services.ajax.dmt_txn',compact('txn'));

    }

    
    
}