import { useCallback } from "react"
import { useForm } from "react-hook-form"
import slugify from "slugify"

import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/AddOptionForm.module.css"

const AddOptionForm = ({ keys }) => {
  const { register, handleSubmit, reset } = useForm();
  const { state, setState, activePath } = useDialogue();

  const addOption = useCallback(({ optionText }) => {
    let stateCopy = { ...state };
    
    let thisObj = stateCopy;
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

    setState(stateCopy);
    reset();
  }, [state, setState, reset, keys]);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(addOption)}>
        <input {...register("optionText")} />
        <button type="submit">Add option</button>
      </form>
    </div>
  )
}

export default AddOptionForm
