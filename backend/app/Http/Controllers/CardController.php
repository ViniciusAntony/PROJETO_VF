<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveRequest;
use App\Models\Card;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CardController extends Controller
{
    public function savecard(SaveRequest $request)
    {
        $card = Card::create([
            'name' => $request->input('name'),
            'species' => $request->input('species'),
            'image' => $request->input('image'),
            'url' => $request->input('url'),
        ]);

        return response($card, Response::HTTP_CREATED);
    }

    public function getAllCards()
    {
        $cards = Card::all();
        
        return response()->json($cards, 200);
    }

    public function deleteCard($id)
    {
        $card = Card::find($id);
    
        if (!$card) {
            return response()->json(['message' => 'Card não encontrado'], 404);
        }
    
        $card->delete();
    
        return response()->json(['message' => 'Card excluído com sucesso']);
    }
        

    public function getCardById($id)
    {
        $card = Card::find($id);

        if (!$card) {
            return response()->json(['message' => 'Card not found'], 404);
        }

        return response()->json($card, 200);
    }
}
