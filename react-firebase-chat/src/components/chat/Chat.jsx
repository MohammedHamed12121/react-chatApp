import {useEffect, useState, useRef} from 'react'
import EmojiPicker from 'emoji-picker-react'
import './chat.css'

export default function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState("")

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  },[])

  const handleEmoji = e => {
    setText( prev => prev + e.emoji)
    setOpenEmoji(false)
  }

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img  src='./avatar.png' alt='' />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>lorm ipsum dolar</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt='' />
          <img src='./video.png' alt='' />
          <img src='./info.png' alt='' />
        </div>
      </div>

      <div className='center'>
        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <p>
              Lorem ipsum dolar setOpenEmoji si ajfajfjle  ajgaejga; gjejg aeg; egj aiejg dajnbabdnanba aj aj;f eafjae jfaejgajo df.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='icons'>
          <img src='./img.png' alt='' />
          <img src='./camera.png' alt='' />
          <img src='./mic.png' alt='' />
        </div>
        <input type='text' 
          placeholder='Type a message ...' 
          onChange={(e) => setText(e.target.value)}
          value={text}
          />
        <div className='emoji'>
          <img src='./emoji.png' alt='' onClick={() => setOpenEmoji(prev => !prev)}/>
          <div className='picker'>
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}
