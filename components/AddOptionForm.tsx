import { useCallback } from "react"
import { useForm } from "react-hook-form"
import slugify from "slugify"

import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/AddOptionForm.module.css"

const AddOptionForm = ({ path }) => {
  const { register, handleSubmit, reset } = useForm();
  const { tree, setTree, activePath } = useDialogue();

  const addOption = useCallback(({ text }) => {
    let treeCopy = { ...tree };
    
    let thisObj = treeCopy;
    for (let key of activePath) {
      if (!thisObj[key]) {
        thisObj[key] = {};
      }

      if ("options" in thisObj) {
        thisObj = thisObj.options[key]
      } else {
        thisObj = thisObj[key];
      }
    }

    const optionKey = slugify(text);
    thisObj[optionKey] = { text }

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
