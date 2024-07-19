import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
     <Header />
     
      <div className = { styles.wrapper }>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
              author = "Andre Martins"
              content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officiis quam vel aperiam facere itaque vero earum odio alias, laudantium inventore quibusdam quo velit dolores praesentium omnis odit aspernatur natus."
            />
            <Post
              author = "Rodrigo Miranda"
              content = "Estou cada dia melhor!"
            />
            <Post
              author = "Germain Girndt"
              content = "Andreeeeeee!"
            />
            <Post
              author = "Iandra Siqueira"
              content = "Tô gorda!"
            /> 
        </main>
      </div>
    </div>

  )
}
