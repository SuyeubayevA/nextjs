// import Link from 'next/link'

import {
  BodyStyle,
  LeftSideMenu,
  Items,
  Banner,
  Title,
  Image,
  MenuTitle,
  MenuTitleItem,
  MenuLi,
  MenuUl,
  MenuLiF
} from './styles'

class Body extends React.Component {

  constructor(){
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };
  
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }
  render(){
    return (
      <BodyStyle>
          <LeftSideMenu>
          <MenuTitle onClick={this.showDropdownMenu}>АКЦИИ И ПРЕДЛОЖЕНИЯ</MenuTitle>
            {this.state.displayMenu ? (
              <MenuUl>
                <MenuLiF>ТЕЛЕФОНЫ И АКСЕССУАРЫ</MenuLiF>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLiF>ТЕЛЕФОНЫ И АКСЕССУАРЫ</MenuLiF>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLiF>ТЕЛЕФОНЫ И АКСЕССУАРЫ</MenuLiF>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
                <MenuLi>Смартфоны</MenuLi>
              </MenuUl>
            ):
            (
              null
            )
            }
          </LeftSideMenu>
          <Items>
            <Banner>
              <Title>
                ЭЛЕКТРОНИКА
              </Title>
              <Image>
                Apple AirPods <br></br>
                со скидкой 25%
              </Image>
            </Banner>
          </Items>
      </BodyStyle>
    )
  }
}

export default Body