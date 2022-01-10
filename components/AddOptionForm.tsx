import { useCallback } from "react"
import { useForm } from "react-hook-form"
import slugify from "slugify"
import set from "lodash/set";

import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/AddOptionForm.module.css";

const AddOptionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { tree, setTree, activePath } = useDialogue();

  const addOption = useCallback(({ text }) => {
    let treeCopy = { ...tree };
    const optionKey = slugify(text);
    const newPath = [...activePath, "options", optionKey];
    console.log("NEW PATH", newPath)
    const val = { text };
    set(treeCopy, newPath, val);
    setTree(treeCopy);
    reset();
  }, [tree, setTree, reset, activePath]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(addOption)}>
        <input {...register("text")} />
        <button type="submit">Add option</button>
      </form>
    </div>
  );
};

export default AddOptionForm
