# URL Shortener

A simple and efficient URL shortener service built with Node.js, Express, and MongoDB. This project allows users to generate shortened URLs, track their usage, and analyze total clicks per URL.

## Features
- Shorten long URLs to a more manageable format
- Track and store the number of clicks for each shortened URL
- Retrieve analytics for each URL
- Clean and intuitive API for creating and managing shortened URLs

## Tech Stack
- **Node.js** and **Express**: Server-side JavaScript for handling API requests and responses.
- **MongoDB**: Database for storing URLs, their shortened versions, and analytics data such as click counts.
- **Postman**: Used for testing the API endpoints (GET, POST) to ensure all functionalities work as expected.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/url-shortener
   cd url-shortener
2. **Install dependencies():**
   ```bash
   npm install
3. **Start the server:**
   ```bash
   npm start
   ```
## API Endpoints

### `POST /` - Generate a shortened URL
- **Request:** Send the original URL by pasting it in the form and submit it.
- **Response:** Returns a unique shortened URL ID at `http://localhost:8001/url`.
- when we go back to home page ,i.e, `http://localhost:8001/` we will get a table with analytics data for previously shortened URLs, including the original URL, shortened URL ID, and total click count.

### `GET /<shortId>` - Redirect to the original URL
- **Request:** Access the shortened URL (e.g., `http://localhost:8001/url/<shortId>`).
- **Response:** Redirects to the original URL and updates the click count.
- This setup allows users to view URL shortening and analytics on a single page, making the user experience straightforward and consolidated.

## Example Workflow

1. Go to `http://localhost:8001/`.
2. Enter a URL in the form and submit it.
3. The new shortened URL will be created and saved to the database.
4. Refresh the home page to see the updated analytics data for the new URL.
5. Use `http://localhost:8001/url/<shortId>` to access the shortened URL, which will redirect to the original URL and update the click count.

---

## Project Structure

```plaintext
├── controllers
│   └── url.js             # Controller functions for handling requests
├── models
│   └── url.js             # Mongoose schema for URL data (original URL, short ID, click count)
├── routes
│   └── url.js             # URL routes for handling API requests
├── index.js               # Main server file
└── README.md              # Project documentation
```
## Using Postman for API Testing

Postman is a powerful tool for testing and interacting with the API endpoints. It allows you to send HTTP requests, view responses, and inspect headers to verify API functionality.

- **POST Request**: Send a POST request to `http://localhost:8001/url` with a JSON payload containing the original URL. Postman will display the response, showing the shortened URL.

- **GET Request**: Access `http://localhost:8001/<shortId>` in Postman or your browser. This will redirect to the original URL and increment the click count.

- **Analytics Request**: Send a GET request to `http://localhost:8001/analytics/<shortId>` to retrieve analytics data, such as the total clicks for a shortened URL.

## Screenshots

### Original URL Paste
![Original URL Paste](statics/ORiginal%20url%20paste.jpg)

### Interface
![Interface](statics/interface.jpg)

### Shorten URL
![Shorten URL](statics/shorten%20url.jpg)

### Updated Data
![Updated Data](statics/updated%20data.jpg)

## Future Enhancements

- Add user authentication to manage URLs.
- Implement expiration dates for shortened URLs.
- Include additional analytics, such as tracking locations or timestamps for each click.

Feel free to contribute or report any issues. Happy coding!

   

