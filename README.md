# 30Films

**!still in development!**

This is a MERN Stack app inspired by the 30 Day Film Challenge. 

![30 Day Movie Challenge](https://i.imgur.com/O1VO4iO.png)

## Frontend

The frontend portion is a questionnaire built in ReactJS that makes GET and POST requests to the backend. 

Users provide their names, and responses to each question. The input fields for the film questions use typeahead to suggest movie titles. 

After submitting their responses, users are shown their list of answers, styled with the posters for the movies and the link to their [TMDb](https://www.themoviedb.org/) entries. Additionally, users are  provided a link to share their answers with friends.

## Backend

The backend portion is an API written in Express, [hosted on heroku](https://thirtyfilms.herokuapp.com), to handle searching films for the typeahead in the frontend, and serving user results.

Search is completed by making calls to [The Movie Database's API](https://www.themoviedb.org/documentation/api) using [cavestri's](https://github.com/cavestri) [tmdb-javascript-library](https://github.com/cavestri/themoviedb-javascript-library/). These responses (filtered and sorted by popularity by the frontend) are used to populate the suggestions in the typeaheads.

Responses are stored in the MongoDB collection and contain the user's provided name, and their answers. Each film contains its TMDb ID, poster path, and title. 

