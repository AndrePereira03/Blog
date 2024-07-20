import styles from './Sidebar.module.css'

export function Sidebar()
{
  return (
    <aside className = { styles.sidebar }>
        <img
            className = { styles.cover }
            src = "https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "Foto de perfil do usuário"
        />
        <div className = {styles.profile}>
            <strong>Andre Martins</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a herf = "#">
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}