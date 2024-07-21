import styles from './input.module.css'

function Input(props) {
  
 
  function handleName(event) {
    console.log(event.target.value)
  }
  
  return (
    <div  className={styles.box}>
     <label htmlFor="">{props.name} <span className={styles.zvezda}>*</span></label>
     <input onChange={handleName} type={props.type}  placeholder={props.name}/>
    </div>
  )
}

export default Input