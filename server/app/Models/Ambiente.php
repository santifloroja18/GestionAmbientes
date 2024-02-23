<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Ambiente extends Model
{
    use HasFactory;

    protected $guarded=[];

    protected $fillable=[
        "room_number",
        "level_floor"
    ];

    

    public function programs(): BelongsToMany
    {
        return $this->belongsToMany(Program::class, 'room_program', 'ambiente_id', 'program_id');
    }

    public function roomstock(): HasOne
    {
        return $this->hasOne(RoomStock::class, 'ambiente_id', 'id');
    }

    public function elements(): BelongsToMany
    {
        return $this->belongsToMany(Elemento::class, 'ambiente_element', 'ambiente_id', 'element_id')->withPivot('quantity');
    }
}
