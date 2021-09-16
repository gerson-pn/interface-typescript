import Data from "./data";
import Formatador from "./formatador";

export default class FormatoUSA implements Formatador {
    private data: Data
    constructor(data: Data) {
        this.data = data
    }
    formatar(): string {
        return `${this.data.pegarData.getMonth()}/${this.data.pegarData.getDay()}/${this.data.pegarData.getFullYear()}`
    }
}