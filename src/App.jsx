import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css';

import ProjectsPage from "./views/ProjectsPage";
import AboutPage from "./views/AboutPage";
import ArchivePage from "./views/ArchivePage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProjectsPage />
      },
      {
        path: "About",
        element: <AboutPage />
      },
      {
        path: "Archive",
        element: <ArchivePage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;