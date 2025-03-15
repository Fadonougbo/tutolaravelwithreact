<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use App\Models\Video;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Video::factory(15)->create();
        Post::factory(15)->create();

       /*  User::factory()->create([
            
            'email' => 'doe@doe.com',
            'password'=>'doe'
        ]); */
    }
}
