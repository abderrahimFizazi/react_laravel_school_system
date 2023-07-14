<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\MyEmail;
use App\Models\Email;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class EmailController extends Controller
{
    public function SendEmail(Request $request) 
{
      
    $data = [
        'Name'  => $request->username,
        'Email' => $request->myEmail,
        'Query' => $request->body
        ];
$subject = $request->subject;
$dest = $request->dest;
$username =  $request->username;
//Mail Function
Mail::send('emails.myemail', ['data1' => $data], function ($m) use ($subject, $dest  , $username) {
 
    $m->from($dest, $username)->to($dest)->subject($subject);
});
//Json Response For Angular frontend
return response()->json(["message" => "Email sent successfully." , "status" => 200]);
}
}
