import { useState } from 'react'
import "./global.css"
import styles from "./App.module.css"
import { Header } from './components/Header'
import {Sidebar } from './components/Sidebar'

export default function App() {

  return (
    <>
    <Header />
    
    <div className={styles.wrapper}>
    <Sidebar />
      <main></main>
    </div>
    </>
  )
}

