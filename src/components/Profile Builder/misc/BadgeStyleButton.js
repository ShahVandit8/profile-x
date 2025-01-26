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
            {/* <article className="d-flex flex-column">
                <button
                    onClick={handleStyleBadge}
                    name={badgeKeyToHide}
                    // disabled={!badgesShowing}
                    className={`btn btn-sm btn-secondary ${!badgesShowing ? "disabled opacity-50" : ""} ${state.badges.cardStyle[badgeKeyToHide] ? "bg-light" : "bg-light opacity-50"
                        }`}
                >
                    <div className="d-flex align-items-center w-100">
                        <div
                            className={`rounded-sm me-2 w-5 h-5 bg-${state.badges.cardStyle[badgeKeyToStyle]}`}
                        >
                            &nbsp;
                        </div>
                        <span
                            className={`d-flex justify-content-start text-xs transition-all ${state.badges.cardStyle[badgeKeyToHide] ? "text-dark" : "text-muted"
                                }`}
                        >
                            {badgeText}
                        </span>
                        <div
                            className={`d-flex ms-auto text-xs fw-semibold text-white transition-all ${state.badges.cardStyle[badgeKeyToHide] ? "text-dark opacity-100" : "text-muted opacity-50"
                                } ${badgesShowing ? "opacity-100" : ""}`}
                        >
                            <svg
                                className={`w-4 h-4 me-2 text-white ${state.badges.cardStyle[badgeKeyToHide] ? "text-dark opacity-100" : "text-muted opacity-50"
                                    } ${badgesShowing ? "opacity-100" : ""}`}
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
                    className={`gap-1 border-bottom border-start border-end w-100 p-4 transition-all rounded-bottom ${state.badges.cardStyle[badgeKeyToHide] ? "d-flex flex-wrap" : "d-none"
                        }`}
                >
                    {colorList.map((color) => {
                        return (
                            <button
                                key={color.hex}
                                className={`w-5 h-5 border border-light rounded-sm overflow-hidden ${color.bgColor}`}
                                name={badgeKeyToStyle}
                                onClick={(e) => {
                                    handleChangeBadgeColor(e, badgeKeyToHide, color);
                                }}
                            ></button>
                        );
                    })}
                </div>
            </article> */}

            <article className="d-flex flex-column">
                <button
                    onClick={handleStyleBadge}
                    name={badgeKeyToHide}
                    // disabled={!badgesShowing}
                    className={`btn btn-sm btn-secondary text-start group ${badgesShowing
                            ? "disabled opacity-50 pointer-events-none"
                            : ""
                        } ${state.badges.cardStyle[badgeKeyToHide]
                            ? "bg-light text-dark"
                            : "bg-light opacity-50 text-dark"
                        }`}
                >
                    <div className="d-flex align-items-center w-100 group">
                        <div
                            className="rounded me-2"
                            style={{ width: '20px', height: '20px', backgroundColor: state.badges.cardStyle[badgeKeyToStyle] }}
                        >
                            &nbsp;
                        </div>
                        <span
                            className={`d-flex justify-content-start text-muted text-xs transition-all ${state.badges.cardStyle[badgeKeyToHide]
                                    ? "text-dark"
                                    : "text-muted group-hover text-dark"
                                }`}
                        >
                            {badgeText}
                        </span>
                        <div
                            className={`d-flex ms-auto text-xs fw-bold text-muted transition-all ${state.badges.cardStyle[badgeKeyToHide]
                                    ? "text-dark opacity-100"
                                    : "text-muted opacity-50"
                                } ${badgesShowing ? "group-hover opacity-100" : ""}`}
                        >
                            <svg
                                className="me-2"
                                style={{ width: '16px', height: '16px' }}
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
                    className={`gap-2 border border-light w-100 p-3 transition-all rounded-bottom ${state.badges.cardStyle[badgeKeyToHide] ? "d-flex flex-wrap" : "d-none"
                        }`}
                >
                    {colorList.map((color) => {
                        return (
                            <button
                                key={color.hex}
                                className="rounded border border-light overflow-hidden"
                                style={{ width: '20px', height: '20px', backgroundColor: color.bgColor }}
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
