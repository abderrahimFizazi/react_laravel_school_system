<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResponsableFilieresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('responsable_filieres', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string("filiere");
            $table->string('departement');
            $table->integer("user_id");
            $table->string("sex");
            $table->string("phone")->nullable();
            $table->string("adresse")->nullable();
            $table->longText("about")->nullable();
            $table->string("date_nais")->nullable();
            $table->string("image")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('responsable_filieres');
    }
}
