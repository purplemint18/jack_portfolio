import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './utils/ThemeContext';

import MainLayout from './layouts/MainLayout';
import AboutContainer from './containers/AboutContainer';
import ExperienceContainer from './containers/ExperienceContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import SkillsContainer from './containers/SkillsContainer';
import EducationContainer from './containers/EducationContainer';
import ContactContainer from './containers/ContactContainer';
import SettingsContainer from './containers/SettingsContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AboutContainer />
      },
      {
        path: 'experience',
        element: <ExperienceContainer />
      },
      {
        path: 'projects',
        element: <ProjectsContainer />
      },
      {
        path: 'skills',
        element: <SkillsContainer />
      },
      {
        path: 'education',
        element: <EducationContainer />
      },
      {
        path: 'contact',
        element: <ContactContainer />
      },
      {
        path: 'settings',
        element: <SettingsContainer />
      }
    ]
  }
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}

export default App;
