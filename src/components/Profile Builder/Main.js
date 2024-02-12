import React, { useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import Introduction from './Form Pages/Introduction.js'
import Skills from './Form Pages/Skills.js'
import Socials from './Form Pages/Socials.js'
import Badges from './Form Pages/Badges.js'
import Support from './Form Pages/Support.js'

const Main = ({page, setpage, nextPage, previousPage}) => {

  const [previewOn, setPreviewOn] = useState(true)
  const [input, setInput] = useState("")
  // const [page, setpage] = useState(1)

  // const nextPage = () => {
  //   setpage(page => page + 1)
  // }

  // const previousPage = () => {
  //   setpage(page => page - 1)
  // }

  const changePreview = () => {
    setPreviewOn(!previewOn)
  }

  return (
    <div className="row">
      <div className="col-12 col-md-6 pe-0">
        <div className="left-content">
          <div className="headbar p-3">
            {
              page == 1 ?
                <><h3>Introduction</h3>
                  <p>Introduce yourself. Tell visitors about you and who you are.</p></>
                :
                page == 2 ?
                  <><h3>Skills</h3>
                    <p>Show off the languages, frameworks, software and tech that you use.</p></>
                  :
                  page == 3 ?
                    <><h3>Socials</h3>
                      <p>Connect with your visitors by adding links to your socials.</p></>
                    :
                    page == 4 ?
                      <><h3>Badges</h3>
                        <p>Add some badges and stats to your profile.</p></>
                      :
                      page == 5 ?
                        <><h3>Support</h3>
                          <p>Make it easy for people using your products to support you or give donations.</p></>
                        :
                        <p>This content does not exist.</p>
            }
            <div className={page == 1 ? "d-flex justify-content-end mt-3" : " d-flex justify-content-between mt-3"}>
              <button onClick={previousPage} className={page == 1 ? "btn btn-sm active-btn me-2 d-none" : "btn btn-sm active-btn me-2"} type="button">
                <i class="fa-solid fa-arrow-left me-2"></i>
                Previous
              </button>
              <button onClick={nextPage} className={page >= 5 ? "btn btn-sm active-btn me-2 d-none" : "btn btn-sm active-btn me-2"} style={{ float: 'right' }} type="button">
                Next
                <i class="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
          <div className="content p-3">
            {
              page == 1 ?
                <Introduction page={page} setpage={setpage} nextPage={nextPage} previousPage={previousPage} />
                :
                page == 2 ?
                  <Skills page={page} setpage={setpage} nextPage={nextPage} previousPage={previousPage} />
                  :
                  page == 3 ?
                    <Socials page={page} setpage={setpage} nextPage={nextPage} previousPage={previousPage} />
                    :
                    page == 4 ?
                      <Badges />
                      :
                      <Support />
            }
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 ps-0">
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
                  ul: 'ul', p: 'p'
                }} rehypePlugins={[rehypeRaw]}>{input}
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
