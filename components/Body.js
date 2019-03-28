// import Link from 'next/link'

import BodyStyle from "./Styles/Body/BodyStyle";
import LeftSideMenu from "./Styles/Body/LeftSideMenu";
import Items from "./Styles/Body/Items";
import Banner from "./Styles/Body/Banner";
import Title from "./Styles/Body/Title";
import Image from "./Styles/Body/Image";


class Body extends React.Component {
  state = {
    category: false
  }
  changeCategoryField = () => {
    this.setState({
      category: !this.state.category
    })
  }
  render(){
    return (
      <BodyStyle>
          <LeftSideMenu onClick={this.changeCategoryField}>
            {this.state.category && (
              <div>asfas</div>
            )}
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