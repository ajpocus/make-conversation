import { useCallback } from "react"
import { useForm } from "react-hook-form"

import useDialogue from "~/hooks/useDialogue"

const AddOptionForm = ({ keys }) => {
  const { register, handleSubmit } = useForm();
  const { state, setState } = useDialogue();

  const addOption = useCallback(({ optionText }) => {
    let thisObj = { ...state };

    for (let key of keys) {
      thisObj = thisObj[key];
    }

    const optionKey = slugify(optionText);

    thisObj[optionKey] = {
      optionText
    }

    setState(thisObj)
  }, [state, setState, keys]);

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
