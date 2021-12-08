<?php

namespace Database\Seeders;

use App\Models\Universite;
use Illuminate\Database\Seeder;

class UniversiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 10; $i++) { 
            Universite::create([
                'nom' => "Universite ".($i+1)
            ]);
        }
    }
}
