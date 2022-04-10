<?php

namespace App\Model;
use App\User;

use Illuminate\Database\Eloquent\Model;

class KycDoc extends Model
{
    public static function getKycStatus($user_id) {
        $check = KycDoc::where('user_id',$user_id)->first();
        
        if($check) 
            $status = $check->status;
        else
            $status = 3;
            
        return $status;
    }
}
