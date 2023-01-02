import React, { useState } from "react";
import Head from "next/head";
import PageTitle from "../components/PageTitles";

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: "",
        Email: "",
        Whatsapp: "",
        Nota: 0,
    });
    const notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSuccess] = useState(false);
    const [retorno, setRetorno] = useState({});
    const save = async () => {

        try {
            const response = await fetch("/api/save", {
                method: "POST",
                body: JSON.stringify(form),
            });
            const data = await response.json();
            setSuccess(true);
            setRetorno(data);
        } catch (err) { }
    };
//teste
    const onChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.name;
        setForm((old) => ({
            ...old,
            [key]: value,
        }));
    };

    return (
        <div className="pt-6">
            <PageTitle title='Pesquisa' />
            <h1 className="text-center font-bold my-4 text-2xl">
                Críticas e sugestões
            </h1>
            <p className="text-center mb-6">
                O restaurante X sempre busca por atender melhor seus clientes.
                <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            {!sucess && (
                <div className="w-80   mx-auto">
                    <label className="font-bold block mb-2">Seu nome:</label>
                    <input
                        type="text"
                        className="w-80 p-4 block shadow bg-blue-100 my-2 rounded"
                        placeholder="Nome"
                        name="Nome"
                        onChange={onChange}
                        value={form.Nome}
                    />
                    <label className="font-bold block mb-2">E-mail:</label>
                    <input
                        type="text"
                        className="w-80 p-4 block shadow bg-blue-100 my-2 rounded"
                        placeholder="Email"
                        name="Email"
                        onChange={onChange}
                        value={form.Email}
                    />
                    <label className="font-bold block mb-2">WhatsApp:</label>
                    <input
                        type="text"
                        className="w-80 p-4 block shadow bg-blue-100 my-2 rounded"
                        placeholder="Whatsapp"
                        name="Whatsapp"
                        onChange={onChange}
                        value={form.Whatsapp}
                    />

                    <label className='font-bold'>Nota:</label>
                    <div className='flex py-6'>
                        {notas.map(nota => {
                            return (
                                <label key={nota} className='block w-1/6 text-center'>
                                    {nota}<br />
                                    <input
                                        type='radio'
                                        name='Nota'
                                        onChange={onChange}
                                        value={nota} />
                                </label>
                            )
                        })
                        }
                    </div>


                    <div className="flex py-6"></div>
                    <button onClick={save} className="w-80 bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow">Salvar</button>
                </div>
            )}
            {sucess && (
                <div className="w-80   mx-auto">
                    <p className="w-80 mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
                        Obrigado por contribuir com sua sugestão ou crítica.
                    </p>
                    {retorno.showCupon && (
                        <div>
                            <div className=" w-80 text-center border p-4 mb-4">
                                Seu cupom:
                                <br />
                                <span className="font-bold text-2xl">{retorno.Cupom}</span>
                            </div>
                        </div>
                    )}
                    {retorno.showCupon && (
                        <div>
                            <div className=" w-80 text-center border p-4 mb-4">
                                <br />
                                <span className="font-bold text-2xl">{retorno.Promo}</span>
                                <br />
                                <span className=" text-center italic">
                                    Tire um print ou foto desta tela e apresente ao garçon.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Pesquisa;
