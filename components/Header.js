import Link from 'next/link'

import HeaderStyle from "./Styles/Header/HeaderStyle";
import HeaderLink from "./Styles/Header/HeaderLink";
import HeaderSection from "./Styles/Header/HeaderSection";
import HeaderItem from "./Styles/Header/HeaderItem";

function Header() {
  return (
      <HeaderStyle>
            <HeaderSection>
                <HeaderItem>
                    <Link href="/">
                         Logo
                    </Link>
                </HeaderItem>
                <HeaderItem>
                    <Link href="/">
                    <HeaderLink>ФИНАНСЫ</HeaderLink>
                    </Link>
                </HeaderItem>
                <HeaderItem>
                    <Link href="/">
                        <HeaderLink>МАГАЗИН</HeaderLink>
                    </Link>
                </HeaderItem>
                <HeaderItem>
                    <Link href="/">
                        <HeaderLink>УСЛУГИ</HeaderLink>
                    </Link>
                </HeaderItem>
                <HeaderItem>
                    <Link href="/">
                        <HeaderLink>ЕДА</HeaderLink>
                    </Link>
                </HeaderItem>
                <HeaderItem>
                    <Link href="/">
                        <HeaderLink>ЖУРНАЛ</HeaderLink>
                    </Link>
                </HeaderItem>
            </HeaderSection>
            <HeaderSection>
                <HeaderItem>
                    <Link href="/">
                        <HeaderLink>Избранное</HeaderLink>
                    </Link>
                </HeaderItem>
                <HeaderItem>
                    <Link href="/">
                        <HeaderLink>Профиль</HeaderLink>
                    </Link>
                </HeaderItem>
                <HeaderItem>
                    <Link href="/">
                        <HeaderLink>Корзина</HeaderLink>
                    </Link>
                </HeaderItem>
            </HeaderSection>
            
    </HeaderStyle>
  )
}

export default Header