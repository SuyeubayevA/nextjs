import styled from 'styled-components'

const Book =  styled.button `
    height: 30px;
    box-sizing: border-box;
    border: none;
    background-color: Transparent;
    margin-top:5px;
    border-radius: 10px;
    color: #3572b2;
    padding: 0 20px;
    font-size:13px;
    cursor: pointer;

    :hover {
        background-color: #3572b2;
        color: white;
    }
`;

export default Book