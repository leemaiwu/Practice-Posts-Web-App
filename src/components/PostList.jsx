import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import styles from './PostList.module.css'
import { useState } from 'react'

function PostList({onFinishPost, isPosting}) {

    const [posts, setPosts] = useState([])

    const addPostHandler = (postData) => {
        setPosts((existingPost) => [postData, ...existingPost])
    }

    return (
        <div>
            {isPosting && 
                <Modal onClose={onFinishPost}>
                    <NewPost 
                        onCancel={onFinishPost}
                        onNewPost={addPostHandler} 
                    />
                </Modal>
            }
            {posts.length > 0 &&
                <ul className={styles.container}>
                    {posts.map((item, index) => 
                        <Post body={item.body} name={item.name} key={index} />
                    )}
                </ul>
            }
            {posts.length == 0 &&
                <div style={{marginTop: '50px', textAlign: 'center', color: 'white'}}>
                    <h2>There are No Posts Yet</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </div>
    )
}

export default PostList
