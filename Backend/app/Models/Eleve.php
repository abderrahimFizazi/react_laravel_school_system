<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\User;
use \App\Models\Moyenne;
use \App\Models\note;

class Eleve extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'prenom',
        'niveau',
        'filiere',
        'user_id',
        'image',
        'code',
        'sex',
        'date_nais',
        'adresse'
    ];
    protected $with = ['user'];
    protected $cast = ['note'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function moyenne(){
        return $this->hasOne(Moyenne::class);
    }
    public function note(){
        return $this->hasMany(note::class);
    }

}
