<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UrlShortenerController extends Controller
{
    public function shorten(Request $request)
    {
        // Validate the original URL
        $request->validate([
            'original_url' => 'required|url',
        ]);

        // Generate a unique short code
        $shortCode = Str::random(6);

        // Ensure uniqueness of the short code
        while (Url::where('short_code', $shortCode)->exists()) {
            $shortCode = Str::random(6);
        }

        // Store the original URL and its corresponding short code in the database
        Url::create([
            'original_url' => $request->original_url,
            'short_code' => $shortCode,
        ]);

        // Redirect back to the form page and pass the short URL as a session flash message
        return redirect()->route('url.shortener')->with('short_url', url($shortCode));
    }

    // Redirect to the original URL
    public function redirect($code)
    {
        $url = Url::where('short_code', $code)->firstOrFail();

        return redirect($url->original_url);
    }
}
