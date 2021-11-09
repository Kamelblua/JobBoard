<?php

namespace Database\Seeders;

use App\Models\Admin;
use Exception;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
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

        Admin::create([
            "email" => "kamel.blua@admin.test",
            'password' => Hash::make('admin'),
        ]);
        Admin::create([
            "email" => "alexandre.clain@admin.test",
            'password' => Hash::make('admin'),
        ]);
    }
}