import { useState, useEffect } from 'react';
import styled from 'styled-components';

const listOptions = [
    'apple',
    'banana',
    'circle',
    'delete',
    'eve',
    'fox',
    'gift',
    'hot',
    'issue',
    'joke',
    'korea',
    'love',
    'mother',
    'name',
    'oops',
    'page',
    'queen',
    'relax',
    'save',
    'tip',
    'user',
    'view',
    'wow',
    'year',
    'zoo',
    '강사름',
    '낙엽',
    '다리미',
    '라디오',
    '마늘',
    '바지',
    '사랑',
    '아버지',
    '자두',
    '차액',
    '카센터',
    '타이어',
    '파란색',
    '하늘',
    '원티드',
    '코드스테이츠'
];

const boxShadow = '0 4px 6px rgb(32 33 36 / 10%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

export const InputContainer = styled.div`
    margin: 2rem 6rem 0 6rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    border: 1px solid #D1D1D1;
    
    border-radius: ${(props) =>
        props.text ? activeBorderRadius : inactiveBorderRadius};
    z-index: 3;
    
    box-shadow: ${(props) => (props.text ? boxShadow : 0)};
    &:focus-within {
        box-shadow: ${boxShadow};
    }

    > input {
        flex: 1 0 0;
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        outline: none;
        font-size: 16px;
    }

    > div.delete-button {
        cursor: pointer;
    }
`;

export const DropDownContainer = styled.ul`
    margin: -0.5rem 6rem 0 6rem;
    padding: 0.5rem 0;
    background-color: #ffffff;
    display: block;
    list-style-type: none;
    border: 1px solid #D1D1D1;
    border-radius: 0 0 1rem 1rem;
    box-shadow: ${boxShadow};
    z-index: 3;

    > li {
        &:hover {
            background-color: #FFBCBC;
        }

        &.selected {
            background-color: #FFBCBC;
        }
    }
`;

export const AutoComplete = () => {
    const [text, setText] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(listOptions);
    const [selected, setSelected] = useState(-1);

    useEffect(() => {
        if (inputValue === '') {
            setText(false);
        }
    }, [inputValue]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (value.includes('\\')) return;

        value ? setText(true) : setText(false);
        setInputValue(value);

        const filterRegex = new RegExp(value, 'i');
        const resultOptions = listOptions.filter((option) =>
            option.match(filterRegex)
        );
        setOptions(resultOptions);
    };

    const handleDropDownClick = (clickedOption) => {
        setInputValue(clickedOption);
        const resultOptions = listOptions.filter(
            (option) => option === clickedOption
        );
        setOptions(resultOptions);
    };

    const handleDeleteButtonClick = () => {
        setInputValue('');
    };

    const handleKeyUp = (e) => {
        if (e.getModifierState("Fn") || e.getModifierState("Hyper") || e.getModifierState("OS") || e.getModifierState("Super") || e.getModifierState("Win")) return;
        if (e.getModifierState("Control") + e.getModifierState("Alt") + e.getModifierState("Meta") > 1) return;
        if (text) {
            if (e.code === 'ArrowDown' && options.length - 1 > selected) {
                setSelected(selected + 1);
            }
            if (e.code === 'ArrowUp' && selected >= 0) {
                setSelected(selected - 1);
            }
            if (e.code === 'Enter' && selected >= 0) {
                handleDropDownClick(options[selected]);
                setSelected(-1);
            }
        }
    };

    return (
        <div className='autocomplete-wrapper' onKeyUp={handleKeyUp}>
            <InputContainer text={text}>
                <input
                    type='text'
                    className='autocomplete-input'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className='delete-button' onClick={handleDeleteButtonClick}>
                    &times;
                </div>
            </InputContainer>
            {text ? (
                <DropDown
                    options={options}
                    selected={selected}
                    handleDropDownClick={handleDropDownClick}
                />
            ) : null}
        </div>
    );
};

export const DropDown = ({ options, handleDropDownClick, selected }) => {
    return (
        <DropDownContainer>
            {options.map((option, idx) => (
                <li
                    key={idx}
                    className={selected === idx ? 'selected' : ""}
                    onClick={() => handleDropDownClick(option)}
                >
                    {option}
                </li>
            ))}
        </DropDownContainer>
    );
};