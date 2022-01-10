import DialogueOption from "~/components/DialogueOption"
import AddOptionForm from "~/components/AddOptionForm"
import useDialogue from "~/hooks/useDialogue"
import styles from "~/styles/DialogueTree.module.css"

const DialogueTree = () => {
  const { tree, setTree, activePath, activeNPC } = useDialogue();

  const rootOptions = tree[activeNPC];
  const path = activePath ? activePath : [activeNPC];

  return (
    <div className={styles.dialogueTree}>
      <h2 className={styles.activeNPC}>
        {activeNPC}
      </h2>

      <AddOptionForm />

      {rootOptions && Object.entries(rootOptions).map(([optionName, option]) => (
        <DialogueOption 
          key={optionName}
          optionName={optionName}
          option={option}
          path={[...activePath, option.name]}
        />
      )) || null}
    </div>
  );
};

export default DialogueTree
