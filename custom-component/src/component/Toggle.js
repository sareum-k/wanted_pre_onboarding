import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
    position: relative;
    margin-top: 6rem;
    left: 48%;
    cursor: pointer;

    > .toggle-container {
        width: 50px;
        height: 24px;
        border-radius: 30px;
        background-color: #8b8b8b;
        transition: all .2s ease;
        
        &.toggle--checked {
            background-color: #F38BA0;
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
        transition: all .2s ease;
        
        &.toggle--checked {
            left: 27px;
        }
    }
`;

const Desc = styled.div`
    text-align: center;
    font-size: 16px;
    margin: 1rem;
    font-weight: bold;
`;

export const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleHandler = () => {
        setIsOn(!isOn)
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