import { useState } from 'react'
import "./global.css"
import styles from "./App.module.css"
import { Header } from './components/Header'
import {Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://th.bing.com/th/id/OIP.PqBYGErQeWQWhbA_VeUBDQHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Marina Mendonça",
      role: "Front-end Developer"
    },
    content: [
      {type: "paragraph", content: "Olá pessoal"},
                {type: "paragraph", content: "acabei de terminar mais um projeto incrível!"},
                {type: "link", content: "Confira no meu Github!"},
                {type: "link", content: "#novoprojeto #rocketseat #reactjs"}
    ],
    publishedAt: new Date("2023-11-25 14:24:35")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?pid=ImgDet&rs=1",
      name: "Mayc Brito",
      role: "Full-stack Developer"
    },
    content: [
      {type: "paragraph", content: "Olá pessoal"},
                {type: "paragraph", content: "acabei de terminar mais um projeto incrível!"},
                {type: "link", content: "Confira no meu Github!"},
                {type: "link", content: "#novoprojeto #rocketseat #reactjs"}
    ],
    publishedAt: new Date("2023-11-27 17:45:56")
  },
]

export default function App() {

  return (
    <>
    <Header />
    
    <div className={styles.wrapper}>
    <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </>
  )
}

