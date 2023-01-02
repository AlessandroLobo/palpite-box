import React from "react";
import Link from "next/link";
import Index from "./index";
import PageTitle from "../components/PageTitles";
const Sobre = () => {
    return (

        <div>
            <PageTitle title='Sobre' />
            <h1>Sobre</h1>
            <div>
                <Link href="/">Home</Link>
            </div>
        </div>
    );
};
export default Sobre;
