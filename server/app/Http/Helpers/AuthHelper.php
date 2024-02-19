<?php

namespace App\Http\Helpers;

use Illuminate\Http\Exceptions\HttpResponseException;

class AuthHelper
{
    public static function sendError($errors = [], $code = 401)
    {
      $response = ["error"=>true];

      if(!empty($errors)){
        $response['message']=$errors;
      }
      throw new HttpResponseException(response()->json($response, $code));
    }
}