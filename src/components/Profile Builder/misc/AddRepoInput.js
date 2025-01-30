import React, { forwardRef } from "react";
import useApp from "../../../Context/AppContext";

const AddRepoInput = forwardRef((props, ref) => {

    const { placeholder, action, type, section } = props;
    const { state, dispatch } = useApp();

    return (
        <>
            <input
                type="text"
                name={type}
                className="form-control toprepo-input"
                placeholder={placeholder}
                value={state.badges[section][type]}
                ref={ref}
                onChange={() =>
                    dispatch({
                        type: action,
                        payload: { title: type, value: ref.current.value },
                    })
                }
            />
        </>
    )
}
)

export default AddRepoInput
