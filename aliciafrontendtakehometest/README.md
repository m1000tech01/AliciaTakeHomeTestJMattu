# Star Wars Take Home Test

## To Run the app

In the project directory, you can run:

### `npm install` and `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Overview of the task

- The project uses the star wars api to populate a 'react table'. This has pagination on it. The table has clickable rows that lead to the character details page. On this page users can add or remove a character to and from the favourites page. They can click the nav bar to get to the favourites page and see the characters they have added.

## Time taken and thoughts on the task

- I stuck to the alotted 3 hours.

- At the moment the project is using context and a service, however the service is pretty slow.

- Another approach would be to use a graphQL type approach, with something like ReactQuery, that would help with caching and reloading the data. To really optimise this you would need to have a query defined for each caterogry needed, for example for starships or films, so that they can be cached seperately.

- Currently the filter works only on the page on the table you are on. Its doesn't search through all pages of the table

- There no persistence, so if given time perhaps local storage
- There are tests, but these could go further.
- There is a favourite button on the character view page, but this not on the favourites page due to time.
- The css is standard, due to time. As result has bar minimum mobile responsiveness (mainly the table has this).
