import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    position: relative;
    margin-top: 8rem;
    left: 48%;
    cursor: pointer;

    > .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: #8b8b8b;
        transition: all .2s ease;
        
        &.toggle--checked {
            background-color: #4000c7;
        }
    }

    > .toggle-circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #ffffff;
        transition: all .25s ease;
        
        &.toggle--checked {
            left: 27px;
        }
    }
`;

const Desc = styled.div`
    text-align: center;
    font-size: 16px;
    margin: 10px;
    font-weight: bold;
`;

export const Toggle = () => {
    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
        setisOn(!isOn)
    };

    return (
        <>
            <ToggleContainer onClick={toggleHandler}>
                <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
                <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
            </ToggleContainer>
            <Desc>
                {isOn === false ? "Toggle Switch OFF" : "Toggle Switch ON"}
            </Desc>
        </>
    );
};