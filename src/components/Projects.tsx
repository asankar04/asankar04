import { motion } from 'framer-motion';
import ReturnButton from './Custom/ReturnButton';
import { type ThemeColor } from '../utils/themes';
import type { Section } from '../hooks/useSection';

interface ProjectsProps {
  color: ThemeColor;
  handleSectionChange: (section: Section) => void;
  isTransitioning: boolean;
}

const projects = [
  {
    title: 'Airport Distance Visualizer',
    flightNumber: 'AS P01',
    description:
      'This web app, built with React and Leaflet, dynamically calculates and visualizes the shortest distance between two airports. It features real-time data fetching from a comprehensive airport database, advanced geocoding, and mapping for a robust, interactive user experience. The app utilizes React for the frontend and Python Flask for the backend.',
    link: 'https://github.com/asankar04/Airport_Distance_Visualizer',
    techStack: ['React', 'Leaflet', 'Python Flask', 'JavaScript'],
    status: 'Completed',
    type: 'Web Application',
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
  },
  {
    title: 'Main Website',
    flightNumber: 'AS P04',
    description:
      'This website was created to showcase my experience and projects. It follows a consistent theme and is designed with clarity in mind. I utilized HTML, CSS, JavaScript (JS), and Python Flask.',
    link: '/',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python Flask'],
    status: 'Completed',
    type: 'Portfolio Website',
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
  },
  {
    title: 'Java Password Generator',
    flightNumber: 'AS P06',
    description:
      'Generate a random password based on preferences such as the password length and the inclusion of numbers, and special characters. Utilized Java.',
    link: 'https://github.com/asankar04/Java_Password_Generator',
    techStack: ['Java'],
    status: 'Completed',
    type: 'Desktop Application',
  },
  {
    title: 'Java Calculator',
    flightNumber: 'AS P07',
    description:
      'Java-based calculator with an intuitive GUI, offering essential arithmetic operations and power functions for enhanced user interaction.',
    link: 'https://github.com/asankar04/Java-Calculator',
    techStack: ['Java', 'Swing GUI'],
    status: 'Completed',
    type: 'Desktop Application',
  },
];

export default function Projects({
  color,
  handleSectionChange,
  isTransitioning,
}: ProjectsProps) {
  return (
    <motion.div
      className="relative z-10 bg-black/40 min-h-screen flex flex-col items-center justify-center px-4 py-8 max-md:px-0"
      initial={{ scale: 0.8 }}
      animate={{
        scale: isTransitioning ? 0.8 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      <ReturnButton
        color={color}
        handleSectionChange={() => handleSectionChange('boarding')}
      />

      {/* Projects */}
      <motion.div>
        {projects.map((project) => (
          <motion.div key={project.title}>
            <h2>{project.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
