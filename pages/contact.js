import React, {Component} from "react";
import Link from "next/link";

class Contact extends Component {
    render(){
        return(
            <div>
                <h1>Hello from contact page</h1>
                <br/>
            <Link href="./home">
                <a>Go back!</a>
            </Link>
            </div>
        );
    }
}

export default Contact