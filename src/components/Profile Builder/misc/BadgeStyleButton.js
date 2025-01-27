import React from 'react'
import useApp from '../../../Context/AppContext';

const BadgeStyleButton = ({
    badgeText,
    handleStyleBadge,
    badgeKeyToStyle,
    badgeKeyToHide,
    colorList,
    badgesShowing,
    handleChangeBadgeColor,
}) => {

    const { state } = useApp();

    return (
        <>
            <article className="badgeStyleButton d-flex flex-column">
                <button
                    onClick={handleStyleBadge}
                    name={badgeKeyToHide}
                    type='button'
                    className='btn btn-sm'
                // disabled={!badgesShowing}
                >
                    <div className="d-flex">
                        <div
                            className="rounded me-2"
                            style={{ width: '20px', height: '20px', backgroundColor: '#' + state.badges.cardStyle[badgeKeyToStyle] }}
                        >
                            &nbsp;
                        </div>
                        <span
                            className={`d-flex justify-content-start ${state.theme === "dark"
                                ? "text-white"
                                : "text-dark"
                                }`}
                        >
                            {badgeText}
                        </span>
                        <div
                            className={`d-flex ms-auto text-xs transition-all ${state.badges.cardStyle[badgeKeyToHide]
                                ? "stylebadgetext opacity-100"
                                : "stylebadgetext-mute"
                                }`}
                        >
                            <svg
                                className="me-2"
                                style={{ width: '18px', height: '18px' }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                ></path>
                            </svg>
                            Edit
                        </div>
                    </div>
                </button>

                <div
                    className={`color-selector gap-2 w-100 p-3 rounded-bottom ${state.badges.cardStyle[badgeKeyToHide] ? "d-flex flex-wrap" : "d-none"
                        }`}
                >
                    {colorList.map((color) => {
                        return (
                            <button
                                key={color.hex}
                                type='button'
                                className="rounded color-display overflow-hidden"
                                style={{ width: '20px', height: '20px', backgroundColor: '#' + color.hex }}
                                name={badgeKeyToStyle}
                                onClick={(e) => {
                                    handleChangeBadgeColor(e, badgeKeyToHide, color);
                                }}
                            ></button>
                        );
                    })}
                </div>
            </article>

        </>
    )
}

export default BadgeStyleButton
