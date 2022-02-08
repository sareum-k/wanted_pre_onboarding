import { useState } from 'react';
import styled from 'styled-components';

export const TagsInput = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 6rem auto;
    width: 40rem;
    padding: 0 0.7rem;
    border: 1px solid #FFBCBC;
    border-radius: 0.3rem;

    > ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0.5rem 0 0 0;

        > .tag {
            display: flex;
            align-items: center;
            justify-content: center;
            width: auto;
            height: 2rem;
            color: #ffffff;
            padding: 0 0.5rem;
            font-size: 0.9rem;
            list-style: none;
            border-radius: 0.4rem;
            margin: 0 0.5rem 0.5rem 0;
            background: #F38BA0;
        
            > .tag-close-icon {
                width: 1rem;
                height: 1rem;
                display: block;
                line-height: 1rem;
                text-align: center;
                font-size: 0.8rem;
                margin-left: 0.3rem;
                color: black;
                border-radius: 50%;
                background: #ffffff;
                cursor: pointer;
                font-weight: bold;
            }
        }
    }

    > input {    
        border: none;
        height: 3rem;
        font-size: 0.9rem;

        :focus {
        outline: transparent;
        }
    }

    &:focus-within {
        border: 2px solid #F38BA0;
    }
`;

export const Tag = () => {
    const initialTags = ['Pre_onboarding', 'Sareum Kang'];

    const [tags, setTags] = useState(initialTags);

    const removeTags = (idxToRemove) => {
        setTags(tags.filter((el) => el !== tags[idxToRemove]))
    };

    const addTags = (e) => {
        if (tags.indexOf(e.target.value) === -1 && e.target.value !== '') {
            setTags([...tags, e.target.value])
            e.target.value = ''
        } else if (tags.indexOf(e.target.value) !== -1) {
            alert('이미 존재하는 태그입니다.')
            e.target.value = ''
        }
    }

    return (
        <>
            <TagsInput>
                <ul className='tags'>
                    {tags.map((tag, idx) => (
                        <li
                            key={idx}
                            className='tag'
                        >
                            <span className='tag-title'>{tag}</span>
                            <span
                                className='tag-close-icon'
                                onClick={() => { removeTags(idx) }}
                            >&times;</span>
                        </li>
                    ))}
                </ul>
                <input
                    className='input'
                    type='text'
                    onKeyUp={(e) => e.key === "Enter" ? addTags(e) : null}
                    placeholder='Press enter to add tags'
                />
            </TagsInput>
        </>
    );
};