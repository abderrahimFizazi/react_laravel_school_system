<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\Responsable_filiere_controller;
use App\Http\Controllers\API\ModuleController;
use App\Http\Controllers\API\ElementModuleController;
use App\Http\Controllers\API\EleveController;
use App\Http\Controllers\API\NoteController;
use App\Http\Controllers\API\MoyenneController;
use App\Http\Controllers\API\EmailController;


Route::post('login' , [AuthController::class , 'login' ]);

Route::middleware(['auth:sanctum'])->group(function (){
    //Eleve =================================
    Route::get('CheckEleveAuth' , function (){
        return response()->Json(["message" => "You are in" , "status" => 200] , 200);
    });
    Route::get('profileeleve', [EleveController::class , 'profile']);
    Route::put('change_info_eleve', [EleveController::class , 'change']);
    Route::get('getNotesEleve', [NoteController::class , 'getEleve']);
    Route::post('logout' , [AuthController::class , 'logout' ]);
    Route::get('isVerify' , [AuthController::class , 'isVerify' ]);
    Route::put('change_pass' , [AuthController::class , 'change' ]);
    Route::get('index_element', [ElementModuleController::class , 'index']);
    Route::get('getElements/{filiere}/{niveau}', [ElementModuleController::class , 'getElements']);
    Route::get('getModules/{filiere}/{niveau}', [ModuleController::class , 'get']);
    Route::get('index_module', [ModuleController::class , 'index']);
    Route::get('edit_module/{id}', [ModuleController::class , 'edit']);
    Route::get('index_respo', [Responsable_filiere_controller::class , 'index']);
    Route::get('index_eleve', [EleveController::class , 'index']);
    Route::get('2', [EleveController::class , 'index']);

    //responsable de filiere=========================
    Route::middleware('isApiRespo')->group(function (){
        Route::get('CheckRespoAuth' , function (){
            return response()->Json(["message" => "You are in" , "status" => 200] , 200);
        });
        Route::get('index' , [AuthController::class , 'index' ]);
        Route::get('getLastId' , [AuthController::class , 'getLastId' ]);
        Route::get('profilerespo', [Responsable_filiere_controller::class , 'profile']);
        Route::put('change_info_respo', [Responsable_filiere_controller::class , 'change']);
        Route::get('getElements/{module_id}', [ElementModuleController::class , 'get']);
        
        //CRUD Note 
        Route::post('store_note', [NoteController::class , 'store']);
        Route::post('store_notes',[NoteController::class , 'storemultiply']);
        Route::delete('destroy_note/{id}', [NoteController::class , 'destroy']);
        Route::get('edit_note/{id}', [NoteController::class , 'edit']);
        Route::put('update_note/{id}', [NoteController::class , 'update']);
        Route::get('index_note', [NoteController::class , 'index']);
        Route::get('getNote/{element}', [NoteController::class , 'get']);
        
        Route::delete('destroy/{id}' , [AuthController::class , 'destroy']);
        Route::get('edit_element/{id}', [ElementModuleController::class , 'edit']);

        Route::get('eleves/{filiere}/{niveau}', [EleveController::class , 'get']);

        //Admin===========================================
        Route::middleware('isApiAdmin')->group(function (){
            Route::get('CheckAdminAuth' , function (){
                return response()->Json(["message" => "You are in" , "status" => 200] , 200);
            });
            Route::post('register' , [AuthController::class , 'register' ]);

            //CRUD Responsable filiere
            Route::post('store_respo', [Responsable_filiere_controller::class , 'store']);
            Route::delete('destroy_respo/{id}', [Responsable_filiere_controller::class , 'destroy']);
            Route::get('edit_respo/{id}', [Responsable_filiere_controller::class , 'edit']);
            Route::put('update_respo/{id}', [Responsable_filiere_controller::class , 'update']);


            //CRUD Module
            Route::post('store_module', [ModuleController::class , 'store']);
            Route::delete('destroy_module/{id}', [ModuleController::class , 'destroy']);
            Route::put('update_module/{id}', [ModuleController::class , 'update']);

            //CRUD Element Module
            Route::post('store_element', [ElementModuleController::class , 'store']);
            Route::delete('destroy_element/{id}', [ElementModuleController::class , 'destroy']);
            Route::put('update_element/{id}', [ElementModuleController::class , 'update']);


            //CRUD Eleve 
            Route::post('store_eleve', [EleveController::class , 'store']);
            Route::delete('destroy_eleve/{id}', [EleveController::class , 'destroy']);
            Route::get('edit_eleve/{id}', [EleveController::class , 'edit']);
            Route::put('update_eleve/{id}', [EleveController::class , 'update']);
            Route::get('search/{search}', [EleveController::class , 'search']);


            //CRUD Moyenne 
            Route::post('store_moyenne', [MoyenneController::class , 'store']);
            Route::delete('destroy_moyenne/{id}', [MoyenneController::class , 'destroy']);
            Route::get('edit_moyenne/{id}', [MoyenneController::class , 'edit']);
            Route::put('update_moyenne/{id}', [MoyenneController::class , 'update']);
            Route::get('index_moyenne', [MoyenneController::class , 'index']);

        });
    });
    Route::post('sendMail' , [EmailController::class , "SendEmail"]);

});


