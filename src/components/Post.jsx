import styles from './Post.module.css'

function Post({name, body}) {

    return (
        <div className={styles.card}>
            <p className={styles.text}>{body}</p>
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Post
