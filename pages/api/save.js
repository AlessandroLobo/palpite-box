import { GoogleSpreadsheet } from "google-spreadsheet";

import credentials from "../../credentials.json";
import moment from "moment/moment";

const doc = new GoogleSpreadsheet(
  "1clQ6pBZhoxR-yDYgaU2AFMMiDxoKwBsbaSC7voUE5pU"
);

const genCupom = () => {
  const code = parseInt(moment().format("YYMMDDhmmssSSS"))
                                .toString(16)
                                .toLocaleUpperCase();
  return code.substr(0, 4) + "-" + code.substr(4, 4) + "-" + code.substr(8, 4);
};

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A2:B2");

    const mostrarPromocaoCell = sheetConfig.getCell(1, 0);
    const textoCell = sheetConfig.getCell(1, 1);

    let Cupom = "";
    let Promo = "";

    if (mostrarPromocaoCell.value === "VERDADEIRO") {
      
      Cupom = genCupom();
      Promo = textoCell.value;
    }

    //Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: 5,
      "Data Preenchimento": new moment().format("DD/MM/YYYY, h:mm:ss a"),
      Cupom,
      Promo,
    });
    res.end(JSON.stringify({
      showCupon: Cupom !== '',
      Cupom,
      Promo
    }));
  } catch (err) {
    console.log(err);
    res.end("error");
  }
};

