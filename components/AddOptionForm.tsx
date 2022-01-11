import { useCallback } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import cuid from "cuid";

import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/AddOptionForm.module.css";

const AddOptionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { options, setOptions, activeOption } = useDialogue();

  const submitHandler = useCallback(({ text }) => {
    let optionsCopy = { ...options };
    let id = cuid();
    optionsCopy[id] = { id, text };

    if (activeOption) {
      let activeCopy = optionsCopy[activeOption];
      activeCopy.responses = [
        ...activeCopy.responses,
        id
      ];
      optionsCopy[activeOption] = activeCopy;
    }

    setOptions(optionsCopy);
    reset();
  }, [options, setOptions, activeOption, reset]);

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
