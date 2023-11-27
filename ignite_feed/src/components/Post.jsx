import { useState } from "react";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        "Post muito bacana, parabéns!"
])

    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText("")
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time>{publishedDateFormatted}h</time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                if(line.type === "paragraph") {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === "link") {
                    return <p key={line.content}><a href="">{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea 
                name="comment"
                placeholder="Deixe um comentário"
                value={newCommentText}
                onChange={handleNewCommentChange}
                />

                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}