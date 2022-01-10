import { useCallback } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import set from "lodash/set";

import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/AddOptionForm.module.css";

const AddOptionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { NPCs, setNPCs, activePath } = useDialogue();

  const submitHandler = useCallback(({ text }) => {
    let NPCCopy = { ...NPCs };
    let activeObject = NPCCopy[activeNPC]
    NPCCopy[activeNPC].options[activeOption]
    setNPCs(NPCCopy);
    reset();
  }, [NPCs, setNPCs, reset]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input {...register("text")} />
        <button type="submit">Add option</button>
      </form>
    </div>
  );
};

export default AddOptionForm;
