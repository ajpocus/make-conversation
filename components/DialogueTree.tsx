import DialogueOption from "~/components/DialogueOption"
import AddOptionForm from "~/components/AddOptionForm"
import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/DialogueTree.module.css"

const DialogueTree = ({ activeNPC }) => {
  const { tree, setTree, activePath } = useDialogue();

  const rootOptions = tree[activeNPC];
  const keys = activePath ? activePath : [activeNPC];

  return (
    <div className={styles.dialogueTree}>
      <h2 className={styles.activeNPC}>
        {activeNPC}
      </h2>

      <AddOptionForm keys={keys} />

      {rootOptions && Object.entries(rootOptions).map(([optionName, option]) => (
        <DialogueOption 
          key={optionName}
          optionName={optionName}
          option={option}
          keys={[activeNPC, optionName]}
        />
      )) || null}
    </div>
  );
};

export default DialogueTree
