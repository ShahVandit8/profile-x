import React from 'react'
import useApp from '../../../Context/AppContext'

const DeleteRepo = ({ type }) => {

    const { dispatch } = useApp();

    return (
        <>
            <button
                className="btn btn-sm btn-secondary px-2 d-flex align-items-center"
                onClick={() =>
                    dispatch({
                        type: "DELETE_REPO",
                        payload: {
                            title: type,
                            value: null,
                        },
                    })
                }
                type='button'
            >
                <svg
                    className="icon-hover"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </button>

        </>
    )
}

export default DeleteRepo
