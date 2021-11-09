<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Candidate;
use Faker\Factory;
use Illuminate\Support\Facades\Hash;

class CandidateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        Candidate::create([
            "email" => "kamel.blua@candidate.test",
            "password" => Hash::make('candidate'),
            "education_name" => $faker->company,
            "graduation_year" => random_int(2016, 2025),
        ]);
        Candidate::create([
            "email" => "alexandre.clain@candidate.test",
            "password" => Hash::make('candidate'),
            "education_name" => $faker->company,
            "graduation_year" => random_int(2016, 2025),
        ]);

        for ($i = 0; $i < 20; $i++) {
            $firstName = $faker->firstName;
            $lastName = $faker->lastName;

            Candidate::create([
                "email" => "$firstName.$lastName$i@candidate.test",
                "password" => Hash::make('password'),
                "education_name" => $faker->company,
                "graduation_year" => random_int(2016, 2025),
            ]);
        }
    }
}