# Evan Ryan's Portfolio

This project is the personal portfolio website for Evan Ryan, showcasing his work and resume.

# This is a work in progress.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/evanryan.dev.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the server, run the following command:

```bash
node app.js
```

The application will be available at `http://localhost:3000`.

## Project Structure

The project has two potential configurations:

1.  **Express Server (Primary)**: The main application is an Express.js server defined in `app.js`. It serves static files from the `public` directory. This is the recommended way to run the project.

2.  **Webpack (Legacy/Unused)**: There is a webpack configuration (`webpack.config.js`) that uses `src/index.js` as its entry point. This setup appears to be incomplete or a remnant of a previous version and is likely not in use.

### Key Files and Directories

- `app.js`: The main Express.js server file.
- `public/`: Contains all the static assets for the website, such as images, CSS, and the resume.
- `src/`: Contains the source code for the webpack build.
- `webpack.config.js`: The configuration file for webpack.
- `package.json`: Lists the project dependencies and scripts.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: webpack (potentially unused)
