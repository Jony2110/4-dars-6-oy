import styles from './button.module.css'

function Button(props) {
  return (
    <div className={styles.flexx}>
        <button className={styles.button}>{props.name}</button>
    </div>
  )
}

export default Button