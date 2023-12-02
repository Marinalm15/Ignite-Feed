import { Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function hendleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <img src="https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?pid=ImgDet&rs=1"/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="02 de Outubro às 20:16h" dateTime="2023-09-02 20:16:45">Cerca de 1h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>

                <p>{content}</p>
            </div>
            <footer>
                <button onClick={hendleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
        </div>
    )
}