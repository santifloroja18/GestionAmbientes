<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Elemento extends Model
{
    use HasFactory;

    protected $guarded=[];


    protected $hidden = [
        "created_at",
        "updated_at",
        "id"
    ];
    protected $fillable = [
       "name_element",
    ];

    public function ambientes(): BelongsToMany
    {
        return $this->belongsToMany(ambiente::class, 'ambiente_element', 'ambiente_id', 'element_id')->withPivot('quantity');
    }
}
