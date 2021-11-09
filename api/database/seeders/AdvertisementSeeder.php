<?php

namespace Database\Seeders;

use App\Models\Advertisement;
use App\Models\AdvertisementLanguage;
use App\Models\AdvertisementPosition;
use App\Models\Language;
use App\Models\Position;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;

class AdvertisementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $faker = Factory::create();

        for ($i = 0; $i < 500; $i++) {
            $advertisement = Advertisement::create([
                "company_id" => random_int(1, 30),
                'title' => $faker->jobTitle,
                'content' => $faker->text(500),
                'city' => $faker->city
            ]);

            $positions = Position::inRandomOrder()->take(random_int(1, 3))->get();
            foreach ($positions as $position) {
                AdvertisementPosition::create([
                    "position_id" => $position->id,
                    "advertisement_id" => $advertisement->id
                ]);
            }

            $languages = Language::inRandomOrder()->take(random_int(1, 3))->get();
            foreach ($languages as $language) {
                AdvertisementLanguage::create([
                    "language_id" => $language->id,
                    "advertisement_id" => $advertisement->id
                ]);
            }
        }
    }
}