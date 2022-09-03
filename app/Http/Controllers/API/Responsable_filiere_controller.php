<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \App\Models\Responsable_filiere;

class Responsable_filiere_controller extends Controller
{
    protected function store(Request $request){
        $validator = Validator::make($request->all(),[
            "nom" => "required| max:191 ",
            "prenom" => "required| max:191",
            "departement" => "required | max:191",
            "filiere"=>"required | max:191 | unique:responsable_filieres,filiere",
            "user_id" => "required ",
            'image' => 'required| image| mimes:jpeg,png,jpg',
            "sex" => "required ",
        ]);
        if($validator->fails()){
            return response()->json([
                "status" => 400,
                "errors" => $validator->messages(),
            ]);
        }
        else{
        $respo = new Responsable_filiere ; 
        $respo->nom = $request->input("nom");
        $respo->sex = $request->input("sex");
        $respo->prenom = $request->input("prenom");
        $respo->user_id = $request->input("user_id");
        $respo->filiere = $request->input("filiere");
        $respo->departement = $request->input("departement");
        if($request->hasFile("image")){
            $file = $request->file("image");
            $extention = $file->getClientOriginalExtension();
            $filename = time() .'.' . $extention;
            $file->move("uploads/respo/" , $filename);
            $respo->image = 'uploads/respo/' . $filename;
        }
        $respo->save();
        return response()->json([
            "status" => 200,
            "message" => "Responsable_filiere Added successfully"
        ]);
    }
    }
 
    protected function edit($id){
        $respo = Responsable_filiere::find($id);
        if($respo){
            return response()->Json([
                "status" => 200,
                "respo" => $respo,
            ]);
        }
            else{
                return response()->Json([
                    "status" => 422,
                    "message" => "Responsable_filiere not found"
                ]);
            }
    }
    protected function update(Request $request , $id){
        $respo = Responsable_filiere::find($id);
        if($respo){
            $validator = Validator::make($request->all(),[
                "nom" => "required| max:191 ",
                "prenom" => "required| max:191",
                "departement" => "required | max:191",

    
            ]);
            if($validator->fails()){
                return response()->json([
                    "status" => 400,
                    "errors" => $validator->messages(),
                ]);
            }
            else{
            $respo->nom = $request->input("nom");
            $respo->filiere = $request->input("filiere");
            $respo->prenom = $request->input("prenom");
            $respo->departement = $request->input("departement");
            $respo->update();
            return response()->json([
                "status" => 200,
                "message" => "Responsable_filiere Updated successfully"
            ]);
        }
        }
        else{
            return response()->json([
                "message" => "Responsable_filiere Not found",
                "status" => 404
            ]);
        }
    }
    protected function destroy($id){
        $respo = Responsable_filiere::find($id);
        if($respo){
            $respo->delete();
            return response()->json([
                "message" => "Responsable_filiere Deleted successfully",
                "status" => 200
            ]);
        }
        else{
           return response()->json([
               "message" => "Responsable_filiere Not found",
               "status" => 404
           ]);
        }
    }
    protected function index(){
        $respo =  Responsable_filiere::All();
        return response()->json([
            "status" => 200,
            "respo" => $respo
        ]);
    }
    protected function profile(){
        $respo = Responsable_filiere::where('user_id',auth()->user()->id  )->first();
        if($respo){
            return response()->json([
                "status" => 200,
                "Respo" => $respo
            ]);
        }
        else{
            return response()->json([
                "message" => "Respo Not found",
                "status" => 404
            ]);
        }
    }
    protected function change(Request $request){
        $respo = Responsable_filiere::where('user_id',auth()->user()->id  )->first();
        if($respo){
            $respo->phone = $request->phone;
            $respo->adresse = $request->adresse;
            $respo->date_nais = $request->date_nais;
            $respo->about = $request->about;
            $respo->save();

            return response()->json([
                "status" => 200,
                "message" => "info changed successfully"
            ]);
        }
        else{
            return response()->json([
                "message" => "Respo Not found",
                "status" => 404
            ]);
        }

    }
}