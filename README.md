# README


Check out the app [live](https://al-lite.herokuapp.com/#/)!

A lite version of Autolist's web app. React/Redux frontend & Rails/PostgreSQL backend

## Features

* 3 pages: home, search results, listing detail
* Search listings with min & max price filter on home page
* Search results are displayed with 'Times viewed' statistic for each time a listing was clicked into and viewed
* Listing detail shows map of seller

## Setup instructions

* Type the following into terminal:
  * npm i
  * bundle install
  * rails db:create
  * rails server
* Then go to http://localhost:3000/#/ in browser

## Other Info

* Time spent: ~9-10 hrs
* Approaches: 
  * Used Rails backend to keep track of times a listing was viewed.
  * Redux on the frontend to manage 20 listings at a time between several components.

## Future features

* Enable ability to refresh on vehicle details page
* Add more details on vehicle details page