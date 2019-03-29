import styled from 'styled-components'

export const Book =  styled.button.attrs({className: "Book"})
`
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

export const Button = styled.button.attrs({className: "Button"})
`
    background: #3572b2;
    width:20%;
    border: none;
    border-radius: 0 5px 5px 0;
    color: white;
`;

export const CityMenu =  styled.button.attrs({className: "CityMenu"})
`
    height: 30px;
    box-sizing: border-box;
    border: none;
    background-color: Transparent;
    margin-top:5px;
    border-radius: 10px;
    color: #3572b2;
    font-size:13px;
    padding: 0 20px;
    cursor: pointer;

    :hover {
        background-color: #3572b2;
        color: white;
    }
`;

export const Form = styled.div.attrs({className: "Form"})
`
    display: flex;
    background: white;
    box-sizing: border-box;
    /* width: 1100px; */
    height: 50px;
    justify-content:center;
    margin:0 auto;
    padding:7px 30px; 
`;

export const Input = styled.input.attrs({
    type: "text" , className: "Input"
})`
    margin: 0;
    width: 80%;
    border-radius: 5px 0 0 5px;
`;

export const Menu = styled.button.attrs({className: "Menu"})
`
    border-radius: 5px;
    background: #3572b2;
    width: 150px;
    margin-right: 10px;
    border: none;
`;

export const MenuItem = styled.div.attrs({className: "MenuItem"})
`
    padding:0;
    border-radius: 5px;
    color: white;
`;

export const Search = styled.div.attrs({className: "Search"})
`
    @extend %center;
    position:relative;
    display: flex;
    width: 60%;
    border-radius: 5px;
    padding: 0 10px;
`;