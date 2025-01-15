import React from "react";
import { useForm } from "@inertiajs/react";

const UrlShortener = ({ short_url }) => {
  const { data, setData, post, processing, errors } = useForm({
    original_url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("url.shorten")); // Use Inertia to submit the form
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">URL Shortener</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="original_url"
              className="block text-sm font-medium text-gray-700"
            >
              Enter URL
            </label>
            <input
              type="url"
              id="original_url"
              value={data.original_url}
              onChange={(e) => setData("original_url", e.target.value)}
              placeholder="https://example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errors.original_url && (
              <p className="text-red-600 text-sm mt-1">{errors.original_url}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            disabled={processing}
          >
            {processing ? "Shortening..." : "Shorten URL"}
          </button>
        </form>

        {short_url && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg text-center">
            <h2 className="text-lg font-medium text-gray-800">
              Shortened URL:
            </h2>
            <a
              href={short_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {short_url}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
