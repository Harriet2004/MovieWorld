# MovieWorld

MovieWorld is a movie discovery web application that allows users to search for movies, explore trending movies, and view information about each movie. The app fetches movie data from The Movie Database (TMDb) API and displays it in an engaging, user-friendly interface.

## Features

- **Movie Search**: Users can search for movies by title.
- **Movie Details**: Users can view detailed information such as the movie's title, release date, overview, and poster.
- **Trending Movies**: Displays a list of the most popular movies in real time in a dynamic manner.
- **Responsive Design**: The app is fully responsive and works seamlessly across different screen sizes and devices.
- **Modern UI/UX**: A smooth and user-friendly interface designed for a great experience.


## Technologies Used

- **React.js**
- **Appwrite**
- **TailWind CSS**
- **TMDb API**

## Prerequisites

Please make sure that you have the following installed:
- Node.js
- npm
- Git

## Installation
-  Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/MovieWorld.git
   cd MovieWorld
- Install the project dependencies:
  ```bash
  npm install
- Create a file named .env.local in the root directory and add the following:
  ```bash
  VITE_IMDB_API_KEY=
  VITE_APPWRITE_PROJECT_ID=
  VITE_APPWRITE_DATABASE_ID=
  VITE_APPWRITE_COLLECTION_ID=

- Replace the values with your actual TheMovieDatabase API and Appwrite credentials. You can get these credentials by signing up on the TheMovieDatabase and creating a new project        on the Appwrite
  
- Running the project
  ```bash
  npm run dev
- Open http://localhost:5173 (or any other link that appears) to view your project
