import Data from "./data";
import Formatador from "./formatador";

export default class Internacional implements Formatador {
    private data: Data
    constructor(data: Data) {
        this.data = data
    }
    formatar(): string {
        return `${this.data.pegarData.toISOString}`
    }
}