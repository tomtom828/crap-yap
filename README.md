# :poop: Crapper Yapper :toilet:
The crappiest chat app known to man!

A `Node.js` &amp; `Firebase` webapp submitted to the 2017 [Stupid Hackathon](http://www.stupidhackathon.com/)! 

Write your message in English and have it converted to Morse Code using :poop: and :toilet: emojis. Within each word, the letters are seperated with a :boom:. And anything that is not a letter (spaces, numbers, ?, !, etc) are shown normally. 

And yes, sound effects are included!

Please check out the deployed version in Heroku [here](http://crapper-yapper.herokuapp.com/)!

An example translation of `aye!` becomes :poop: :toilet: :boom: :toilet: :poop: :toilet: :toilet: :boom: :poop: :boom: !

:poop: = dot

:toilet: = dash

:boom: = pause between letters


## Authors
[Steve Freeman](https://github.com/sfreeman422) - Full Stack Developer
[Thomas Thompson](https://github.com/tomtom28) - Full Stack Developer


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

#### Note that real English is stored in the Database, check the console
![Console Log](/screenshots/console-log.png)

