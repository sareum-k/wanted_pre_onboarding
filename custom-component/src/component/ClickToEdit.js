import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

export const InputBox = styled.div`
    text-align: center;
    display: inline-block;
    width: 9rem;
    height: 1.5rem;
    border: 1px solid #D1D1D1;
    border-radius: 0.3rem;
    margin-left: 1rem;
    margin-right: 1rem;
`;

export const InputEdit = styled.input`
    text-align: center;
    display: inline-block;
    width: 9rem;
    height: 1.5rem;
`;

export const InputView = styled.div`
    text-align: center;
    align-items: center;
    margin-top: 3rem;

    >label {
        font-weight: bold;
    }
    
    div.view {
        margin-top: 3rem;
    }
`;

export const MyInput = ({ value, handleValueChange }) => {
    const inputEl = useRef(null);
    const [editMode, setEditMode] = useState(false);
    const [newValue, setNewValue] = useState(value);

    useEffect(() => {
        if (editMode) {
            inputEl.current.focus();
        }
    }, [editMode]);

    const handleClick = () => {
        setEditMode(!editMode);
    };

    const handleBlur = () => {
        setEditMode(false);
        handleValueChange(newValue);
    };

    const handleInputChange = (e) => {
        setNewValue(e.target.value);
    };

    return (
        <InputBox>
            {editMode ? (
                <InputEdit
                    type='text'
                    value={value}
                    ref={inputEl}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                />
            ) : (
                <span onClick={handleClick}>{value}</span>
            )}
        </InputBox>
    );
};

const initialInfo = {
    name: '강사름',
    age: 20
};

export const ClickToEdit = () => {
    const [name, setName] = useState(initialInfo.name);
    const [age, setAge] = useState(initialInfo.age);

    return (
        <>
            <InputView>
                <label>이름</label>
                <MyInput value={name} handleValueChange={(value) => setName(value)} />
                <label>나이</label>
                <MyInput value={age} handleValueChange={(value) => setAge(value)} />
            </InputView>
            <InputView>
                <div className='view'>제 이름은 {name}이고 나이 {age}입니다.</div>
            </InputView>
        </>
    );
};