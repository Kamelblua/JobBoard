<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CompanyTypeSeeder::class,
            CompanyIndustrySeeder::class,
            CompanySeeder::class,
            CandidateSeeder::class,
            PositionSeeder::class,
            LanguageSeeder::class,
            AdvertisementSeeder::class,

            AdminSeeder::class
        ]);
    }
}