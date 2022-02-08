import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
    color: #F38BA0;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    list-style: none;
    padding: 0;

    .submenu {
        padding: 1rem;
        width: 100%;
        margin: 0 auto;
        border-top: 1px solid #F38BA0;
        border-bottom: 1px solid #F38BA0;
    }

    .focused {
        color: white;
        background-color: #F38BA0;
    }
`;

const Desc = styled.div`
    text-align: center;
    padding: 2.5rem 0;
    font-weight: bold;
`;

export const Tab = () => {
    const [currentTab, setCurrntTab] = useState(0)

    const menuArr = [
        { name: 'Tab1', content: 'Tab1 페이지 입니다.' },
        { name: 'Tab2', content: 'Tab2 페이지 입니다.' },
        { name: 'Tab3', content: 'Tab3 페이지 입니다.' },
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