<?php

/*
|--------------------------------------------------------------------------
| Web Routes - AMIT
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::get('distributor-registration', ['as' => 'get:distributor_registration', 'uses' => 'Auth\RegisterController@getDistributorRegistration']);
Route::post('distributor-registration', ['as' => 'post:distributor_registration', 'uses' => 'Auth\RegisterController@postDistributorRegistration']);
Route::post('get-stateid-city', ['as' => 'post:get_stateid_city', 'uses' => 'Auth\RegisterController@getStatesIdCity']);
Route::get('chat-page/{number}/{name}', ['as' => 'get:chat_page', 'uses' => 'Controller@getChatPage']);

Auth::routes();

Route::get('/', function () {
    if(Auth::check()) { return redirect('/dashboard');} 
    else {return view('auth.login');}
});

Route::get('forgot-password', ['as' => 'get:forgot_password', 'uses' => 'Auth\LoginController@getForgotPassword']);
Route::post('send-forgot-otp', ['as'=>'post:send_forgot_otp','uses'=>'Auth\LoginController@forgotPasswordSendOtp']);
Route::post('verify-forgot-otp', ['as'=>'post:verify_forgot_otp','uses'=>'Auth\LoginController@forgotPasswordVerifyOtp']);


Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::get('/dashboard', 'HomeController@index')->name('dashboard');
Route::post('get-inflow-outflow', ['as' => 'post:get_inflow_outflow', 'uses' => 'HomeController@getInflowOutflow']);

Route::get('create-form', ['as' => 'get:create_form', 'uses' => 'HomeController@getCreateForm']);
Route::post('create-form', ['as' => 'post:create_form', 'uses' => 'HomeController@postCreateForm']);
Route::get('create-form-2', ['as' => 'get:create_form_2', 'uses' => 'HomeController@getCreateForm2']);

Route::post('create-form-2', ['as' => 'post:create_form_2', 'uses' => 'HomeController@postCreateForm2']);
Route::get('form-list', ['as' => 'get:form_list', 'uses' => 'HomeController@getFormList']);
Route::get('form-list-data', ['as' => 'get:form_list_data', 'uses' => 'HomeController@getFormListData']);

Route::get('form-submited/{id}', ['as' => 'get:form_submited', 'uses' => 'HomeController@getFormSubmited']);
Route::get('form-submited-data', ['as' => 'get:form_submited_data', 'uses' => 'HomeController@getFormSubmitedData']);

Route::get('form-fill/{id}', ['as' => 'get:form_fill', 'uses' => 'HomeController@getFormFill']);
Route::post('form-fill', ['as' => 'post:form_fill', 'uses' => 'HomeController@postFormFill']);

Route::post('get-state-city', ['as' => 'post:get_state_city', 'uses' => 'HomeController@getStatesCity']);
Route::post('get-edit-state-city', ['as' => 'post:get_edit_state_city', 'uses' => 'HomeController@getEditStatesCity']);


Route::post('check-mobile-registration', ['as' => 'post:check_mobile_registration', 'uses' => 'HomeController@checkMobileRegistration']);

//DISTRIBUTORS-ROUTES-STARTS-----------------------------------------------------------------------------------------
Route::group(['middleware' => 'App\Http\Middleware\DistributorMiddleware'], function() {
	Route::get('reports/commission-report', ['as' => 'get:commission_report', 'uses' => 'DistributorController@getCommissionReport']);
    Route::get('reports/commission-report-data', ['as' => 'get:commission_report_data', 'uses' => 'DistributorController@getCommissionReportData']);
	Route::get('retailers-ids/purchase-retailer-ids', ['as' => 'get:purchase_retailer_ids', 'uses' => 'DistributorController@getPurchaseRetailerIds']);
	Route::post('retailers-ids/purchase-retailer-ids', ['as' => 'post:purchase_retailer_ids', 'uses' => 'DistributorController@postPurchaseRetailerIds']);
	Route::get('retailers-ids/purchase-retailer-ids-report', ['as' => 'get:purchase_retailer_ids_report', 'uses' => 'DistributorController@getPurchaseRetailerIdsReport']);
	Route::get('retailers-ids/purchase-retailer-ids-report-data', ['as' => 'get:purchase_retailer_ids_report_data', 'uses' => 'DistributorController@getPurchaseRetailerIdsReportData']);
});

//ADMIN-ROUTES_STARTS------------------------------------------------------------------------------------------------
Route::group(['middleware' => 'App\Http\Middleware\AdminMiddleware'], function() {
    
    
	Route::get('distributors/add-distributor', ['as' => 'get:add_distributor', 'uses' => 'AdminController@getAddDistributor']);
	Route::post('distributors/add-distributor', ['as' => 'post:add_distributor', 'uses' => 'AdminController@postAddDistributor']);
	Route::get('distributors/manage-distributors', ['as' => 'get:manage_distributors', 'uses' => 'AdminController@getManageDistributors']);
	Route::get('distributors/manage-distributor-data', ['as' => 'get:manage_distributors_data', 'uses' => 'AdminController@getManageDistributorsData']);
    
    Route::get('settings/my-app', ['as' => 'get:my_app', 'uses' => 'AdminController@getMyApp']);
    Route::post('settings/my-app', ['as' => 'post:my_app', 'uses' => 'AdminController@postMyApp']);
    
    
});


//RETAILER-ROUTES-STARTS-----------------------------------------------------------------------------------------
Route::group(['middleware' => 'App\Http\Middleware\SuperDistributorMiddleware'], function() {
    

	
	
    
});


//RETAILER-ROUTES-STARTS-----------------------------------------------------------------------------------------
Route::group(['middleware' => 'App\Http\Middleware\RetailerMiddleware'], function() {
    
    
    
    
});






