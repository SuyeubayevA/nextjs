import React, {Component} from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Header_second_line from "../components/Header_second_line";

class Home extends Component{
    render() {
        return (
            <div>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                </Head>
                <Header/>
                <Header_second_line/>

                
            </div>
        );
    }
}

export default Home;