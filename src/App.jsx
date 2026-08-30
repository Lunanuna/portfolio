import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css';

import ProjectsPage from "./views/ProjectsPage";
import AboutPage from "./views/AboutPage";
import ArchivePage from "./views/ArchivePage";
//Projects Detail Page
import BlaaSolProject from "./views/BlaaSolProject";
import SpilCafeenProject from "./views/SpilCafeenProject";
import HiddenSeoulProject from "./views/HiddenSeoulProject";

//Archive Detail Page
const router = createBrowserRouter([
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
      },
      { 
        path: "projects/blaa-sol", 
        element: <BlaaSolProject /> 
      },
      { 
        path: "projects/spil-cafeen", 
        element: <SpilCafeenProject /> 
      },
      { 
        path: "projects/hidden-seoul", 
        element: <HiddenSeoulProject /> 
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;