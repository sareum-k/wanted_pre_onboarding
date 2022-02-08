import { useState } from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.8);
    display: grid;
    place-items: center;
`;

const ModalContainer = styled.div`
    height: 15rem;
    text-align: center;
    margin: 6rem auto;
`;

const ModalBtn = styled.button`
    background-color: #F38BA0;
    text-decoration: none;
    border: none;
    padding: 1.1rem;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
`;

const ModalView = styled.div.attrs(props => ({
    role: 'dialog'
}))`
    border-radius: 0.5rem;
    background-color: #ffffff;
    width: 20rem;
    height: 8rem;

    > span.close-btn {
        margin-top: 0.7rem;
        cursor: pointer;
        display: inline-block;
    }
    > div.desc {
        margin-top: 2.5rem;
        color: #F38BA0;
    }
`;

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={openModalHandler}>
                    {isOpen === false ? 'Open Modal' : 'Opened'}
                </ModalBtn>
                {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
                    <ModalView onClick={(e) => e.stopPropagation()}>
                        <span onClick={openModalHandler} className='close-btn'>&times;</span>
                        <div className='desc'>프리온보딩!</div>
                    </ModalView>
                </ModalBackdrop> : null}
            </ModalContainer>
        </>
    );
};