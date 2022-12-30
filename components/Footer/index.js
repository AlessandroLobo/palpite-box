import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-8  ">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por: Alessandro Lobo /{" "}
        <a
          href="https://www.linkedin.com/in/alessandrolobodev/"
          className=" hover:underline"
        >
          Linkedin
        </a>{" "}
        /
        <a
          href="https://github.com/AlessandroLobo"
          className=" hover:underline"
        >
          {" "}
          Github
        </a>
        <div className="mt-4">
             <img className="inline p-8" src="./logo_semana_fsm.png" />
             <img className="inline p-8" src="./logo_devpleno.png" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
