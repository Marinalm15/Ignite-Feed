import { Comment } from "./Comment";
import styles from "./Feed.module.css";

export function Feed() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://www.bing.com/th?id=OIP.f0g9p0FKCO9mT1D0_okD1gHaIN&w=163&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                    <div className={styles.authorInfo}>
                        <strong>Sérgio Antônio</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="02 de Outubro às 20:16h" dateTime="2023-09-02 20:16:45">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Olá pessoal, </p>
                <p>acabei de terminar mais um projeto incrível!</p>{' '}
                <a href='https://github.com/Marinalm15/Ignite-Feed'>
                <p>Confira no meu Github! </p>
                </a>
                <p><a href="#">#novoprojeto #rocketseat #reactjs</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea placeholder="Deixe um comentário"/>

                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}