<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ambiente;

class AmbienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ambiente::create([
          "room_number"=>503,
          "level_floor"=>"5",
        ]);
        Ambiente::create([
            "room_number"=>505,
            "level_floor"=>"5",
          ]);
    }
}
