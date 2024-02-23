<?php

namespace App\Http\Resources;

use App\Models\Ambiente;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StockRoomResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            // "ambiente_id"=>$this->ambiente_id,
            // "chair_quantity"=>$this->chair_quantity,
            // "desk_quantity"=>$this->desk_quantity,
            // "table_quantity"=>$this->table_quantity,
            // "tvScream_quantity"=>$this->tvScream_quantity,
            // "air_condition"=>$this->air_condition,
            // "laptop_quantity"=>$this->laptop_quantity,
            // "deskComputer_quantity"=>$this->deskComputer_quantity,
            // "videoBeam"=>$this->videoBeam,
            "stock"=>$this->roomstock
            
        
        ];
    }
}
