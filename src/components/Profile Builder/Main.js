import React, { useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Main = () => {

  const [previewOn, setPreviewOn] = useState(true)
  const [input, setInput] = useState("")

  const changePreview = () => {
    setPreviewOn(!previewOn)
  }

  return (
    <div className="row">
      <div className="col-6 pe-0">
        <div className="left-content">
          <div className="headbar">

          </div>
        </div>
      </div>
      <div className="col-6 ps-0">
        <div className="right-content">
          <nav className="navbar py-3">
            <div className="container-fluid d-block">
              <button onClick={changePreview} className={previewOn ? "btn active-btn me-2" : "btn nonactive-btn me-2"} type="button">
                <i class="fa-solid fa-eye me-2"></i>
                Preview
              </button>
              <button onClick={changePreview} className={previewOn ? "btn nonactive-btn me-2" : "btn active-btn me-2"} type="button">
                <i class="fa-solid fa-pencil me-2"></i>
                Markdown
              </button>
              <button className="btn active-btn" style={{ float: 'right' }} type="button">
                <i class="fa-solid fa-copy me-2"></i>
                Copy
              </button>
            </div>
          </nav>
          <div className='content p-3'>
            {
              previewOn ?
                <Markdown className="textarea" components={{
                  ul: 'ul', p: 'p'}} rehypePlugins={[rehypeRaw]}>{input}
                </Markdown>
          :
          <textarea className="textarea" value={input} onChange={(e) => setInput(e.target.value)}>
          </textarea>
            }
        </div>

      </div>
      {/* <textarea className="textarea" /> */}
    </div>

    </div >
  )
}

export default Main
