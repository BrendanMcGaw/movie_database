# About
The goal of this project is to create a full stack web application that allows users to create a database of movies with the added feature of reviews, where to watch, trailers and the ability to check actors and directors, and see a list of all the movies that they were involved in.

This full stack web application was made in order to learn the fundamentals of backend, frontend and database.

Current front-end example. 
![image](https://github.com/BrendanMcGaw/movie_database/assets/46087405/339925c8-fe39-49d2-93ac-f96eb93fa644)
![Screenshot 2024-03-21 001500 website](https://github.com/BrendanMcGaw/movie_database/assets/46087405/4b61b3ef-32d4-45a1-aa74-15ca769b0537)
**Still under development**

Working on this project has allowed me to touch on Node, Express, PostgresSQL, Docker, Knex Query Builder, React, JavaScript, TypeScript and CSS. 
Giving me a brief view of a full stack development ennvironment.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# In order to run this project in your browser, you'll have to install docker desktop.
[Click here to download docker desktop](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module&_gl=1*1y021gy*_ga*MTU1Njk4MjY5LjE3MTAxNjA4NDY.*_ga_XJWPQMJYHQ*MTcxMzI2NTczNC4zLjEuMTcxMzI2NTczNS41OS4wLjA)


### 1: Clone Repo 
### 2: Delete package-lock.json in the root directory 
### 3: Delete package-lock.json in the backend directory.
### 4: Run `npm install` in the root directory
### 5: Run `npm install` in the backend directory.
### 6: Run `docker-compose up --build` in the root directory.
### 7: Run `npm start` in the root directory.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Currently the database and backend are hosted on docker locally.
Working towards a live implementation.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can then add movies to the database on the movies tab.

Currently, you have to be quite accurate with how the movie title is recorded whilst adding the film to the database.
If you also include the year in which the film was released it will find the correct poster to present. Otherwise if there is an older version of the film, it may default to getting that poster instead.


