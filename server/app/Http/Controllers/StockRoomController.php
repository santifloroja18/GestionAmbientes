<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockRequest;
use App\Http\Resources\StockRoomResource;
use App\Models\RoomStock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StockRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $roomstock = RoomStock::all();

        return response()->json([
            $roomstock
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StockRequest $request)
    {
       $roomstock = RoomStock::create([
            "ambiente_id"=>$request->ambiente_id,
            "chair_quantity"=>$request->chair_quantity,
            "desck_quantity"=>$request->desck_quantity,
            "table_quantity"=>$request->table_quantity,
            "tvScream_quantity"=>$request->tvScream_quantity,
            "air_condition"=>$request->air_condition,
            "laptop_quantity"=>$request->laptop_quantity,
            "desckComputer_quantity"=>$request->desckComputer_quantity,
            "videoBeam"=>$request->videoBeam
        ]);

        return response()->json([
            $roomstock,
            "message"=>"Stock has been added successfuly"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $roomstock = RoomStock::find($id);
        return new StockRoomResource($roomstock);
        // $roomstock = DB::select("SELECT *FROM `room_stocks` where 'ambiente_id'=$id");
       
        // return response()->json([
        //     $roomstock
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StockRequest $request, $id)
    {
        $stock=RoomStock::find($id);
        $stock->chair_quantity = $request->chair_quantity;
        $stock->desck_quantity = $request->desck_quantity;
        $stock->table_quantity = $request->table_quantity;
        $stock->tvScream_quantity = $request->tvScream_quantity;
        $stock->air_condition = $request->air_condition;
        $stock->laptop_quantity = $request->laptop_quantity;
        $stock->desckComputer_quantity = $request->desckComputer_quantity;
        $stock->videoBeam = $request->videoBeam;
        $stock->save();
        
        return response()->json([
            'status' => true,
            'Message' => 'Room modified successfully',
            $stock
        ], 200)->send('Room modified successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
