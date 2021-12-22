import useDialogue from "~/hooks/useDialogue"

const DialogueOption = ({ optionName, option, keys, activeNPC }) => {
  const { state, setState, activeOption, setActiveOption } = useDialogue();

  return (
    <div className={styles.dialogueOption}>
      {optionName}

      <div className={styles.subOptions}>
        {option.response.options && (
          Object.entries(option.options).map(([subOptionName, subOption]) => {
            <DialogueOption
              key={optionKey}
              keys={[...keys, optionKey]}
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
