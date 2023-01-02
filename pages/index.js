import React from "react";
import Link from "next/link";
import useSWR from "swr";
import PageTitle from "../components/PageTitles";

// import MyButton from "../components/Button";

// esta função observa o focus na janela
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
    const { data, error } = useSWR("/api/get-promo", fetcher);

    return (
        
        <div>
            <PageTitle title="Home"/>
            <p className="text-center mt-8 mb-8 ">
                O restaurante X sempre busca por atender melhor seus clientes. <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião
            </p>
            <div>
                <Link className="" href="/pesquisa"></Link>
                <div className="text-center mb-8 mt-8">
                    <Link
                        href="/pesquisa"
                        className="text-white my-12 bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow-md ">
                        Dar opinião ou sugestão
                    </Link>
                </div>
                <div className="text-center">{!data && <p>Carregando...</p>}</div>
                <div className="text-center">
                    {!error && data && data.showCoupon && (
                        <p className="text-center mt-8 mb-8 ">{data.message}</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Index;
