<?php

namespace Database\Seeders;

use App\Models\AdvertisementPosition;
use App\Models\Position;
use Faker\Factory;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            'Internship',
            'Apprenticeship',
            'Full-time position',
            'Fixed-term position',
            'Part-time / Student job'
        ];

        foreach ($types as $type) {
            Position::create([
                "name" => $type,
            ]);
        }
    }
}
