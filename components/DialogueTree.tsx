import DialogueOption from "~/components/DialogueOption";
import AddOptionForm from "~/components/AddOptionForm";
import useDialogue from "~/hooks/useDialogue";
import styles from "~/styles/DialogueTree.module.css";

const DialogueTree = () => {
  const { NPCs, setNPCs, activeNPC, activeOption, options } = useDialogue();

  const npc = NPCs[activeNPC]
  const optionList = npc.options?.map((optionID) => options[optionID]);
  const subOptions = activeOption && options[activeOption]?.responses?.map(id => options[id]);

  return (
    <div className={styles.dialogueTree}>
      <div className={styles.mainOptions}>
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

      <div className={styles.subOptions}>
        {subOptions && subOptions.map((subOption) => (
          <p key={subOption.id}>{subOption.text}</p>
        ))}
      </div>
    </div>
  );
};

export default DialogueTree;
