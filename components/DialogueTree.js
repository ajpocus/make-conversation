import DialogueOption from "~/components/DialogueOption"
import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/DialogueTree.module.css"

const DialogueTree = ({ activeNPC }) => {
  const { state, setState } = useDialogue();

  return (
    <div className={styles.dialogueTree}>
      <h2 className={styles.activeNPC}>
        {activeNPC}
      </h2>

      {Object.entries(state[activeNPC]).map(([optionName, option]) => (
        <DialogueOption key={optionName} option={option} />
      ))}
    </div>
  );
};

export default DialogueTree
