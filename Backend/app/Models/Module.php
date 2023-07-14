<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Element_module;
class Module extends Model
{
    use HasFactory;
    protected $fillable = [
        "code",
        "designation",
        "niveau",
        "semestre",
        "id_filiere"
    ];
    protected $casts = ['element'];
    public function Element(){
        return $this->hasMany(Element_module::class , 'id_module' , 'id');
    }
}
