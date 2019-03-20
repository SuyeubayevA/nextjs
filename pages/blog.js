import React, {Component} from "react";
import Link from "next/link";

export default () => (
    <div>
        <h1>Hello, from blog page</h1>
    <br/>
    <Link href="./home">
        <a>Go back!</a>
    </Link>
    </div>
)