import styled from 'styled-components'

export const HeaderStyle =  styled.nav.attrs({className: "HeaderStyle"})
`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 50px;
    background: #3572b2;
    color: #fff;
    font-size: 10px;
    margin:0;
    padding:0 100px;
`;


export const HeaderSection = styled.div.attrs({className: "HeaderSection"})
`
    display:flex;
    align-items:center;
`;


export const HeaderLink =  styled.button.attrs({className: "HeaderLink"})
`
    height: 30px;
    width: 100px;
    box-sizing: border-box;
    border: none;
    background-color: Transparent;
    margin-top:5px;
    border-radius: 15px;
    color: #fff;
    font-size:13px;
    cursor: pointer;

    :hover {
        background-color: white;
        color: #3572b2;
    }
`;


export const HeaderItem =  styled.div.attrs({className: "HeaderItem"})
`
    font-size: 20px;
    margin-left: 5px;
`;