// src/components/UserForm.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../validation/userSchema";

const UserForm = ({ defaultValues, onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues || { name: "", email: "" },
  });

  useEffect(() => {
    if (defaultValues) {
      setValue("name", defaultValues.name);
      setValue("email", defaultValues.email);
    }
  }, [defaultValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register("name")}
        className="border p-2 w-full mb-1 rounded"
      />
      {errors.name && <p className="text-red-500 mb-2">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="border p-2 w-full mb-1 rounded"
      />
      {errors.email && <p className="text-red-500 mb-2">{errors.email.message}</p>}

      <div className="flex justify-end space-x-2 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-300"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;