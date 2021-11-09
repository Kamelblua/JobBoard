<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = [
            "English",
            "French",
            "German",
            "Hindi",
            "Hungarian",
            "Italian",
            "Japanese",
            "Korean",
            "Polish",
            "Portugese",
            "Russian",
            "Turkish",
            "Ukranian",
            "Albanian",
            "Armenian",
            "Chinese",
            "Danish"
        ];

        foreach ($languages as $language) {
            Language::create([
                "name" => $language,
            ]);
        }
    }
}