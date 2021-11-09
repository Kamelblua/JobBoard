<?php

namespace Database\Seeders;

use App\Models\CompanyType;
use Illuminate\Database\Seeder;

class CompanyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            'Large',
            'Start-up',
            'SME',
            'Government / Charity / Public Institution / Other',
        ];

        foreach ($types as $type) {
            CompanyType::create([
                "name" => $type,
            ]);
        }
    }
}
