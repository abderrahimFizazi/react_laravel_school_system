<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \App\Models\Filiere;
use \App\Models\Module;

class ModuleController extends Controller
{
    protected function store(Request $request){
        $validator = Validator::make($request->all(),[
            "code" => "required| max:191 | unique:modules,code",
            "designation" => "required| max:191",
            "niveau" => "required| max:191",
            "filiere" => "required | max:191",
        ]);
        if($validator->fails()){
            return response()->json([
                "status" => 400,
                "errors" => $validator->messages(),
            ]);
        }
        else{
        $module = new Module ; 
        $module->code = $request->input("code");
        $module->designation = $request->input("designation");
        $module->filiere = $request->input("filiere");
        $module->semestre = $request->input("niveau");
        if($request->input("niveau") === "S1" || $request->input("niveau")=== "S2"){
            $module->niveau = 1;
        }
        else if($request->input("niveau") === "S3" || $request->input("niveau")=== "S4"){
            $module->niveau = 2;
        }
        else if($request->input("niveau") === "S5" || $request->input("niveau")=== "S6"){
            $module->niveau = 3;
        }


        $module->save();
        return response()->json([
            "status" => 200,
            "message" => "Module Added successfully"
        ]);
    }
    }
    protected function index(){
        $module = Module::All();
        return response()->json([
            "status" => 200,
            "module" => $module
        ]);
    }
    protected function edit($id){
        $module = Module::find($id);
        if($module){
            return response()->json([
                "status" => 200,
                "module" => $module
            ]);
        }
        else{
            return response()->json([
                "status" => 404,
                "message" => "module Not found"
            ]);
        }
    }
    protected function update(Request $request , $id){
        $module = Module::find($id);
        if($module){
            $validator = Validator::make($request->all(),[
                "designation" => "required| max:191",
                "niveau" => "required| max:191",
                "filiere" => "required | max:191",
            ]);
            if($validator->fails()){
                return response()->json([
                    "status" => 400,
                    "errors" => $validator->messages(),
                ]);
            }
            else{
                $module->code = $request->input("code");
                $module->designation = $request->input("designation");
                $module->filiere = $request->input("filiere");
                $module->semestre = $request->input("niveau");
                if($request->input("niveau") === "S1" || $request->input("niveau")=== "S2"){
                    $module->niveau = 1;
                }
                else if($request->input("niveau") === "S3" || $request->input("niveau")=== "S4"){
                    $module->niveau = 2;
                }
                else if($request->input("niveau") === "S5" || $request->input("niveau")=== "S6"){
                    $module->niveau = 3;
                }
        
               
                $module->update();
                return response()->json([
                    "status" => 200,
                    "message" => "Module Updated successfully"
                ]);
            }
        }
        else{
            return response()->json([
                "status" => 404,
                "message" => "Module Not found"
            ]);
        }
    }
    protected function destroy($id){
        $module = Module::find($id);
        if($module){
            $module->delete();
            return response()->json([
                "message" => "Module Deleted successfully",
                "status" => 200
            ]);
        }
        else{
            return response()->json([
                "status" => 404,
                "message" => "Module Not found"
            ]);
        }
    }
    protected function get($filiere , $niveau){
        $module = Module::where("filiere" , $filiere)->where("niveau" , $niveau)->with('element')->get();
        if($module){
            return response()->json([
                "module" => $module,
                "status" => 200
            ]);
        }
        else{
            return response()->json([
                "status" => 404,
                "message" => "Module Not found"
            ]);
        }
    }
    
}
