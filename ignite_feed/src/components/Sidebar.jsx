import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
      <aside className={styles.sidebar}>
        <img className={styles.cover}
        src="https://images.unsplash.com/photo-1508808703020-ef18109db02f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=40"/>

        <div className={styles.profile}>
          <strong>Marina Mendonça</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            Editar o seu perfil
          </a>
        </footer>
      </aside>
      
    )
}