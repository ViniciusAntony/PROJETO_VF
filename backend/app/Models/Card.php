<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $table = 'cards'; // Nome da tabela no banco de dados

    protected $fillable = [
        'name', 'species', 'image', 'url',
    ];
}
