<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
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
            "ambiente_id"=>"required",
            "chair_quantity"=>"",
            "desck_quantity"=>"",
            "table_quantity"=>"",
            "tvScream_quantity"=>"",
            "air_condition"=>"",
            "laptop_quantity"=>"",
            "desckComputer_quantity"=>"",
            "videoBeam"=>""



        ];
    }
}
