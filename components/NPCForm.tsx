import { useEffect } from "react"
import { useForm } from "react-hook-form"

import useDialogue from "~/hooks/useDialogue"

const NPCForm = () => {
  const { tree, setTree } = useDialogue();
  const { register, handleSubmit, reset } = useForm();

  const addNPC = ({ name }) => {
    console.log("N", name)
    setTree({
      ...tree,
      [name]: {}
    });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addNPC)}>
        <input {...register("name")} />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NPCForm
