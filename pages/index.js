import React from "react";
// import Home from "./home";
import dynamic from "next/dynamic";

const Home = dynamic(()=>import("./home"), {
    loading: () => <div>loading...</div>
})

const App = () =>(
    <div className='App' >
        <Home />
    </div>
);

export default App;