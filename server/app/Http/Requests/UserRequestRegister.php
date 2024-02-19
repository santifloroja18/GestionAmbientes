<?php

namespace App\Http\Requests;

use App\Http\Helpers\AuthHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as RulesPassword;

class UserRequestRegister extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        
        return [
            "first_name"=>"required",
            "second_name"=>"required",
            "first_lastname"=>"required",
            "second_lastname"=>"",
            "email"=>"required|email|unique:users,email",
            "second_email"=>"",
            "working_day"=>"required",
            "documentType"=>"required",
            "document_number"=>"required|unique:users,document_number",
            "phone_number"=>"required",
            "password"=>['required', RulesPassword::min(8)->numbers(1)->mixedCase(1)->symbols(1)]

        ];
    }
  
    public function failedValidation(Validator $validator){
        AuthHelper::sendError($validator->errors());
    }
}
