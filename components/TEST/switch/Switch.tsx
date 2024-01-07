import React from 'react';
import s from './index.module.css'

type Props = {
    isOn: boolean
    handleToggle: any
    colorOne: string
    colorTwo: string
    disable: boolean
}


const Switch = ({ isOn, handleToggle, colorOne, colorTwo, disable }:Props) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={s.switchCheckbox}
                id={'switch'}
                type="checkbox"
                disabled={disable}
            />
            <label
                style={{ background: isOn ? colorOne : colorTwo }}
                className={s.switchLabel}
                htmlFor={`switch`}
            >
                <span className={s.switchButton} />
            </label>
        </>
    );
};

export default Switch