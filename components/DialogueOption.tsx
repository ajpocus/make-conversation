import { useCallback } from "react";

import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/DialogueOption.module.css";

const DialogueOption = ({ option }) => {
  const { activeOption, setActiveOption } = useDialogue();

  const topClass = option.id === activeOption ? styles.activeOption : styles.dialogueOption;

  const clickHandler = useCallback(() => {
    setActiveOption(option.id);
  }, [setActiveOption, option]);

  return (
    <div className={topClass}>
      <h3 className={styles.optionName} onClick={clickHandler}>{option.text}</h3>
    </div>
  );
};

export default DialogueOption;
