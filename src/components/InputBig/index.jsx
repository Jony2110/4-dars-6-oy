
import styles from './index.module.css'

function InputBig(props) {
  return (
    <div className={styles.box}>
     <label htmlFor="">{props.name} <span className={styles.zvezda}>*</span></label>
     <input type={props.type}  placeholder="Kompaniya haqida izoh qoldiring"/>
    </div>
  )
}

export default InputBig