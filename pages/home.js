import React, {Component} from "react";
// import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header/index";
import Header_second_line from "../components/Header_second_line/index";
import Body from "../components/Body/index";

import MainBG from "../components/Styles/Main/MainBG";

class Home extends Component{
    render() {
        return (
            <MainBG>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                </Head>
                <Header/>
                <Header_second_line/>
                <Body/>
            </MainBG>
        );
    }
}

export default Home;