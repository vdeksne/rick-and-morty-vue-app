# Rick and Morty Vue App

This is a Vue.js application that utilizes the Rick and Morty REST API to display a list of characters with an infinite scroll feature and detailed views for each character. Check out the live demo [here](https://rick-and-morty-vd.netlify.app/).

## Features

- Infinite scroll list of characters fetched from the Rick and Morty API.
- Detailed view of each character, including name, status, species, and more.
- Vue Router for navigation between the character list and character detail views.
- Vuex for state management to handle character data.

## Setup Instructions

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd rick-and-morty-vue-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the application:

   ```
   npm run serve
   ```

5. Open your browser and go to localhost to view the application.

## Deployment

To deploy the application, follow these steps:

1. Build the application for production:

   ```
   yarn build
   ```

2. Deploy the contents of the `dist` directory. The application is deployed automatically using Netlify. Any changes pushed to the main branch will trigger a new build and deployment.

## Usage

- Navigate to the character list view to see the infinite scroll of characters.
- Click on a character to view detailed information about them.

## License

This project is licensed under the MIT License.
