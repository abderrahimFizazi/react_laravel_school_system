<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \App\Models\Eleve;

class EleveController extends Controller
{
    protected function store(Request $request){
        $validator = Validator::make($request->all(),[
            "nom" => "required| max:191 ",
            "code" => "required| max:191 ",
            "prenom" => "required| max:191",
            "filiere" => "required | max:191",
            "user_id" => "required ",
            "niveau"=> "required",
            'image' => 'required| image| mimes:jpeg,png,jpg',


        ]);
        if($validator->fails()){
            return response()->json([
                "status" => 400,
                "errors" => $validator->messages(),
            ]);
        }
        else{
        $eleve = new Eleve ; 
        $eleve->nom = $request->input("nom");
        $eleve->code = $request->input("code");
        $eleve->prenom = $request->input("prenom");
        $eleve->user_id = $request->input("user_id");
        $eleve->niveau = $request->input("niveau");
        $eleve->filiere = $request->input("filiere");
        $eleve->sex = $request->input("sex");
        $eleve->phone = $request->input("phone");
        $eleve->about = $request->input("about");
        $eleve->adresse = $request->input("adrresse");

        if($request->hasFile("image")){
            $file = $request->file("image");
            $extention = $file->getClientOriginalExtension();
            $filename = time() .'.' . $extention;
            $file->move("uploads/eleve/" , $filename);
            $eleve->image = 'uploads/eleve/' . $filename;
        }
        $eleve->save();
        return response()->json([
            "status" => 200,
            "message" => "Eleve Added successfully"
        ]);
    }
    }
 
    protected function edit($id){
        $eleve = Eleve::find($id);
        if($eleve){
            return response()->Json([
                "status" => 200,
                "eleve" => $eleve,
            ]);
        }
            else{
                return response()->Json([
                    "status" => 422,
                    "message" => "Eleve not found"
                ]);
            }
    }
    protected function update(Request $request , $id){
        $eleve = Eleve::find($id);
        if($eleve){
            $validator = Validator::make($request->all(),[
                "nom" => "required| max:191 ",
                "prenom" => "required| max:191",
                "filiere" => "required | max:191",
                "niveau"=> "required",
                "code"=> "required"
            ]);
            if($validator->fails()){
                return response()->json([
                    "status" => 400,
                    "errors" => $validator->messages(),
                ]);
            }
            else{
            $eleve->nom = $request->input("nom");
            $eleve->prenom = $request->input("prenom");
            $eleve->code = $request->input("code");
            $eleve->niveau = $request->input("niveau");
            $eleve->filiere = $request->input("filiere");
            $eleve->phone = $request->input("phone");
            $eleve->about = $request->input("about");
            $eleve->update();
            return response()->json([
                "status" => 200,
                "message" => "Eleve Updated successfully"
            ]);
        }
        }
        else{
            return response()->Json([
                "status" => 422,
                "message" => "Eleve not found"
            ]);
        }
    }
    protected function destroy($id){
        $eleve = Eleve::find($id);
        if($eleve){
            $eleve->delete();
            return response()->json([
                "message" => "Eleve Deleted successfully",
                "status" => 200
            ]);
        }
        else{
           return response()->json([
               "message" => "Eleve Not found",
               "status" => 404
           ]);
        }
    }
    protected function index(){
        $eleve =  eleve::All();
        return response()->json([
            "status" => 200,
            "eleve" => $eleve
        ]);
    }
 
    protected function get($filiere , $niveau){
        if($filiere === "All"){
            if($niveau == "All"){
                $eleve =  eleve::All();
            }
            else{
                $eleve =  eleve::where("niveau" , $niveau)->with('note')->get();
            }
        }
        else{
            if($niveau == 'All'){
                $eleve =  eleve::where("filiere" , $filiere)->with('note')->get();
            }
            else{
                $eleve =  eleve::where("filiere" , $filiere)->where("niveau" , $niveau)->with('note')->get();
            }
        }
        return response()->json([
            "status" => 200,
            "eleve" => $eleve
        ]);
    }
    protected function search($search){
        $eleve = eleve::where("nom", "LIKE", '%' . $search . '%' )->orwhere("prenom", "LIKE", '%' . $search . '%' )->orwhere("code", "LIKE", '%' . $search . '%')->get();
        return response()->json([
            "status" => 200,
            "eleve" => $eleve
        ]);
    }
    protected function profile(){
        $eleve = Eleve::where('user_id',auth()->user()->id  )->first();
        if($eleve){
            return response()->json([
                "status" => 200,
                "eleve" => $eleve
            ]);
        }
        else{
            return response()->json([
                "message" => "Eleve Not found",
                "status" => 404
            ]);
        }
    }
    protected function change(Request $request){
        $eleve = Eleve::where('user_id',auth()->user()->id  )->first();
        if($eleve){
            $eleve->phone = $request->phone;
            $eleve->adresse = $request->adresse;
            $eleve->date_nais = $request->date_nais;
            $eleve->about = $request->about;
            $eleve->save();

            return response()->json([
                "status" => 200,
                "message" => "info changed successfully"
            ]);

        }
        else{
            return response()->json([
                "message" => "Eleve Not found",
                "status" => 404
            ]);
        }

    }
}
