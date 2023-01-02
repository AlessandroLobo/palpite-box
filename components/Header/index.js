import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className="container mx-auto ">
                    <img
                        src="./logo_palpitebox.png"
                        alt="PalpiteBox"
                        className="mx-auto"
                    />
                </div>
            </div>
            <div className="bg-gray-400 p-4 shadow-lg text-center">
                {" "}
                <Link href="/" className=" hover:underline px-4">
                    Home
                </Link>
                <Link href="/sobre" className=" hover:underline px-4">
                    Sobre
                </Link>
                <Link href="/contato" className=" hover:underline px-4">
                    Contato
                </Link>
                <Link href="/pesquisa" className=" hover:underline px-4">
                    Pesquisa
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Header;
