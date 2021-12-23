import { useCallback } from "react"
import { useForm } from "react-hook-form"
import slugify from "slugify"

import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/AddOptionForm.module.css"

const AddOptionForm = ({ keys }) => {
  const { register, handleSubmit, reset } = useForm();
  const { tree, setTree, activePath, addOption } = useDialogue();

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
