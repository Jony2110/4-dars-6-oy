import styles from './link.module.css'
import { useState } from 'react'
function Link() {
  const [linklar , setLinklar] = useState("")
  function linklarr() {
    const linklar = setLinklar(prompt("LInkni kiriting"))
  }
  return (
    <div className={styles.flex}>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="../../../public/img/Google.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="../../../public/img/Insta.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="../../../public/img/telegram.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img className={styles.img} src="../../../public/img/facebook.svg" alt="" /></button>
        <button onClick={linklarr} className={styles.btn}><img  className={styles.img}src="../../../public/img/git.svg" alt="" /></button>
        </div>
  )
}

export default Link