import Button from "../assets/UI/Button";
import noprojectimg from "../assets/no-projects.png";

const NewProjects = ({ onHandleStartProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noprojectimg} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button
          onClick={onHandleStartProject}
          classname="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          + Add Project
        </Button>
      </p>
    </div>
  );
};

export default NewProjects;
