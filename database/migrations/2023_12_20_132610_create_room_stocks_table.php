<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('room_stocks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ambiente_id');
            $table->integer('chair_quantity');
            $table->integer('desk_quantity');
            $table->integer('table_quantity');
            $table->integer('tvScream_quantity');
            $table->boolean('air_condition')->default(false);
            $table->integer('laptop_quantity');
            $table->integer('deskComputer_quantity');
            $table->boolean('videoBeam')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('room_stocks');
    }
};
