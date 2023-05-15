import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'
import styles from './PostList.module.css'

function PostList({onFinishPost, isPosting}) {
    const [body, setBody] = useState('')
    const [name, setName] = useState('')

    const changeBody = (event) => {
        setBody(event.target.value)
        console.log(event.target.value)
    }

    const changeName = (event) => {
        setName((event.target.value).length > 0 ? `- ${event.target.value}` : '')
        console.log(event.target.value)
    }

    return (
        <div>
            {isPosting && (
            <Modal onClose={onFinishPost}>
                <NewPost 
                    onBodyChange={changeBody} 
                    onNameChange={changeName} 
                />
            </Modal>
            )}
            <ul className={styles.container}>
                <Post body='Golf is the best!' name='- Jack'  />
                <Post body='React.js is awesome!' name='- Laura' />
                <Post body={body}  name={name} />
            </ul>
        </div>
    )
}

export default PostList
