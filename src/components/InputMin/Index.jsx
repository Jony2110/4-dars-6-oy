
import styles from './index.module.css'

function InputMini(props) {
  return (
    <div className={styles.box}>
     <label htmlFor="">{props.name} <span className={styles.zvezda}>*</span></label>
     <input type={props.type}  placeholder={props.name}/>
    </div>
  )
}

export default InputMini