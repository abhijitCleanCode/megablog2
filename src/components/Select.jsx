import React, { useId } from 'react'

function Select({
    options = [],
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (

        <div className="w-full">
            {label && <label htmlFor={id}>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={``}
            >
                {   // It is possible that options has no value so, we are looping optionally
                    options?.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default React.forwardRef(Select);