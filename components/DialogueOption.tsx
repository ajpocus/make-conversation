import { useCallback } from "react"

import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/DialogueOption.module.css"

const DialogueOption = ({ optionName, option, path, activeNPC }) => {
  const { isActiveOption, makeActive } = useDialogue();

  const topClass = isActiveOption(path) ? styles.activeOption : styles.dialogueOption;

  const clickHandler = useCallback(() => {
    makeActive(path)
  }, [path, makeActive]);

  return (
    <div className={topClass}>
      <h3 className={styles.optionName} onClick={clickHandler}>{optionName}</h3>

      <div className={styles.subOptions}>
        {option?.options && (
          Object.entries(option.options).map(([subOptionName, subOption]) => {
            <DialogueOption
              key={optionKey}
              path={[...path, optionKey]}
              optionName={subOptionName}
              option={subOption}
            />
          })
        ) || null}
      </div>
    </div>
  );
};

export default DialogueOption
