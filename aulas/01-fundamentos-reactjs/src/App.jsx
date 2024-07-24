import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id:1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/52306002?v=4",
      name: 'Germain Girndt',
      role: 'AI Dev SAP'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' , content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type : 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt : new Date('2024-07-23 21:31:56'),
  },
  {
    id:2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/117786763?v=4",
      name: 'Andre Martins',
      role: 'Estudante'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' , content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type : 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt : new Date('2024-06-18 11:59:03'),
  },

]

export function App() {
  return (
    <div>
     <Header />
     
      <div className = { styles.wrapper }>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
                
              <Post
                author = {post.author}
                content = { post.content }
                publishedAt = { post.publishedAt }
              />
            )
          }) }
        </main>
      </div>
    </div>

  )
}
