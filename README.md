# FilmFinder
FilmFinder is a fullstack web application that helps you research, find, and save your next favorite movie.

![Alt text](images/FavoritesList.png "FilmFinder")

## About the app
It's always challenging to find something new to watch. Whether it's at the movie theaters or on Netflix, there are just too many good movies to pick from, especially if you are the indecisive type. Worry no more! With FilmFinder you can easily research movies that you hear about and store them to your list of favorites. Upon completing a movie you can simply return to your favorites list and select a new movie to watch next.

## Version 1.0.0
* This current version of FilmFinder utilizes localStoage to store user favorites and recent searches. Redux allows us to easily subscribe to the localStorage allowing us to check for any previous state upon refreshing the page. While this is effective for individual users, the data can easily be lost if users were to clear their cache.

![Alt text](images/FavoritesList.png "FilmFinder")

## Version 2.0.0
* Fixes to recent searches dropdown. Remove bug on click handler inside of RecentSearchList container.
* Mobile responsiveness for tables and phones

![Alt text](images/FavoritesListv2.png "FilmFinder v2")

### Future updates
* Integrate React Router to more of a multi-page app instead of a SPA. Utilize page links.
* Include user login and authentication
* Add database to store user data instead of localStorage

# Tech Stack

## Frontend
* [React](https://facebook.github.io/react/)-[Redux](https://github.com/reactjs/redux) - JS libraries for rendering page views and maintaining state
* [Bootstrap](http://getbootstrap.com/) - a mobile first styling framework
* [SASS/SCSS](http://sass-lang.com/) - a CSS preprocessor

## Backend
* [Node.js](https://nodejs.org/en/) with [Express](http://expressjs.com/) for serving pages

## Dev/Build Tools
* [Webpack](https://webpack.github.io/) for bundling/scaffolding and [Babel](https://babeljs.io/) for transpiling

## Install
#### Global Installs

For running Node server

```
$ brew install node
```

For building and deploying: Webpack

```
$ npm install webpack -g
```
#### Local Install

Download all dependencies listed under package.json

```
$ npm install
```

#### To Run the Application
Initiate both Development and Production servers by running the following:

```$ npm run dev``` and in a separate terminal run ```$ npm run build``` and then ```$ npm run start```

Fronend development changes are reflected immediately on ```http://localhost:8080```
Production server is on ```http://localhost:3000```

## Contributing

I am happy to review and merge pull requests. Please see [CONTRIBUTING](CONTRIBUTING.md) if you'd like to add to this amazing project.

## License

MIT
