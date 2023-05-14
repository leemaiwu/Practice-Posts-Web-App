import styles from './NewPost.module.css'
import { useState } from "react"

function NewPost({onBodyChange, onNameChange}) {

    return (
        <form className={styles.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={onBodyChange} />
            </p>
            <p>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' required onChange={onNameChange} />
            </p>
        </form>
    )
}

export default NewPost
