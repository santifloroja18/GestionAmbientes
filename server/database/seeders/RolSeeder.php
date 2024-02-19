<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rol;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rol::create([
        "rol_name"=>"Manager"
        ]);
        Rol::create([
        "rol_name"=>"Assistant"
        ]);
        Rol::create([
        "rol_name"=>"clase instructor"
        ]);

        DB::table('rol_user')->insert([
            "rol_id"=>1,
            "user_id"=>1
        ]);

        DB::table('rol_user')->insert([
            "user_id"=>2
        ]);
        DB::table('rol_user')->insert([
            "rol_id"=>2,
            "user_id"=>3
        ]);
    }
}
