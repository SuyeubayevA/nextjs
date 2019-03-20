import React from "react";
// import Home from "./home";
import dynamic from "next/dynamic";

const Home = dynamic(()=>import("./home"), {
    loading: () => <div>loading...</div>
})

const App = () =>(
    <React.Fragment>
        <Home />
    </React.Fragment>
);

export default App;