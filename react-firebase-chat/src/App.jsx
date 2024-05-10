import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
// import Login from './components/login/Login'
import './index.css'

function App() {
  // const user = false

  return (
    <div className='container'>
    {/* {
      user? (
        <>
        <List />
        <Chat />
        <Detail />
        </>
      ) : (<Login/>)
    } */}

        <List />
        <Chat />
        <Detail />
    </div>
  )
}

export default App
