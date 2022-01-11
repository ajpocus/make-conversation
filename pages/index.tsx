import { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import useDialogue from "~/hooks/useDialogue";
import NPCForm from "~/components/NPCForm";
import DialogueTree from "~/components/DialogueTree";
import styles from "~/styles/Home.module.css";

export default function Home() {
  const { NPCs, activeNPC, setActiveNPC, options } = useDialogue();

  const makeLua = useCallback(() => {
    // Code from https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
    // Licensed under CC-BY-SA 4.0
    const finalData = { npcs: NPCs, options };
    const fileContents = "return " + JSON.stringify(finalData, false, 2)
      .replace(/"(\w+)":/g, "$1 =")
      .replace(/\[/g, "{")
      .replace(/\]/g, "}")
      .replace(/null/g, "nil")
      .replace(/undefined/g, "nil");
    const file = new Blob([fileContents], { type: "text/plain" });
    const filename = "dialogue.lua";

    if (window.navigator.msSaveOrOpenBlob) { // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    } else { // Others
      let a = document.createElement("a");
      const url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
      }, 0);
    }
  }, [NPCs, options]);

  return (
    <div className={styles.root}>
      <Head>
        <title>make-conversation</title>
        <meta name="description" content="Create conversation trees as a Lua data structure for Adventure Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>
              make-conversation
            </h1>
          </a>
        </Link>
        <button className={styles.downloadBtn} onClick={makeLua}>Download</button>
      </header>

      <main className={styles.main}>
        <div className={styles.npcs}>
          <NPCForm />

          <div className={styles.npcList}>
            {
              NPCs && Object.keys(NPCs).length ? (
                Object.entries(NPCs).map(([npcID, npc]) => (
                  <div key={npcID} className={styles.npc} onClick={() => setActiveNPC(npcID)}>
                    {npc.name}
                  </div>
                ))
              ) : (
                <p>Create an NPC to continue</p>
              )
            }
          </div>
        </div>

        {
          activeNPC ? (
            <DialogueTree />
          ) : (
            <p>Click an NPC to start</p>
          )
        }
      </main>

      <footer className={styles.footer}>
        &copy; Copyright 2022 Austin Pocus
      </footer>
    </div>
  )
}
