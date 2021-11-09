<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\CompanyIndustry;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;
use App\Models\CompanyCredential;
use Illuminate\Support\Facades\Hash;

class CompanySeeder extends Seeder
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
        $industries = CompanyIndustry::whereNotNull('parent_id')->get();

        CompanyCredential::create([
            "email" => "kamel.blua@company.test",
            'password' => Hash::make('company')
        ]);

        Company::create([
            "type_id" => random_int(1, 4),
            "industry_id" => $industries->random()->id,
            "credentials_id" => 1,
            "name" => "KamelBlua",
            "employees_range" => '1-10',
            "city" => $faker->city,
            "country" => $faker->country,
            "address" => $faker->streetAddress,
            "postal_code" => $faker->postcode,
            "contact_phone" => "06" . random_int(11111111, 99999999),
            "contact_email" => "kamel.blua@company.test",
        ]);

        CompanyCredential::create([
            "email" => "alexandre.clain@company.test",
            'password' => Hash::make('company')
        ]);

        Company::create([
            "type_id" => random_int(1, 4),
            "industry_id" => $industries->random()->id,
            "credentials_id" => 2,
            "name" => "AlexandreClain",
            "employees_range" => '1-10',
            "city" => $faker->city,
            "country" => $faker->country,
            "address" => $faker->streetAddress,
            "postal_code" => $faker->postcode,
            "contact_phone" => "06" . random_int(11111111, 99999999),
            "contact_email" => "alexandre.clain@company.test",
        ]);

        for ($i = 0; $i < 50; $i++) {
            $companyName = $faker->company;
            $companyNameCompact = preg_replace("/[^A-Za-z0-9 ]/", '', $companyName);
            $companyNameCompact = str_replace(" ", '', $companyNameCompact);
            $companyNameCompact = lcfirst($companyNameCompact);

            $youtubeLink = "https://youtube.com/channel/" . $companyNameCompact;
            $twitterLink = "https://twitter.com/" . $companyNameCompact;
            $facebookLink = "https://fr-fr.facebook.com/" . $companyNameCompact;
            $linkedinLink = "https://fr.linkedin.com/in/" . $companyNameCompact;
            $instagramLink = "https://instragram.com/" . $companyNameCompact;


            $credentials = new CompanyCredential();
            $credentials->email = "$companyNameCompact@credentials.com";
            $credentials->password = Hash::make('password');
            $credentials->save();

            Company::create([
                "type_id" => random_int(1, 4),
                "industry_id" => $industries->random()->id,
                "credentials_id" => $credentials->id,
                "logo_file_id" => 1,
                "name" => $companyName,
                "employees_range" => $faker->randomElement(['1-10', '11-100', '101-1000', '1000+']),
                "city" => $faker->city,
                "country" => $faker->country,
                "address" => $faker->streetAddress,
                "postal_code" => $faker->postcode,
                "contact_phone" => "06" . random_int(11111111, 99999999),
                "contact_email" => "$companyNameCompact@company.test",
                "website_link" => $faker->url,
                "youtube_link" => $youtubeLink,
                "twitter_link" => $twitterLink,
                "facebook_link" => $facebookLink,
                "linkedin_link" => $linkedinLink,
                "instagram_link" => $instagramLink,
            ]);
        }
    }
}