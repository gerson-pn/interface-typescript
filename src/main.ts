import Data from "./data";
import Dollar from "./dollar";
import Formatador from "./formatador";
import FormatoBrasil from "./formatoBrasil";
import FormatoUSA from "./formatoUSA";
import Moeda from "./moeda";
import Real from "./real";

let formatador: Formatador

let moeda = new Moeda(50.3)
formatador = new Real(moeda)
console.log(formatador.formatar())

formatador = new Dollar(moeda)
console.log(formatador.formatar())

let data = new Data(new Date())
formatador = new FormatoBrasil(data)
console.log(formatador.formatar())

formatador = new FormatoUSA(data)
console.log(formatador.formatar())