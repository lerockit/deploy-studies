import axios from 'axios'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [name, setName] = useState('');

  const findName = async (name) => {
    const { data } = await axios.get('http://localhost:8000/', {
      params: { name }
    })
    setName(name)
  }

  const onInputChange = async ({target}) => findName(target.value)

  return (
    <div className={styles.container}>
      <p>Insert your name</p>
      <input onChange={onInputChange}/>
      <p>Hello {name}</p>
    </div>
  )
}
