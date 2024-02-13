<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RoomStock extends Model
{
    use HasFactory;

    protected $fillable=[
        "ambiente_id",
        "chair_quantity",
        "desck_quantity",
        "table_quantity",
        "tvScream_quantity",
        "air_condition",
        "laptop_quantity",
        "desckComputer_quantity",
        "videoBeam",

    ];

    protected $guarded=[];

    public function ambiente(): BelongsTo
    {
        return $this->belongsTo(Ambiente::class, 'ambiente_id', 'id');
    }
}
