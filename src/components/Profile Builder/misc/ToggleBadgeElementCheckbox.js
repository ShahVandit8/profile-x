import React from 'react'
import useApp from '../../../Context/AppContext'

const ToggleBadgeElementCheckbox = ({
    badgeType,
    badgeText,
    handleBadgeElementToggle,
    badgeKeyToHide,
}) => {

    const { state } = useApp();

    return (
        <>
            <label
                className={`badge-checkbox ${state.badges[badgeType][badgeKeyToHide] ? "active" : ""
                    }`}
            >
                <input
                    type="checkbox"
                    name={badgeKeyToHide}
                    value={state.badges[badgeType][badgeKeyToHide]}
                    onChange={handleBadgeElementToggle}
                    checked={state.badges[badgeType][badgeKeyToHide]}
                    className='checkbox-element'
                />
                <span className='text-capitalize'>{badgeText}</span>
            </label>
        </>
    )
}

export default ToggleBadgeElementCheckbox
