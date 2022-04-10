<?php

namespace App\Http\Middleware;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;

use Closure;

class RetailerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    
    public function handle($request, Closure $next)
    {
        if ($request->user() && $request->user()->user_type != 2) {
            Session::flash('error', 'Unauthorized access!');
            return redirect()->back();
            // return new Response(view('unauthorized')->with('role', 'RETAILER'));
        }
        return $next($request);
    }
}
