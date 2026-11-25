# Job Finder

## Project Overview

Job Finder is a web application that helps users search for job opportunities based on a job title or keyword and location.

The application uses the JSearch API through RapidAPI to retrieve real job listings and displays the results in a simple, responsive interface.

## Features

- Search for jobs by job title or keyword
- Search by location
- Display real job opportunities from an external API
- Display job title, employer, location, and employment type
- Provide a link to view/apply for each job
- Validate empty search fields
- Display an error message when a request fails
- Responsive design for desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- JSearch API through RapidAPI

## API Usage

This project uses the **JSearch API** through RapidAPI.

The application sends a job search request containing the user's search query and location. The server communicates with the API and returns the job data to the frontend.

The JSearch API provides job search results and supports parameters such as search query, country, language, number of pages, and other job filters.

API documentation:  
https://rapidapi.com/letscrape-6bRBa3Qguo5/api/jsearch

## Error Handling

The application handles errors in several ways:

- Empty job title or location displays a validation message.
- Failed API requests display an error message to the user.
- If no jobs are returned, the application displays a "No jobs found" message.
- API errors are logged in the browser/server console for debugging.

## Project Structure

```text
job-finder/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── .env
├── .gitignore
└── README.md
```

## Local Setup

1. Clone the repository.
2. Install the required Node.js dependencies.
3. Create a `.env` file.
4. Add the RapidAPI key to the environment file.
5. Start the Node.js server.
6. Open the application in a web browser.

The API key is stored as an environment variable and should not be committed to the repository.

## Deployment

The application will be deployed across two web servers:

- Web01
- Web02

A load balancer will be configured on Lb01 to distribute requests between the two web servers.

### Deployment Architecture

```text
                    Users
                      |
                      v
                    Lb01
                  /      \
                 v        v
              Web01     Web02
                 \        /
                  \      /
                   v    v
                 JSearch API
```

## Challenges and Solutions

### API Authentication

The JSearch API requires authentication through RapidAPI headers. The API key is stored in an environment variable instead of being hard-coded into the application.

### API Errors

The application checks the response from the server and displays an appropriate error message when the API request fails.

### Responsive Design

CSS media queries were used to make the application usable on smaller screens such as mobile devices.

## Attribution

Job listing data is provided by the JSearch API through RapidAPI.

JSearch API:  
https://rapidapi.com/letscrape-6bRBa3Qguo5/api/jsearch

## Author

Student project for the web application and deployment assignment.
