import React from 'react'
import useApp from '../../../Context/AppContext';

const BadgeCheckboxButton = ({
    badgeType,
    badgeText,
    profileLink,
    handleBadgeToggle,
}) => {

    const { state, dispatch } = useApp();

    return (
        <>
            <label
                className={`btn btn-md badgetoggle ${!state.socials[profileLink].linkSuffix.length > 0
                        ? "disabled-label"
                        : "enabled-label"
                    } ${state.badges[badgeType].selected ? "selected-badge" : ""}`}
            >
                <input
                    type="checkbox"
                    name={badgeType}
                    value={state.badges[badgeType].selected}
                    onChange={handleBadgeToggle}
                    className="custom-checkbox"
                    checked={state.badges[badgeType].selected}
                    disabled={!state.socials[profileLink].linkSuffix.length > 0}
                />
                <span className={`${state.badges[badgeType].selected ? "selected-text" : "badge-text"}`}>
                    {badgeText}
                </span>
            </label>
        </>
    )
}

export default BadgeCheckboxButton
