<?php

namespace App\Http\Middleware;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;

use Closure;

class SuperDistributorMiddleware
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
        if ($request->user() && $request->user()->user_type != 4) {
            Session::flash('error', 'Unauthorized access!');
            return redirect()->back();
            // return new Response(view('unauthorized')->with('role', 'DISTRIBUTOR'));
        }
        return $next($request);
    }
}
