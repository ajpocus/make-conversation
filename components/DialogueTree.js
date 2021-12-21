import DialogueOption from "~/components/DialogueOption"
import AddOptionForm from "~/components/AddOptionForm"
import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/DialogueTree.module.css"

const DialogueTree = ({ activeNPC }) => {
  const { state, setState } = useDialogue();

  const rootOptions = state[activeNPC];

  return (
    <div className={styles.dialogueTree}>
      <h2 className={styles.activeNPC}>
        {activeNPC}
      </h2>

      <AddOptionForm keys={[activeNPC]} />

      {rootOptions && Object.entries(rootOptions).map(([optionName, option]) => (
        <DialogueOption key={optionName} option={option} />
      )) || null}
    </div>
  );
};

export default DialogueTree
