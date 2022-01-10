import DialogueOption from "~/components/DialogueOption";
import AddOptionForm from "~/components/AddOptionForm";
import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/DialogueTree.module.css";

const DialogueTree = () => {
  const { NPCs, setNPCs, activeNPC } = useDialogue();

  const options = NPCs[activeNPC];

  return (
    <div className={styles.dialogueTree}>
      <h2 className={styles.activeNPC}>
        {activeNPC}
      </h2>

      {activeNPC && (
        <p>
          Add option to {activeNPC}
        </p>
      )}
      <AddOptionForm />

      {options && Object.entries(options).map(([optionKey, option]) => (
        <DialogueOption 
          key={optionKey}
          option={option}
        />
      ))}
    </div>
  );
};

export default DialogueTree;
