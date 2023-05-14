import Post from './Post'
import styles from './PostList.module.css'

function PostList() {

    return (
        <ul className={styles.container}>
          <Post name='- Jack' body='Golf is the best!' />
          <Post name='- Laura' body='React.js is awesome!' />
        </ul>
    )
}

export default PostList
