import Data from "./data";
import Formatador from "./formatador";

export default class FormatoBrasil implements Formatador {
    private data: Data
    constructor(data: Data) {
        this.data = data
    }
    formatar(): string {
        return `${this.data.pegarData.getDay()}/${this.data.pegarData.getMonth()}/${this.data.pegarData.getFullYear()}`
    }
}