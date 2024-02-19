<?php

namespace Database\Seeders;

use App\Models\RoomStock;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomstockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RoomStock::create([
            "ambiente_id"=> 1,
            "chair_quantity"=> 30,
            "desk_quantity"=> 1,
            "table_quantity"=> 12,
            "tvScream_quantity"=> 1,
            "air_condition"=> true,
            "laptop_quantity"=> 24,
            "deskComputer_quantity"=> 12,
            "videoBeam"=> true,
        ]);
    }
}
