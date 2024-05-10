import './userInfo.css'

export default function UserInfo() {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>John Doe</h2>
        </div>
        
        <div className="icons">
            <img src="./more.png" />
            <img src="./video.png" />
            <img src="./edit.png" />
        </div>
    </div>
  )
}
