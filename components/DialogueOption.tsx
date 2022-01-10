import { useCallback } from "react";

import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/DialogueOption.module.css";

const DialogueOption = ({ option, path }) => {
  const { activeNPC } = useDialogue();

  const topClass = isActiveOption(path) ? styles.activeOption : styles.dialogueOption;

  const clickHandler = useCallback(() => {
    addOption({ })
  }, []);

  return (
    <div className={topClass}>
      <h3 className={styles.optionName} onClick={clickHandler}>{optionName}</h3>

      <div className={styles.subOptions}>
        {option?.options && (
          Object.entries(option.options).map(([subOptionName, subOption]) => (
            <DialogueOption
              key={subOptionName}
              path={[...path, "options", subOptionName]}
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
