<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Program;
use Illuminate\Database\Seeder;
use Termwind\Components\Element;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       $this->call([
            ElementSeeder::class,
            RoomstockSeeder::class,
            UserSeeder::class,
            ProgramSeeder::class,
            AmbienteSeeder::class,
            RolSeeder::class
       ]);
    }
}
