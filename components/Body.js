import Link from 'next/link'

import Form from "./Styles/Header_second_line/Form";
import Menu from "./Styles/Header_second_line/Menu";
import Search from "./Styles/Header_second_line/Search";
import Input from "./Styles/Header_second_line/Input";
import Button from "./Styles/Header_second_line/Button";
import Book from "./Styles/Header_second_line/Book";
import CityMenu from "./Styles/Header_second_line/CityMenu";

function Header_second_line() {
  return (
    <Form>
        <Menu>

        </Menu>

        <Search>
            <Input placeholder='Поиск...'>
            </Input>
            <Button>
                Поиск
            </Button>
        </Search>

        <Book>
            Заказ
        </Book>

        <CityMenu>
            Город
        </CityMenu>
    </Form>
  )
}

export default Header_second_line