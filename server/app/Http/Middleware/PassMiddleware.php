<?php

namespace App\Http\Middleware;

use Closure;
use DragonCode\Contracts\Cashier\Auth\Auth;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class PassMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($id): Response
    {

        $roluser=DB::select('SELECT rol_id FROM rol_user where user_id=$id');

        if($roluser==1){
            // abort(403);
            return response()->json(["message"=>"Has accedido al panel administrativo"]);
        }
        else
        {
           return response()->json(['message'=>'Rol user not found']);
        }

        
        
        // return $next($request);
    }
}
