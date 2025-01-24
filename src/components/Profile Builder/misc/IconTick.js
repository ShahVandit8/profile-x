import React from "react";

const ExtraSmallTick = () => {
    return (
        <svg
            className="w-4 h-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="10" r="9" fill="#ADB4D7" stroke="white" stroke-width="2" />
            <path
                fill="white"
                fill-rule="evenodd"
                d="M13.707 8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
            />
        </svg>
    );
};

export default ExtraSmallTick;
