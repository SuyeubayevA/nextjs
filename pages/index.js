import React from "react";
// import Home from "./home";
import dynamic from "next/dynamic";

const Home = dynamic(()=>import("./home"), {
    loading: () => <div>loading...</div>
})

const App = () =>(
    <div className='a2' style={{ background: 'red' }} >
        <Home />
    </div>
);

export default App;