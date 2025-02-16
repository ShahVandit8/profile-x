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
                    <div className="container-fluid right-section-navbar">
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "SELECT_RENDER_MODE",
                                    payload: "preview",
                                });
                            }}
                            className={state.renderMode === "preview" ? "btn btn-sm active-btn me-2" : "btn btn-sm nonactive-btn me-2"} type="button">
                            <i class="bx bx-window-open me-2"></i>
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
                            <i class="lni lni-markdown me-2"></i>
                            Markdown
                        </button>
                        <button className="btn btn-sm right-nav-btn nonactive-btn" style={{ float: 'right' }} type="button"
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
                            <i class="lni lni-clipboard me-2"></i>
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
