import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
    return (
      <aside className={styles.sidebar}>
        <img className={styles.cover}
        src="https://images.unsplash.com/photo-1508808703020-ef18109db02f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=40"/>

        <div className={styles.profile}>
          <img className={styles.avatar} src="../assets/foto.jpg"/>
          <strong>Marina Mendonça</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
          <PencilLine size={20} />
            Editar o seu perfil
          </a>
        </footer>
      </aside>
      
    )
}