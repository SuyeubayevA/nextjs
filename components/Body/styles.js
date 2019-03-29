import styled from "styled-components"

export const BodyStyle = styled.div.attrs({className: "BodyStyle"})
`
    display: flex;
    background: #f2f3f4;
    box-sizing: border-box;
    justify-content:center;
    margin:0 auto;
    padding:7px 30px; 
    /* padding:0 110px; */
`;

//// LEFT SIDE DROP DOWN MENU
export const LeftSideMenu = styled.div.attrs({className: "LeftSideMenu"})
`
    font-family: "Roboto", sans-serif;
    margin-top: 50px;
    margin-right: 30px;
    width: 250px;
    border: solid 1px;
    border-radius: 10px;
    position: relative;
    display: inline-block;
    
`;

export const MenuTitle = styled.div.attrs({className: "MenuTitle"})
`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #3572b2;
    font-weight: bold;
    width:178px;
    height:18px;
    background-color:#ff3232 ;
    padding:12px;
    border-radius:5px;

  
`;


export const MenuUl = styled.ul.attrs({className: "MenuUl"})
`
    list-style-type: none;
    margin: 0;
    padding: 0;
    top:45px;
    right:0px;
    width: 100%;
    background-color: white;
    font-weight:bold;
    position: absolute;

    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

export const MenuLiF = styled.li.attrs({className: "MenuLiF"})
`
    margin-top:10px;
    padding: 10px 16px;

`;

export const MenuLi = styled.li.attrs({className: "MenuLi"})
`
    padding: 16px 20px;
    font-size: 14px;
    color: #bec3c6;

    &:hover {
        background-color: #e5e5e5;
        color: white;
    }

    &:last-child{
        border-bottom-left-radius: 10px 10px;
        border-bottom-right-radius: 10px 10px;
    }
`;

//// RIGHT SIDE BODY
export const Items = styled.div.attrs({className: "Items"})
`
    height: 1500px;
    width: 650px;
    margin-top: 50px;
    border-radius:10px;
`;

export const Banner = styled.div.attrs({className: "Banner"})
`
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 100%;
`;

export const Title = styled.div.attrs({className: "Title"})
`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 25px;
    margin: 20px;
`;

export const Image = styled.div.attrs({className: "Image"})
`
    box-sizing:border-box;
    height: 200px;
    width: 100%;
    border-radius: 10px;
    font-size:25px;
    font-family: 'Roboto', sans-serif;
    background: gray;
    color: white;
    padding: 25px;
`;
