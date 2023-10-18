# Exercise app
 This is a web application for finding exercise information, videos, and recommendations. It's built using React.js and Node.js, and utilizes the Rapid API to fetch exercise data. The website includes a homepage with a search bar, exercise pages with GIFs and video recommendations, as well as a section to post demo video links.
 
# Demo
Below is a video showing website features take a look yourself- [Demo video](https://www.youtube.com/watch?v=Q00wQphT2v0)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Features

The key features of my project:

- Homepage:
    - Search for exercises using body part names or gym equipment names.
    -Click on an exercise card to navigate to the exercise page.
- Exercise Page:
    - Displays a GIF of the selected exercise.
    - Provides video recommendations for the selected exercise, fetched from an API.
    - Recommends exercises for the same body part and equipment.

## Getting Started

You will need to make an account on **Rapid API** and subscribe to the following apis 
- ExerciseDB [Link](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel)
- Youtube Search and Download [Link](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel)

### Prerequisites

- Node.js
- MongoDB
- Cloudinary to store photos.
- Rapid APi


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/suyash-29/exerciseapp/
   ```

2. Change to the project directory:

   ```bash
   cd exerciseapp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file and adding the necessary configurations (database URL, API keys, etc.):

   ```plaintext
   
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access website .







