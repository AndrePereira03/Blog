import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXl999FEKE4-GHm3BuDb93BeohdgQ9v6reg&s"
        alt="Foto de perfil do usuário"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/117786763?v=4" />
        <strong>Andre Pereira</strong>
        <span>Desenvolvedor Back-end</span>
      </div>

      <footer>
        <a herf="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
