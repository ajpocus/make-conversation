import { useCallback } from "react"
import { useForm } from "react-hook-form"

import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/AddOptionForm.module.css"

const AddOptionForm = ({ keys }) => {
  const { register, handleSubmit, reset } = useForm();
  const { tree, setTree, activePath, addOption } = useDialogue();

  const optionAdder = useCallback(() => {
    addOption(keys, reset);
  }, [keys, reset, addOption]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(optionAdder)}>
        <input {...register("optionText")} />
        <button type="submit">Add option</button>
      </form>
    </div>
  );
};

export default AddOptionForm
