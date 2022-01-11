import { useCallback } from "react";

import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/DialogueOption.module.css";

const DialogueOption = ({ option, path }) => {
  const { activeOption, setActiveOption } = useDialogue();

  const topClass = option.id === activeOption ? styles.activeOption : styles.dialogueOption;

  const clickHandler = useCallback(() => {
    setActiveOption(option.id);
  }, [setActiveOption, option]);

  return (
    <div className={topClass}>
      <h3 className={styles.optionName} onClick={clickHandler}>{option.id}</h3>

      <div className={styles.subOptions}>
        {option?.options && (
          Object.entries(option.responses).map(([subOptionName, subOption]) => (
            <DialogueOption
              key={subOptionName}
              optionName={subOptionName}
              option={subOption}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DialogueOption;
