// ProjectGallery.tsx
import React from "react";

type ProjectCategory = "eshop" | "quiz" | "weather" | "login" | "learn";

interface Project {
  title: string;
  description: string;
  github: string;
  total: number;
}

const projectList: Record<ProjectCategory, Project> = {
  eshop: {
    title: "eshop - (MERN Stack + Redux, Paypal sandbox)",
    description:
      "A complete eCommerce web application built using the MERN stack (MongoDB, Express, React + Redux, Node.js). This project includes a secure backend API and frontend interface where users can browse products, add items to their cart, and complete purchases using PayPal or COD.",
    github: "https://github.com/m-antoni/e-commerce-mern-api",
    total: 7,
  },
  quiz: {
    title: "Quizp App - (React, React Hooks Firebase, Firebase Auth)",
    description:
      "A simple and interactive quiz application built with React, Redux, and Firebase Firestore. The app dynamically fetches questions from the Open Trivia Database (opentdb.com) and stores player scores in Firestore.",
    github: "https://github.com/m-antoni/quiz-app",
    total: 3,
  },
  weather: {
    title: "Weather App - React Hooks, Context API with openweathermap API",
    description:
      "A pretty simple and straightforward weather forecast application built with React and the React Context API. It allows users to search for weather forecasts by city or country and even compare two weather forecasts side-by-side. This project integrates with the OpenWeatherMap API to fetch live and accurate weather data.",
    github: "https://github.com/m-antoni/weather-app",
    total: 4,
  },
  login: {
    title: "Attendance Monitoring System using QRCode - (Laravel and MySQL)",
    description:
      "This project was created on October 2020 as a school project. It’s a simple attendance monitoring system built with Laravel and MySQL that uses QR codes for employee and intern time tracking.",
    github: "https://github.com/m-antoni/login",
    total: 6,
  },
  learn: {
    title: "Advanced and Interactive Learning System - Microsoft Fox Pro 9.0",
    description:
      "This project was a school project developed in 2016 as part of an academic requirement focused on creating an educational and interactive learning environment for students using Microsoft Visual FoxPro.",
    github: "https://github.com/m-antoni/learning_system",
    total: 6,
  },
};

interface ProjectGalleryProps {
  category: ProjectCategory;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ category }) => {
  const project = projectList[category];

  if (!project) return null;

  return (
    <>
      {Array.from({ length: project.total }, (_, i) => {
        const title = `${project.title} ${i + 1}`;
        const description = `${project.description} ${i + 1}. <a href='${
          project.github
        }' target='_blank' rel="noopener noreferrer">Project Link</a>`;

        return (
          <a
            key={`${category}-${i + 1}`}
            href={`/images/folio/${category}/${category}${i + 1}.jpg`}
            className="glightbox"
            data-gallery={category}
            data-glightbox={`title: ${title}; description: ${description}`}
            style={{ display: "none" }}
          ></a>
        );
      })}
    </>
  );
};

export default ProjectGallery;
