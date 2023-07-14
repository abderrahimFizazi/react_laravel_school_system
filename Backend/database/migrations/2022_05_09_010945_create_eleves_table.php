<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElevesTable extends Migration
{
  
    public function up()
    {
        Schema::create('eleves', function (Blueprint $table) {
            $table->id();
            $table->string("code");
            $table->string("nom");
            $table->string("prenom");
            $table->string("sex");
            $table->string("phone")->nullable();
            $table->string("adresse")->nullable();
            $table->longText("about")->nullable();
            $table->string("date_nais")->nullable();
            $table->string("niveau");
            $table->string("filiere");
            $table->string("user_id");
            $table->string("image");
            $table->timestamps();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('eleves');
    }
}
