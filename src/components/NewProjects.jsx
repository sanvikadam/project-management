import Button from "../assets/UI/Button";
import Input from "../assets/UI/Input";
import { useRef } from "react";

const NewProjects = ({ onhandleProjects }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const date = new Date();

  const onHandleSaveProject = () => {
    const getTitle = title.current.value;
    const getDescription = description.current.value;
    const getDueDate = dueDate.current.value;

    if (
      getTitle.trim().length === 0 ||
      getDescription.trim().length === 0 ||
      getDueDate.length === 0
    ) {
      // showErrorMsg = true;
      alert("Kindly fill in the details");
      console.log(showErrorMsg.current);
      return;
    }

    onhandleProjects({
      title: getTitle,
      description: getDescription,
      dueDate: getDueDate,
    });

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button classname="text-stone-800 hover:text-stone-950">
            Cancel
          </Button>
        </li>
        <li>
          <Button
            onClick={onHandleSaveProject}
            classname="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </Button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} labelText="Title"></Input>
        <Input
          type="text"
          ref={description}
          labelText="Description"
          textarea
        ></Input>
        <Input
          type="date"
          min={date.toISOString().split("T")[0]}
          ref={dueDate}
          labelText="Due Date"
        ></Input>
      </div>
    </div>
  );
};

export default NewProjects;
