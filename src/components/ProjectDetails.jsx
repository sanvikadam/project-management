import React from "react";

const ProjectDetails = ({ selectedProject, onHandleDeleteProject }) => {
  console.log(selectedProject.title);

  const deleteProject = (id) => {
    onHandleDeleteProject(id);
  };

  return (
    <div className="w-[35rem] mt-6">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2 capitalize">
            {selectedProject.title}
          </h2>
          <button
            onClick={() => deleteProject(selectedProject.id)}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-600 whitespace-pre-wrap capitalize">
          {selectedProject.description}
        </p>
        <p className="mb-4 text-stone-400">{selectedProject.dueDate}</p>
      </header>
    </div>
  );
};

export default ProjectDetails;
