import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
     <Header />
     
      <div className = { styles.wrapper }>
        <Sidebar />
        <main>
          <Post
              author = "Andre Martins"
              content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officiis quam vel aperiam facere itaque vero earum odio alias, laudantium inventore quibusdam quo velit dolores praesentium omnis odit aspernatur natus."
            />
            <Post
              author = "Rodrigo Miranda"
              content = "A gordura que tá na pele do frango escorre toda na máquina."
            />
            <Post
              author = "Germain Girndt"
              content = "Andreeeeeee!"
            />
            <Post
              author = "Iandra Siqueira"
              content = "Tô magra!"
            />
             <Post
              author = "Anna Andréa"
              content = "É claro que eu sei porque eu sou da área da saúde."
            /> 
        </main>
      </div>
    </div>

  )
}
