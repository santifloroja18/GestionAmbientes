<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockRequest;
use App\Http\Resources\StockRoomResource;
use App\Models\RoomStock;
use Illuminate\Http\Request;

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
    public function show(string $id)
    {
        $roomstock = RoomStock::find($id);

        return new StockRoomResource($roomstock);
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
