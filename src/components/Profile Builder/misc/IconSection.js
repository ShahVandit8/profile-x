import React from 'react';
import { iconData } from '../../../Reducer/appReducer';
import useApp from '../../../Context/AppContext';
import IconTick from './IconTick';

const IconSection = ({ title, iconType }) => {

    const { state, dispatch } = useApp()

    const handleIconSelect = (iconCategory, iconObj, i) => {
        const currentIndex = Object.keys(state.skills).reduce(
            (length, iconCategory) => length + state.skills[iconCategory].length,
            0
        );
        const isIconAlreadySelectedIndex = state.skills[iconCategory].findIndex(
            (item) => item.name === iconObj.name
        );

        if (isIconAlreadySelectedIndex >= 0) {
            dispatch({
                type: 'REMOVE_SKILL',
                payload: {
                    type: iconCategory,
                    icon: iconObj,
                },
            });
        } else {
            dispatch({
                type: 'ADD_SKILL',
                payload: {
                    type: iconCategory,
                    icon: iconObj,
                    position: currentIndex,
                },
            });
        }
    };

    return (
        <>
            <div className="skill-group">
                <p>💻 {title}</p>
                <div className="skills">
                    {iconData[iconType].map((icon, index) => {
                        return (
                            <button
                                key={index}
                                className="skill-button"
                                type='button'
                                onClick={() => handleIconSelect(iconType, icon, index)}
                            >
                                <i className={`skill-icon ${icon.iTag} ${state.skills[iconType].some((item) => item.name === icon.name)
                                        ? "colored"
                                        : ""
                                    }`}></i>
                                <span className="tooltip">{icon.name}</span>
                                {state.skills[iconType].some(
                                    (item) => item.name === icon.name
                                ) ? (
                                    <span className="tick-icon">
                                        <IconTick />
                                    </span>
                                ) : null}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default IconSection;