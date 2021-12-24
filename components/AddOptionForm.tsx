import { useCallback } from "react"
import { useForm } from "react-hook-form"
import slugify from "slugify"

import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/AddOptionForm.module.css"

const AddOptionForm = ({ keys }) => {
  const { register, handleSubmit, reset } = useForm();
  const { tree, setTree, activePath } = useDialogue();

  const addOption = useCallback(({ optionText }) => {
    let treeCopy = { ...tree };
    
    let thisObj = treeCopy;
    for (let key of keys) {
      if (!thisObj[key]) {
        thisObj[key] = {};
      }
      
      thisObj = thisObj[key];
    }

    const optionKey = slugify(optionText);

    if (!thisObj.options) {
      thisObj.options = {};
    }

    thisObj.options[optionKey] = { optionText }

    setTree(treeCopy);
    reset();
  }, [tree, setTree, reset, keys]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(addOption)}>
        <input {...register("optionText")} />
        <button type="submit">Add option</button>
      </form>
    </div>
  );
};

export default AddOptionForm
