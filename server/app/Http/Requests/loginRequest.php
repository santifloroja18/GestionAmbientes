<?php

namespace App\Http\Requests;

use App\Http\Helpers\AuthHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class loginRequest extends FormRequest
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
            "email"=>"required",
            "password"=>"required"
        ];
    }
    public function messages()
    {
        return 
        [
         "email.required"=>"El campo es obligatorio",
        ];
    }
    public function failedValidation(Validator $validator){
        AuthHelper::sendError($validator->errors());
    }
}
