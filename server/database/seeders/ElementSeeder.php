<?php

namespace Database\Seeders;

use App\Models\Elemento;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ElementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Elemento::create([
        //     "name_element"=>"Sillas",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Portatiles",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Computadores todo en uno",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Computadores con torre",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Televisores",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Mesas",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Escritorio",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Tableros",
        //   ]);
        //   Elemento::create([
        //     "name_element"=>"Aire acondicionado",
        //   ]);
         
        //   DB::table('ambiente_element')->insert([
        //     "ambiente_id"=>1,
        //     "element_id"=>1,
        //     "quantity"=>30,
        // ]);
        DB::table('ambiente_element')->insert([
            "ambiente_id"=>1,
            "element_id"=>2,
            "quantity"=>15,
        ]);

    }
}
