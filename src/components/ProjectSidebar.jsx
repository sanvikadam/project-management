import Button from "../assets/UI/Button";

const ProjectSidebar = ({
  onHandleStartProject,
  projectList,
  onHandleProjectSelect,
}) => {
  const selectProject = (id) => {
    onHandleProjectSelect(id);
  };
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-700 text-stone-100 md:w-72 rounded-xl">
      <h2 className="mb-8 uppercase font-bold md:text-ul text-stone-200">
        Your Project
      </h2>
      <div>
        <Button
          onClick={onHandleStartProject}
          classname="px-6 py-2 mb-5 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          + Add Project
        </Button>
      </div>
      {projectList.length === 0 ? (
        <p className="w-full px-2 py-1 rounded-sm my-10 text-center text-stone-400">
          No Projects
        </p>
      ) : (
        <ul>
          {projectList.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => selectProject(project.id)}
                className="w-full text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-text-stone-800 capitalize"
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default ProjectSidebar;
