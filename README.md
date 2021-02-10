# workout-tracker

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/phillipmerriman/workout-tracker?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/phillipmerriman/workout-tracker?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/phillipmerriman/workout-tracker?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/phillipmerriman/workout-tracker?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/phillipmerriman/workout-tracker?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/phillipmerriman/workout-tracker/dotenv?style=for-the-badge" alt="Dotenv Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/phillipmerriman/workout-tracker/express?style=for-the-badge" alt="Express Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/phillipmerriman/workout-tracker/mongoose?style=for-the-badge" alt="Mongoose Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/phillipmerriman/workout-tracker/morgan?style=for-the-badge" alt="Morgan Version" />
    <img src="https://img.shields.io/github/last-commit/phillipmerriman/workout-tracker?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/phillipmerriman/workout-tracker?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/phillipmerriman?style=social" alt="Followers" />  
</p>

## Description

Track your workouts with Workout Tracker. The app will keep track the exercises in your workout. The dashboard displays graphs that summarize your weekly workouts.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)

## Installation

1. Clone repository. 
2. npm install
3. node server.js
4. If you would like to pre-populate the database with seeds, run "npm run seed" in the command line.

<p align="center">
    <a href="https://mighty-spire-59345.herokuapp.com/?id=6023557c98f2b80015c2a689"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screeshots

1. Homepage displaying last workout

![Site](public/assets/homepage.PNG)

2. Creating Workouts

![Site](public/assets/live.PNG)


3. Last Week's Summary

![Site](public/assets/dash.PNG)

### Snippets


1. Adding to an array type

```javascript

    // Create workout model
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      duration: {
        type: Number,
        required: true,
      },

      distance: {
        type: Number,
        required: true,
      },

      weight: {
        type: Number,
        required: true,
      },

      reps: {
        type: Number,
        required: true,
      },

      sets: {
        type: Number,
        required: true,
      },
    },
  ],
  
},
{
  toJSON: {
    virtuals: true,
  },
}
);
    
```
* This is the Mongoose model used to create workouts.

## Credits

### Author

- 💼 Phillip Merriman: [portfolio](https://phillipmerriman.github.io/portfolio/)
- :octocat: Github: [phillipmerriman](https://github.com/phillipmerriman)
- ![linkedin](public/assets/icons8-linkedin-15.png) LinkedIn: [phillip-merriman-jr](https://www.linkedin.com/in/phillip-merriman-jr-62227485/)
