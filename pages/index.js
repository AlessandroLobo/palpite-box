import React from "react";
import Link from "next/link";
import MyButton from "../components/Button";

const Index = () => {
  return (
    <div>
      
      <p className="text-center mt-8 mb-8 ">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião
      </p>
      <div>
        <Link className="" href="/pesquisa"></Link>
        <div className="text-center mb-8 mt-8">
          <Link
            href="/pesquisa"
            className=" 
            text-white           
          my-12
          bg-blue-400 
          px-6 
          py-4 
          font-bold 
          rounded-lg
          shadow-lg
          hover:shadow-md
           "
          >
            Dar opinião ou sugestão
          </Link>
        </div>
        <p className="text-center mt-8 mb-8 ">Mensagem do desconto</p>
      </div>
    </div>
  );
};

export default Index;
