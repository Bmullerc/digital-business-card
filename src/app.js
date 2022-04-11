import React from "react";
import Info from "./components/info"
import Main from "./components/main"
import Footer from "./components/footer";

export default function App () {
    return (
        <div className="true--container">
            <Info/>
            <Main/>
            <Footer/>
        </div>
    )
}