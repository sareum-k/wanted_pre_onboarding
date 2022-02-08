import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  text-align: center;
`;

export const ModalBackdrop = styled.div`
  margin: 20px auto;
  background-color: #F9F1F0;
  width: 1300px;
  padding: 100px 0px;
  border-radius: 10px;
  text-align: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 15px;
  color: white;
  border-radius: 15px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
    // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
    role: 'dialog'
}))`
  background-color: #F8AFA6;
  border-radius: 5px;
  width: 250px;
  padding: 35px 0px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
`;

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen) //true면 다시 클릭 시 화면 사라짐이 구현되지 않음
    };

    return (
        <>
            <ModalContainer>
                <ModalBtn onClick={openModalHandler}>
                    {isOpen === false ? "open Modal" : "opend!"}
                </ModalBtn>

                {isOpen === false ? null :
                    <ModalBackdrop onClick={openModalHandler}>
                        <ModalView>HELLO CODESTATES!</ModalView>
                    </ModalBackdrop>}
            </ModalContainer>
        </>
    );
};