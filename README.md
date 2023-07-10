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

