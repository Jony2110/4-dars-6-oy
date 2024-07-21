import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header/header'
import Input from './components/Input/input'
import Dasturlar from './components/Dasturlar'
import Link from './components/Link/link'
import InputMini from './components/InputMin/Index'
import InputBig from './components/InputBig'
import Button from './components/Button/button'

function App() {
  const [fotoPush , setFotoPush] = useState('https://picsum.photos/200/300')
 
  function handlePush() {
   const fotoPush = setFotoPush(prompt("Rasm linkini kiriting"))
  }

  return (
    <div>
      <Header/>
     <div className={styles.container}>
     <h1 className={styles.h1}>Kompaniya ma`lumotlari</h1>
     <p className={styles.p}>Kompaniya haqidagi ma’lumotlarni kiriting</p>
     <div className= {styles.img}>
     <img src={fotoPush} alt="Iltimos link yuboring" />
     <button className= {styles.btn}  onClick={handlePush}>Yuklash</button>
     </div>
    
    <Input  name="Kompaniya nomi" type ="text" inp = "company" />
    <Input name="Email" type ="text" />
    <Input name="Telefon raqam" phone="Uz +998" type ="number" />
    <Dasturlar/>
    <Link/>
    <div className={styles.flexs}>
    <InputMini name="Davlat" type ="text" />
    <InputMini name="Shahar" type ="text"/>
    </div>
    <Input name="Yashash joyi" type ="text" />
    <Input name="Hodimlar soni" type ="number" />
    <InputBig name="Izoh" type ="text"/>
    <div className={styles.btnBack}>
    <Button name = "ORTGA"/>
    <Button name = "KEYINGISI"/>
    
    </div>
     </div>
    </div>
  )
}

export default App