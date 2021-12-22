import { useEffect } from "react"
import { useForm } from "react-hook-form"

import useDialogue from "~/hooks/useDialogue"

const NPCForm = () => {
  const { state, setState } = useDialogue();
  const { register, handleSubmit, reset } = useForm();

  const addNPC = ({ name }) => {
    console.log("N", name)
    setState({
      ...state,
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
