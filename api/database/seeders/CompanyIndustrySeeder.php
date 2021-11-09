<?php

namespace Database\Seeders;

use App\Models\CompanyIndustry;
use Illuminate\Database\Seeder;

class CompanyIndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parents = [
            "Audit / Consulting / Legal" => [
                "Audit",
                "Consulting",
                "Legal",
                "Management Consulting",
                "Accounting services"
            ],
            "Banking / Finance / Insurance" => [
                "Banking / Finance",
                "Insurance"
            ],
            "Construction / Real Estate / Luxury" => [
                "Luxury / Fashion",
                "Retail",
                "Consumer goods"
            ],
            "Energy / Environment / Utilities" => [
                "Energy / Utilities / Oil & Gas",
                "Environment"
            ],
            "Industrial / Food Industry / Chemistry" => [
                "Food & Beverage",
                "Aerospace",
                "Automotive",
                "Chemistry",
                "Defense",
                "Electronics",
                "Materials",
                "Other Industries",
                "Agriculture / Forest industry",
                "Maritime / Railway"
            ],
            "IT / Telecoms" => [
                "IT / IT Consulting / Software",
                "Telecoms"
            ],
            "Medicine / Pharmaceuticals / Healthcare / Cosmetics" => [
                "Cosmetics",
                "Medicine / Pharmaceuticals / Healthcare"
            ],
            "Services / Transport" => [
                "Recruitment / Training",
                "Catering",
                "Transport / Logistics",
                "Other services to individuals and businesses"
            ],
            "Engineering / R&D" => [
                "R&D",
                "Engineering"
            ],
            "Media / Digital / Publishing" => [
                "Digital / E-Commerce",
                "Media / Publishing",
                "Communication / Advertising"
            ],
            "Public / Social / NGO / Education" => [
                "Public / Government / Education / Armed Forces",
                "Social / NGO / Charity"
            ],
            "Events / Tourism / Hospitality / Culture" => [
                "Events / Tourism / Hospitality",
                "Leisure / Culture / Sports"
            ],
            "Other" => [
                "Other"
            ]
        ];

        foreach ($parents as $parentName => $children) {
            $companyIndustryParent = new CompanyIndustry();
            $companyIndustryParent->name = $parentName;
            $companyIndustryParent->save();
            foreach ($children as $childName) {
                $companyIndustryChild = new CompanyIndustry();
                $companyIndustryChild->name = $childName;
                $companyIndustryChild->parent_id = $companyIndustryParent->id;
                $companyIndustryChild->save();
            }
        }
    }
}