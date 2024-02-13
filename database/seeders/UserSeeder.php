<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
         "first_name"=>"Luis",
         "second_name"=>"Alfredo",
         "first_lastname"=>"Vargas",
         "second_lastname"=>"Muriel",
         "email"=>"luis@luis.com",
         "second_email"=>"secodemail@second.com",
         "working_day"=>"Morning",
         "documentType"=>"Cedula",
         "document_number"=>"10123456789",
         "phone_number"=>"3201234567",
         "password"=>"1234Aa@8",
        ]);
    User::create([
        "first_name"=>"Jose",
        "second_name"=>"Miguel",
        "first_lastname"=>"Lleras",
        "second_lastname"=>"Kelvin",
        "email"=>"Jkelvin@kelvin.com",
        "second_email"=>"secodJkelvin@secondkelvin.com",
        "working_day"=>"Afternoon",
        "documentType"=>"Cedula",
        "document_number"=>"10123456788",
        "phone_number"=>"3201234567",
        "password"=>"1234Ee@8",
        ]);
    User::create([
        "first_name"=>"Susan",
        "second_name"=>"Bell",
        "first_lastname"=>"Dorkin",
        "second_lastname"=>"Salgin",
        "email"=>"susan@susan.com",
        "second_email"=>"secodsusan@secondsusan.com",
        "working_day"=>"evening",
        "documentType"=>"Cedula",
        "document_number"=>"10123456787",
        "phone_number"=>"3201234567",
        "password"=>"1234Ii@8",
        ]);
    }
}
