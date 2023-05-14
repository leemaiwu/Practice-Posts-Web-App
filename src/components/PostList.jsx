import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'
import styles from './PostList.module.css'

function PostList() {
    const [displayModal, setDisplayModal] = useState(true)
    const [body, setBody] = useState('')
    const [name, setName] = useState('')

    const hideModal = () => {
        setDisplayModal(false)
    }

    const changeBody = (event) => {
        setBody(event.target.value)
        console.log(event.target.value)
    }

    const changeName = (event) => {
        setName((event.target.value).length > 0 ? `- ${event.target.value}` : '')
        console.log(event.target.value)
    }

    let modalView

    return (
        <div>
            {displayModal && (
            <Modal onClose={hideModal}>
                <NewPost 
                    onBodyChange={changeBody} 
                    onNameChange={changeName} 
                />
            </Modal>
            )}
            <ul className={styles.container}>
                <Post name='- Jack' body='Golf is the best!' />
                <Post name='- Laura' body='React.js is awesome!' />
                <Post body={body}  name={name} />
            </ul>
        </div>
    )
}

export default PostList
