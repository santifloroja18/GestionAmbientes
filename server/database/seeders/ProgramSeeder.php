<?php

namespace Database\Seeders;

use App\Models\Program;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Program::create([
            "program_name"=>"Analisis y Desarrollo de Software"
        ]);
        Program::create([
            "program_name"=>"Multimedia"
        ]);
        DB::table('room_program')->insert([
             "ambiente_id"=>1,
             "program_id"=>2
        ]);
        DB::table('room_program')->insert([
            "ambiente_id"=>2,
            "program_id"=>1
       ]);
    }
}
