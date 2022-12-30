import React from "react";
import Link from "next/link";

const Pesquisa = () => {
  return (
    <div className="pt-6">
      <h1 className="text-center font-bold my-4 text-2xl">
        Críticas e sugestões
      </h1>
      <p className="text-center mb-6">
        O restaurante X sempre busca por atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      <form className="w-80   mx-auto">
        <label className="font-bold block mb-2">Seu nome:</label>
        <input
          type="text"
          className="w-80 p-4 block shadow bg-blue-100 my-2 rounded"
          placeholder="Nome"
          name="Nome"
        />
        <label className="font-bold block mb-2">E-mail:</label>
        <input
          type="text"
          className="w-80 p-4 block shadow bg-blue-100 my-2 rounded"
          placeholder="Email"
          name="Email"
        />
        <label className="font-bold block mb-2">WhatsApp:</label>
        <input
          type="text"
          className="w-80 p-4 block shadow bg-blue-100 my-2 rounded"
          placeholder="WhatsApp"
          name="WhatsApp"
        />
        <label className="font-bold block mb-2">Nota:</label>
        <div className="flex py-6"></div>
        <button className="w-80 bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow">
          Salvar
        </button>
      </form>

      <div className="w-80  mx-auto">
        <p className="w-80 mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
          Obrigado por contribuir com sua sugestão ou crítica.
        </p>

        <div className=" w-80 text-center border p-4 mb-4">
          Seu cupom: <br />
          <span className="font-bold text-2xl"></span>
        </div>

        <div className="text-center border p-4 mb-4">
          <span className="font-bold block mb-2"></span>
          <br />
          <span className=" text-center italic">
            Tire um print ou foto desta tela e apresente ao garçon.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pesquisa;
