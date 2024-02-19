<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\loginRequest;
use App\Http\Requests\UserRequestRegister;
use App\Http\Resources\UserResource;
use App\Models\Rol;
use App\Models\User;
use Dotenv\Parser\Value;
use Illuminate\Auth\Events\Authenticated;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Switch_;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function register(UserRequestRegister $request): Response
    {
       $user=User::create([
         "first_name" => $request->first_name,
         "second_name"=>$request->second_name,
         "first_lastname"=>$request->first_lastname,
         "second_lastname"=>$request->second_lastname,
         "email" => $request->email,
         "second_email" => $request->second_email,
         "working_day" => $request->working_day,
         "documentType" => $request->documentType,
         "document_number" => $request->document_number,
         "phone_number" => $request->phone_number,
         //---password shuold be aleast 8 characters, aleast a lowercase and a uppercase also aleast special character.
         "password" => Hash::make($request->password),
       ]);
       //---creating tokens for new user
        $token=$user->createToken('API TOKEN')->plainTextToken;
        return response()->json([
        //---we retunr a response warning about new user created
        "data"=>$user,
        "message"=>"User registered successfully",
        "token"=>$token
     ], 200);
    }

    public function loginUser(loginRequest $request): Response
    {
        //---VERIFY IF USER IS AUTHENTICATED
       if(!Auth::attempt($request->only(["email" , "password"])))
       
       {
        //---SEND A MESSAGE IF USER HAVEN`T BEEN AUTHENTICATED
        return response()->json([
            "status"=> false,
            "message"=>"Credentials not correct"
        ], 401);
       }
       else
       {
       //---TAKE USER INFORMACION
       $user=User::where("email", $request->email)->first();
       //---IF USER EXIST, SO VERIFY USER ROL
       $roluser=DB::select("SELECT *FROM `rol_user` WHERE `user_id`= $user->id");
       //---IF USER HAS A ROL ASOCIETED, SO CREATE TOKEN AND RETURN CORRESPONDING VIEW CONTROL
       $token=$user->createToken('API TOKEN')->plainTextToken; 
       if($roluser){
       
        foreach ($roluser as $rol) {

            switch ($rol->rol_id) {
                case 1:
                    //---RETURN FULL MANAGER CONTROL
                    return response()->json([
                        "status"=>true,
                        //--ROL USER
                        'rol'=>$rol->rol_id,
                        //---MESSAGE
                        "message"=>$user->first_name.":// Despues de haber validado el rol, aqui retornaremos el panel de control administrativo con todas las funcionalidades disponibles; en otras palabras aqui devolvemos la vista para administrador",
                        //---SET COOKIES WITH VALUE CORRESPONDING TOKEN USER
                    ])->withCookie('cookie-token', $token);
                        
                        
                    break;

                case 2:
                    //---RETURN AUXILIARY CONTROL
                    return response()->json([
                        'rol'=>$rol->rol_id,
                        'message'=>'// Si el rol no es administrador, aqui retornamos el PANEL PARA AUXILIARES con 
                        permisos o funcionalidades acorde a los permisos otorgaados a este rol'])->withCookie('cookie-token', $token);    //<---//SET COOKIES WITH VALUE CORRESPONDING TOKEN USER
                    
                break;

                case 3:
                   //---RETURN FORMS FOR UPDATING DATA FOR INSTRUCTORS
                    return response()->json([
                        'rol'=>$rol->rol_id,
                        'message'=>'// Aqui retornamos panel para registro y actualizacion de datos de instructores. Ya que segun se podria desarrollar una aplicacion para dicha actividad sin necesidad de ir al area adminstrativa de ambientes y de esa manera tener la posibilidad de realizar reservas de ambientes y elementos.'])->withCookie('cookie-token', $token); //<---//SET COOKIES WITH VALUE CORRESPONDING TOKEN USER
                    
                break;
            }

                }
       }
       else{
        //---IF USER HASN`T A ROL, SENDING A INFORMATIVE MESSAGE.
        return response()->json(['message'=>'User no authorizided'])->header('token', $token)->withCookie('token', $token);
       }
         }  
    }

    //---THIS FUNCTION DESTROY TOKEN-ACCESS AND SESSION-USER
    public function logout(){
    $cookie=cookie()->forget('cookie-token');
    return response()->json('Sesion terminada')->withCookie($cookie);
    }

    public function index()
     {
    //    $roles=Rol::all();
    //    return new UserResource($roles->firstWhere('id', 2);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
