# Gamifying the way you travel

## Project Overview

This project provides two main features:

1. **NearMe**: Stores the user's coordinates and suggests nearby places to visit using OpenAI APIs.
2. **Guess the Location Game**: A game that shows random live images of famous places in India. Users guess the location on a map, and their guess is scored based on the accuracy of the location.

## Features

### NearMe

- **Coordinates Storage**: Stores the user's coordinates.
- **Nearby Places**: Provides suggestions for nearby places to visit using OpenAI APIs.
- **User Preferences**: Tracks the types of locations the user visits the most and provides personalized suggestions.

### Guess the Location Game

- **Live Images**: Shows random live images of famous places in India.
- **Map Interaction**: Allows users to click on a map to select their guessed location.
- **Distance Calculation**: Calculates the distance between the guessed location and the actual location.
- **Scoring System**: Awards points based on the accuracy of the guess.
- **User Preferences**: Stores user preferences based on their guesses and provides suggestions for nearby locations.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Devanshgoel-123/mappls_hackathon.git

   ```

2. **Install Dependencies **:

```bash
   2.1 In the Frontend Directory
   npm install axios dotenv redux @mui/material @reduxjs/toolkitfirebase prettier react react-google-streetview react-icons react-redux react-router-dom
```

```bash
   2.2 In the Backend Directory
   npm install express body-parser cors express firebase-admin firebase-functions mongodb mongoose
```

3. **Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```plaintext
   DATABASE_URL=MongoDB_Connection_URL;
   API_KEY_GMAPS=GOOGLE_API_KEY;
   ```

4. **Run the Application**:
   ```bash
   npm run dev <- to Start the frontend Server
   node index.js <- to Start the Backend Server
   ```

## Usage

### NearMe

1. **Get User Coordinates**:
   The application will prompt the user to allow access to their location.

2. **Fetch Nearby Places**:
   The application uses OpenAI APIs to fetch nearby places based on the user's coordinates.

3. **Store Preferences**:
   The types of location which the users guesses the most is shown to them when they request the nearby places.

### GeoGuesser Game

1. **Start the Game**:
   The user starts the GeoGuesser game, which shows a random live image of a famous place in India.

2. **Guess the Location**:
   The user clicks on the map to guess the location of the image.

3. **Calculate Distance**:
   The application calculates the distance between the user's guess and the actual location.

4. **Score the Guess**:
   Points are awarded based on the accuracy of the guess. The user's preferences and scores are stored in the database.

5. **Show Preferences**:
   Based on the types of locations the user guesses the most, nearby locations are suggested to the user.

## API Reference

### Endpoints

- **GET /**: Fetches nearby places based on user's coordinates.
- **POST /geoguesser**: Starts a new GeoGuesser game.
- **POST /geoguesser/guess**: Submits the user's guess and calculates the score.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **APIs**: MapMyIndia API's, OpenAi-API's

## License

This project is licensed under the MIT License. See the MIT file for details.

## Contact

For any questions or support, please contact devanshgoel112233@gmail.com.

---

Feel free to customize this README file further based on the specific details and requirements of your project.
