# Mangolo

Mongolo is productivity and note-taking web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, edit, and manage their notes in an organized manner. 

## Features


- **Create Notes:**  Create new notes with a title and content.</li>
- **Edit Notes:**  Update the title or content of existing notes.</li>
- **Delete Notes:**  Remove unwanted notes from your collection.</li>
- **List View:**  See all your notes in a list format, allowing for easy navigation and reference.</li>
- **User-Friendly Interface:**  Mangolo provides a simple and intuitive user interface, making it easy to use and navigate.</li>
With Mangolo, you can stay organized, boost your productivity, and never miss an important idea or piece of information again.

## Technologies Used

- **MongoDB:** A NoSQL database used to store and retrieve note data.
- **Express.js:** A backend framework for building RESTful APIs and handling server-side logic.
- **React:** A JavaScript library for building user interfaces and managing the frontend of the application.
- **Node.js:** A JavaScript runtime environment that executes server-side code and powers the backend of the application.
- **HTML/CSS:** The project uses HTML for markup and CSS for styling and layout.
- **Bootstrap:** Bootstrap is used for responsive design and pre-built UI components to enhance the application's aesthetics.
- **JavaScript:** The primary programming language used for frontend and backend development.
- **Git:** Git is used for version control, allowing easy collaboration and tracking of changes throughout the development process.
- **Docker:** Docker is used to containerize the project for easy deployment and reproducibility.

## Getting Started

To run the portfolio project locally, follow these steps:

1. **Clone the repository**: Start by cloning this repository to your local machine using the following command:

2. **Build the Docker image**: Navigate to the project directory and build the Docker image using the following command:

`docker build -t mangolo-app .`

This command builds the Docker image with the tag "portfolio" based on the Dockerfile.

3. **Run the Docker container**: After the Docker image is built, run a container based on the image with the following command:

`docker run -p 3013:5013 mangolo-app`

This command maps port 3013 on your local machine to port 80 inside the Docker container, allowing you to access the portfolio project in your browser at `http://localhost:3013`.

4. **Access the website**: Open a web browser and visit `http://localhost:3013` to view the portfolio project.


## Contributing

Contributions to the project are welcome! If you find any bugs, have suggestions, or would like to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).

