export interface Project {
  title: string;
  flightNumber: string;
  description: string;
  link: string;
  techStack: string[];
  status: string;
  type: string;
  radarPosition: { angle: number; distance: number };
}

export const projects: Project[] = [
  {
    title: 'Airport Distance Visualizer',
    flightNumber: 'AS P01',
    description:
      'This web app, built with React and Leaflet, dynamically calculates and visualizes the shortest distance between two airports. It features real-time data fetching from a comprehensive airport database, advanced geocoding, and mapping for a robust, interactive user experience. The app utilizes React for the frontend and Python Flask for the backend.',
    link: 'https://github.com/asankar04/Airport_Distance_Visualizer',
    techStack: ['React', 'Leaflet', 'Python Flask', 'JavaScript'],
    status: 'Completed',
    type: 'Web Application',
    radarPosition: { angle: 45, distance: 0.7 },
  },
  {
    title: 'Dog Breed Gallery',
    flightNumber: 'AS P02',
    description:
      'Generate a collection of images for a given breed, sub-breed, and the number of images. I used the Dog API to fetch the images. Utilized ReactJS to build the user interface.',
    link: 'https://dog-breed-gallery-site.onrender.com/',
    techStack: ['React', 'Dog API', 'JavaScript', 'CSS'],
    status: 'Completed',
    type: 'Web Application',
    radarPosition: { angle: 120, distance: 0.5 },
  },
  {
    title: 'Fact or Fiction',
    flightNumber: 'AS P03',
    description:
      "An interactive quiz web app where users guess if statements are factual or fictional. Developed the frontend with React and used OpenAI's GPT API to generate the statements, with real-time score tracking.",
    link: 'https://fact-or-fiction-e4472f229907.herokuapp.com/',
    techStack: ['React', 'OpenAI GPT API', 'JavaScript', 'CSS'],
    status: 'Completed',
    type: 'Web Application',
    radarPosition: { angle: 200, distance: 0.6 },
  },
  {
    title: 'Portfolio Website',
    flightNumber: 'AS P04',
    description:
      'This website was created to showcase my experience and projects. It follows a consistent theme and is designed with clarity in mind. I utilized ReactJS, TailwindCSS, Vite, and TypeScript.',
    link: '/',
    techStack: ['ReactJS', 'TailwindCSS', 'Vite', 'TypeScript'],
    status: 'Completed',
    type: 'Portfolio Website',
    radarPosition: { angle: 300, distance: 0.4 },
  },
  {
    title: 'ReactJS Password Generator',
    flightNumber: 'AS P05',
    description:
      'Users can create a randomly generated password based on their preference of the password length and the inclusion of lowercase letters, uppercase letter, numbers, and special characters. Utilized ReactJS, JavaScript XML(JSX), HTML, CSS. This project includes a frontend interface.',
    link: 'https://react-password-generator-cd8d.onrender.com/',
    techStack: ['React', 'JSX', 'HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    type: 'Utility Tool',
    radarPosition: { angle: 15, distance: 0.8 },
  },
];
