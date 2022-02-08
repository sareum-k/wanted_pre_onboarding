import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
    background-color: #dcdcdc;
    color: rgba(73, 73, 73, 0.5);
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    list-style: none;

    .submenu {
        padding: 10px 210px;
        margin: 0 auto;
        background-color: #B6E2D3;
    }

    .focused {
        background-color: #D8A7B1;
        color: black;
    }

    & div.desc {
        text-align: center;
    }
`;

const Desc = styled.div`
    text-align: center;
`;

export const Tab = () => {
    const [currentTab, setCurrntTab] = useState(0)

    const menuArr = [
        { name: 'Tab1', content: 'Tab menu ONE' },
        { name: 'Tab2', content: 'Tab menu TWO' },
        { name: 'Tab3', content: 'Tab menu THREE' },
    ];

    const selectMenuHandler = (index) => {
        setCurrntTab(index)
    };

    return (
        <>
            <div>
                <TabMenu>
                    {menuArr.map((el, idx) => {
                        return (
                            <li
                                key={idx}
                                onClick={() => selectMenuHandler(idx)}
                                className={idx === currentTab ? 'submenu focused' : 'submenu'}
                            >{el.name}</li>
                        );
                    })}
                </TabMenu>
                <Desc>
                    <p>{menuArr[currentTab].content}</p>
                </Desc>
            </div>
        </>
    );
};