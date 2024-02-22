import "./App.css";
import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProjects from "./components/NewProjects";
import NoProjects from "./components/NoProjects";
import ProjectDetails from "./components/ProjectDetails";
import uuid from "react-uuid";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  console.log(projectState);

  const handleStartProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleProjects = (projects) => {
    setProjectState((prevState) => {
      console.log(prevState);
      const projectID = uuid();
      const newProject = {
        ...projects,
        id: projectID,
      };
      return {
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  };

  const handleProjectSelect = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = (id) => {
    console.log("id : " + id);
    console.log(projectState);
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: projectState.projects.filter((project) => project.id !== id),
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  console.log(selectedProject);
  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjects onHandleStartProject={handleStartProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProjects onhandleProjects={handleProjects} />;
  } else {
    content = (
      <ProjectDetails
        selectedProject={selectedProject}
        onHandleDeleteProject={handleDeleteProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onHandleStartProject={handleStartProject}
        projectList={projectState.projects}
        onHandleProjectSelect={handleProjectSelect}
      />
      {/* <NoProjects onHandleStartProject={handleStartProject} /> */}
      {content}
    </main>
  );
}

export default App;
