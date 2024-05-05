# About
The goal of this project is to create a full stack web application that allows users to create a database of movies with the added feature of reviews, where to watch, trailers and the ability to check actors and directors, and see a list of all the movies that they were involved in.

This full stack web application was made in order to learn the fundamentals of backend, frontend and database.

Current front-end example. 
![Current Picture Pulse Home Page](https://github.com/BrendanMcGaw/movie_database/assets/46087405/a8f645f3-2549-474a-b322-71101b57b8a9)
![Current Picture Pulse Movie Browse](https://github.com/BrendanMcGaw/movie_database/assets/46087405/86b1f018-2708-4925-ba63-153b53f9df33)
Working on this project has allowed me to touch on Node, Express, PostgresSQL, Docker, Knex Query Builder, React, JavaScript, TypeScript and CSS. 
Giving me a brief view of a full stack development ennvironment.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# In order to run this project in your browser, you'll have to install docker desktop.
[Click here to download docker desktop](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module&_gl=1*1y021gy*_ga*MTU1Njk4MjY5LjE3MTAxNjA4NDY.*_ga_XJWPQMJYHQ*MTcxMzI2NTczNC4zLjEuMTcxMzI2NTczNS41OS4wLjA)


### 1: Clone Repo 
### 2: In backend directory. Rename example.env to just `.env`.
### 3: Delete package-lock.json in the root directory. Delete Node Modules from root.
### 4: Delete package-lock.json in the backend directory. Delete Node Modules from backend.
### 5: Run `npm install` in the root directory.
### 6: Run `npm install` in the backend directory.
### 7: Run `npm install knex --save-dev` in the backend directory.
### 8: Run `npm install nodemon --save` in the backend directory.
### 7: Run `npm start` in the root directory.
### 8: Run `docker-compose up --build` in the root directory.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Currently the database and backend are hosted on docker locally.
Working towards a live implementation.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


You can then add movies to the database on the movies tab.

Currently, you have to be quite accurate with how the movie title is recorded whilst adding the film to the database.
If you also include the year in which the film was released it will find the correct poster to present. Otherwise if there is an older version of the film, it may default to getting that poster instead.


