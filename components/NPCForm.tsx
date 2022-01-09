import { useEffect, useCallback } from "react"
import { useForm } from "react-hook-form"

import useDialogue from "~/hooks/useDialogue"

const NPCForm = () => {
  const { tree, setTree, addNPC } = useDialogue();
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = useCallback(({ name }) => {
    addNPC({ name });
    reset();
  }, [addNPC, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input {...register("name")} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NPCForm
