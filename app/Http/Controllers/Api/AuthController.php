<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\loginRequest;
use App\Http\Requests\UserRequestRegister;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use function Laravel\Prompts\password;
use function PHPUnit\Framework\returnSelf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
         "password" => Hash::make($request->password),
       ]);

       return response()->json([
          "data"=>$user,
          "message"=>"User created successfully",
          "token"=>$user->createToken('API TOKEN')->plainTextToken
       ], 200);
    }

    public function loginUser(loginRequest $request): Response
    {
       if(!Auth::attempt($request->only(["email" , "password"])))
       {
        return response()->json([
            "status"=> false,
            "message"=>"Credentials not correct"
        ], 401);
       }
       $user=User::where("email", $request->email)->first();

       return response()->json([
           "status"=>true,
           "message"=>"User logged in successfully",
           "token"=>$user->createToken('API TOKEN')->plainTextToken
       ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
