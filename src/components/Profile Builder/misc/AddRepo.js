import React from 'react'
import useApp from '../../../Context/AppContext'

const AddRepo = ({ repoNumberToAdd }) => {

    const { dispatch } = useApp();

    return (
        <>
            <button
                className="btn btn-sm toprepo-add d-flex justify-content-center align-items-center"
                onClick={() => {
                    dispatch({
                        type: 'ADD_REPO',
                        payload: {
                            title: repoNumberToAdd,
                            value: "",
                        },
                    });
                }}
                type='button'
            >
                <svg
                    className="me-1"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                </svg>
            </button>
        </>
    )
}

export default AddRepo
