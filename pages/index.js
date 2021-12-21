import { useState, useCallback } from "react"
import Head from "next/head"
import Image from "next/image"
import { Formik, Field, Form } from "formik";

import styles from "~/styles/Home.module.css"

export default function Home() {
  const [state, setState] = useState({});
  const [activeNPC, setActiveNPC] = useState(null);

  const makeLua = useCallback(() => {
    // Code from https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
    // Licensed under CC-BY-SA 4.0
    const fileContents = JSON.stringify(state, false, 2)
      .replace(/"(\w+)":/g, "$1 =")
      .replace(/\[/g, "{")
      .replace(/\]/g, "}");
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
  }, [state]);

  const addNPC = useCallback(({ name }) => {
    setState({
      ...state,
      [name]: {}
    });
  }, [state, setState])

  return (
    <div className={styles.root}>
      <Head>
        <title>make-conversation</title>
        <meta name="description" content="Create a conversation tree as a Lua data structure for Adventure Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          make-conversation
        </h1>

        <div className={styles.addNPC}>
          <Formik
            initialValues={{ name: "" }}
            onSubmit={addNPC}>
          
          </Formik>
        </div>

        {
          Object.keys(state).length ? (
            <div className={styles.state}>
              {Object.entries(state).map(([npcName, npc]) => (
                <div key={npcName} className={styles.npc}>
                  {npcName}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>Create an NPC to continue</div>
          )
        }
      </main>

      <footer className={styles.footer}>
        &copy; Copyright 2021 Austin Pocus
      </footer>
    </div>
  )
}
