import DialogueOption from "~/components/DialogueOption";
import AddOptionForm from "~/components/AddOptionForm";
import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/DialogueTree.module.css";

const DialogueTree = () => {
  const { NPCs, setNPCs, activeNPC, options } = useDialogue();

  const npc = NPCs[activeNPC]
  const optionList = npc.options?.map((optionID) => options[optionID]);

  return (
    <div className={styles.dialogueTree}>
      <h2 className={styles.activeNPC}>
        {npc.name}
      </h2>

      {activeNPC && (
        <p>
          Add option to {npc.name}
        </p>
      )}
      <AddOptionForm />

      {optionList && optionList.map((option) => (
        <DialogueOption 
          key={option.id}
          option={option}
        />
      ))}
    </div>
  );
};

export default DialogueTree;
