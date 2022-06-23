# Rate Me

This project was modeled after the Udemy Course by Brad Traversy (React Front to Back 2022) [Feedback Application](https://github.com/bradtraversy/feedback-app). Using the teachings from the course I have modified them slightly with my own style and functionallity. A live version of this application can be found on the nelify server at [Rate Me](https://josborne-rate-me.netlify.app/).

Modifications to the model are noted below:

- Ratings changed from 1-10 to 1-5
- Rating selector changed from circles to stars (Change from radio select inputs to buttons)
- Validation on feedback form no longer requires comments
- Ratings without comments are filtered out of the feedback tiles but remain in the stats

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The 'Mock Backend' is set to run on [http://localhost:5000/feedback](http://localhost:5000/feedback) using JSON Server package.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
