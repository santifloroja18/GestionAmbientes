<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Program extends Model
{
    use HasFactory;

    protected $guarded=[];

    protected $fillable = [
     "program_name"
    ];

    // protected $hidden = [
    //     "id",
    //     "pivot",
    //     "updated_at",
    //     "created_at",
    // ];

    public function ambientes(): BelongsToMany
    {
        return $this->belongsToMany(Ambiente::class, 'room_program', 'ambiente_id', 'program_id');
    }
}
