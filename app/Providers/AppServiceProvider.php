<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use DB;
use App\User;
use App\Model\UserWebsite;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot() {
        view()->composer(['*'], function ($view) {
            
            
            
            $current_url = $_SERVER['HTTP_HOST'];
            
            $logourl = env('IMAGE_URL').'uploads/website_logo/';
            $logo = DB::raw("CONCAT('$logourl',user_websites.logo) AS logo");
            $geturl = UserWebsite::select('user_websites.*',$logo)->where('website_url',$current_url)->first();
            if($geturl){
            
              
            }else{
                $geturl = UserWebsite::select('user_websites.*',$logo)->where('id',2)->first();
            }
            
            $view->with([
                
                'website' =>$geturl
            ]);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
