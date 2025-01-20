# alx-project-0x14
## API Overview
The MoviesDatabase API is a powerful tool for accessing movie-related data. It provides features like retrieving information on movies, TV shows, and actors, searching for content, and viewing trending or top-rated items. The API supports multiple query parameters to customize requests and returns data in JSON format.

## Version
Version: v3.0 
## Available Endpoints
GET /movies: Retrieve a list of movies based on search criteria.

GET /movies/{id}: Fetch detailed information about a specific movie.

GET /tv-shows: Retrieve a list of TV shows.

GET /tv-shows/{id}: Get details of a specific TV show.

GET /actors: Search for actors and retrieve their details.

GET /trending: View trending movies and TV shows.

GET /top-rated: Access top-rated movies and TV shows.

## Request and Response Format
### Request Example

curl --request GET \
     --url https://api.themoviedb.org/3/configuration \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTdkMGFiODE0NDk4NWIwMWY4YjJiNWI2ZDNmNTcxNiIsIm5iZiI6MTczNzM5MjcxNS4zNTAwMDAxLCJzdWIiOiI2NzhlODI0YjljYjA3MTlmNzQ2NTAwMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Vqx8uZfZ8bZw0zCFjaGJ4XInZVnlrBUB_DdnQtWndmI' \
     --header 'accept: application/json'

### Response Example
{
  "change_keys": [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos"
  ],
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": [
      "w300",
      "w780",
      "w1280",
      "original"
    ],
    "logo_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "original"
    ],
    "poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    "profile_sizes": [
      "w45",
      "w185",
      "h632",
      "original"
    ],
    "still_sizes": [
      "w92",
      "w185",
      "w300",
      "original"
    ]
  }
}
## Authentication
Requests to the MoviesDatabase API require authentication. You must include an API key in the request header:

Header: Authorization: Bearer 997d0ab8144985b01f8b2b5b6d3f5716

## Error Handling
Common error responses include:

400 Bad Request: The request was invalid or malformed.

401 Unauthorized: API key is missing or invalid.

404 Not Found: The requested resource does not exist.

429 Too Many Requests: Rate limit exceeded.

500 Internal Server Error: An error occurred on the server.

### Example Error Response

{

  "status": "error",
  
  "code": 401,
  
  "message": "Unauthorized. API key missing or invalid."
  
}
## Handling Errors
Verify API key validity for 401 errors.

Retry requests with exponential backoff for 429 errors.

Log 500 errors and notify the support team if they persist.

## Usage Limits and Best Practices
Rate Limit: The API allows 100 requests per minute. Exceeding this limit returns a 429 status.

Caching: Cache frequent requests to minimize API calls and reduce load times.

Pagination: Use pagination parameters (page, limit) to avoid overwhelming responses.

Error Logging: Implement robust error logging to monitor issues effectively.

Security: Keep your API key confidential and do not expose it in client-side code.

