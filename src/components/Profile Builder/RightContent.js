import React, { forwardRef } from 'react'
import useApp from '../../Context/AppContext';
import Preview from './Preview';
import RenderedMarkdown from './RenderedMarkdown';

const RightContent = forwardRef(({
    copyMarkdown,
    copyStatus
}, ref) => {

    const { state, dispatch } = useApp();
    const { renderedMarkdownRef, previewRef } = ref;

    return (
        <div>
            <div className="right-content">
                <nav className="navbar py-3">
                    <div className="container-fluid d-block">
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "SELECT_RENDER_MODE",
                                    payload: "preview",
                                });
                            }}
                            className={state.renderMode === "preview" ? "btn btn-sm active-btn me-2" : "btn btn-sm nonactive-btn me-2"} type="button">
                            <i class="fa-solid fa-eye me-2"></i>
                            Preview
                        </button>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "SELECT_RENDER_MODE",
                                    payload: "markdown",
                                });
                            }}
                            className={state.renderMode === "markdown" ? "btn btn-sm active-btn me-2" : "btn btn-sm nonactive-btn me-2"} type="button">
                            <i class="fa-solid fa-code me-2"></i>
                            Raw
                        </button>
                        <button className="btn btn-sm nonactive-btn" style={{ float: 'right' }} type="button"
                            onClick={() => {
                                const markdown = new Promise((resolve, reject) => {
                                    resolve(dispatch({
                                        type: "SELECT_RENDER_MODE",
                                        payload: "markdown",
                                    }))
                                })
                                markdown.then(() => {
                                    copyMarkdown(renderedMarkdownRef.current.innerText);
                                })
                            }
                            }
                        >
                            <i class="fa-solid fa-copy me-2"></i>
                            {copyStatus}
                        </button>
                    </div>
                </nav>
                <div className='content p-3'>
                    {
                        state.renderMode === "preview" ?
                            <Preview ref={previewRef} />
                            :
                            <RenderedMarkdown ref={renderedMarkdownRef} />
                    }
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
);

export default RightContent
