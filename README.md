# :poop: Crapper Yapper :toilet:
The crappiest chat app known to man!

A `Node.js` &amp; `Firebase` webapp submitted to the 2017 [Stupid Hackathon](http://www.stupidhackathon.com/)! Write your message in English and have it converted to Morse Code using :poop: and :toilet: emojis. And yes, sound effects are included!

Please check out the deployed version in Heroku [here](http://crapper-yapper.herokuapp.com/)!


## Functionality
On the backend, the app uses `Express` to serve routes.

On the frontend, the app uses `Handlebars` for templating and `Bootstrap` as a styling framework. The app also uses `jQuery` and the `Firebase API` to make for instant messaging.


## Cloning down the repo
After cloning the repo down to your local machine...
  1. Ensure that you have [NodeJS](https://nodejs.org/en/) installed.
  2. Then `cd` into this repo and run `npm install`.
  4. Serve the page locally by running `node server.js`.
  5. Then navigate to `localhost:3000` in your browser.


## Screenshots
#### The `/` route is where you read and write all your messages
![Home Page](/screenshots/index-page.png)

#### If you navigate anywhere but to the `/` route, you will be asked to go back
![Nowhere Page](/screenshots/nowhere-page.png)

