import { forwardRef } from "react";

const Input = forwardRef(({ textarea, labelText, type }, ref) => {
  return (
    <p className="flex flex-col gap-1 my-4 items-start">
      <label
        htmlFor={labelText}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {labelText}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          id={labelText}
          type={type}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      ) : (
        <input
          ref={ref}
          id={labelText}
          type={type}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      )}
    </p>
  );
});

export default Input;
