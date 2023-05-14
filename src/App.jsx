import Post from "./components/Post"

function App() {
  return (
      <main>
        <h1>Hello World!</h1>
        <div className="container">
          <Post name='- Jack' body='Golf is the best!' />
          <Post name='- Laura' body='React.js is awesome!' />
        </div>
      </main>
  )
}

export default App
