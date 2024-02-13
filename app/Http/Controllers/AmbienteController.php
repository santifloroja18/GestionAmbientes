<?php

namespace App\Http\Controllers;

use App\Http\Requests\AmbienteRequest;
use App\Http\Resources\RoomResource;
use App\Http\Resources\StockRoomResource;
use App\Models\Ambiente;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AmbienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
    //    $Ambiente=DB::select('SELECT `b`.`room_number`, `b`.`level_floor`, `b`.`state`, `c`.`program_name` FROM `room_program` AS `a` INNER JOIN `ambientes` as `b` ON `a`.`id_room`=`b`.`id` INNER JOIN `programs` AS `c` ON `a`.`id_program`=`c`.`id`;');
        // -- INNER JOIN `room_stocks` AS `d` ON `b`.`id`=`d`.`id_room`')
       $ambiente=Ambiente::all();
       return response()->json($ambiente);
        
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AmbienteRequest $request)
    {
        $request=Ambiente::create
        ([
            "room_number"=>$request->room_number,
            "level_floor"=>$request->level_floor,
            "state"=>$request->state,
        ]);

        return response()->json([
         $request,
         "message"=>"Room created successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $room=Ambiente::find($id);
        return new RoomResource($room);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
