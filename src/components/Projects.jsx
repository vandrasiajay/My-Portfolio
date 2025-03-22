import React from "react";
import "./Projects.css"; // Import CSS file

const projects = [
  {
    title: "Age and Gender Detection",
    description:
      "The Age and Gender Detection project utilizes deep learning to predict a person's age and gender based on facial images. The system processes input images, detects faces, and classifies them into predefined age groups and gender categories. OpenCV is used for face detection, while a CNN model is trained on large-scale datasets. This project has potential applications in security, targeted advertising, and user experience personalization.",
    implementation: [
      "Collect and preprocess facial image dataset.",
      "Train a CNN model on labeled age and gender data.",
      "Use OpenCV for face detection and image processing.",
      "Deploy the model using Flask/FastAPI for API integration.",
      "Develop a Streamlit UI for easy interaction.",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow/Keras",
      "NumPy",
      "Matplotlib",
      "CNN",
      "Flask/FastAPI",
      "Streamlit",
    ],
  },
  {
    title: "Clean Water, Healthy Lives",
    description:
      "This project leverages machine learning to assess water quality and predict its drinkability based on key chemical parameters. A Logistic Regression model is trained to classify water samples as safe or unsafe based on parameters such as pH, Chloride, Fluoride, and Sulfate. The application is developed as an interactive web platform using Streamlit, enabling real-time predictions and insightful data visualizations to support public health decisions.",
    implementation: [
      "Collect water quality data with parameters like pH, Chloride, Fluoride, etc.",
      "Apply data preprocessing and feature selection techniques.",
      "Train a Logistic Regression model to classify water as safe/unsafe.",
      "Create a Streamlit-based web interface for user inputs.",
      "Visualize water quality trends with dynamic graphs.",
    ],
    technologies: [
      "Python",
      "Logistic Regression",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ],
  },
  {
    title: "House Cost Prediction",
    description:
      "The House Cost Prediction project analyzes key market trends and influencing factors to estimate property prices in Indian cities. The system processes historical housing data, applies feature engineering techniques, and trains a Linear Regression model for price estimation. The model is then deployed through a Flask-based API, while an interactive frontend allows users to input parameters and get real-time price predictions. This project helps potential buyers and sellers make data-driven decisions.",
    implementation: [
      "Collect and clean real estate data from multiple sources.",
      "Perform exploratory data analysis to identify key pricing factors.",
      "Train a Linear Regression model for price prediction.",
      "Develop a Flask-based API to serve model predictions.",
      "Build an interactive frontend using HTML, CSS, and JavaScript.",
    ],
    technologies: [
      "Python",
      "Linear Regression",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Recipe Management System",
    description:
      "The Recipe Management System is a full-stack web application that allows users to store, edit, and manage their personal recipe collections. The system follows a CRUD-based approach, providing seamless functionality to add, update, and delete recipes. It integrates a React-based frontend with a secure .NET Core backend and MS SQL for efficient data storage. Users can categorize recipes, ensuring easy organization and retrieval. Authentication and authorization are implemented using JWT for secure access.",
    implementation: [
      "Develop a React-based frontend for recipe management.",
      "Design a structured MS SQL database for storing recipes.",
      "Implement user authentication and authorization using JWT.",
      "Create RESTful API endpoints with ASP.NET Core.",
      "Ensure smooth CRUD operations with proper validation.",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Bootstrap",
      "ASP.NET Core",
      "Microsoft SQL Server",
      "JWT Authentication",
      "Entity Framework",
      "REST API",
    ],
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="projects-title">Projects</h2> {/* Title placed outside container */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h4>Implementation Process:</h4>
            <ul className="project-implementation">
              {project.implementation.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
            <h4>Technologies Used:</h4>
            <ul className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
