<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\User;

class Rol extends Model
{
    use HasFactory;

    protected $fillable=["nombre_rol"];

    protected $guarded=[];

    public function users(): BelongsToMany
   {
    return $this->belongsToMany(User::class,'rol_user', 'id_rol', 'id_user');
   }


    
}
