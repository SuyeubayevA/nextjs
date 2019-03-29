import Link from 'next/link'

import {
    Form,
    Menu,
    Search,
    Input,
    Button,
    Book,
    CityMenu,
    MenuItem
} from './styles'

const Header_second_line = () => 
(
    <Form className="form">
        <Menu>
            <MenuItem>
                    Каталог товаров
            </MenuItem>

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

export default Header_second_line