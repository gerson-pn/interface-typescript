import Data from "./data";
import Formatador from "./formatador";
import Moeda from "./moeda";

export default class RegistroFinanceiro {
    private moeda: Moeda
    private data: Data
    private formatador!: Formatador
    constructor(moeda: Moeda, data: Data) {
        this.moeda = moeda
        this.data = data
    }
    get obterMoeda(){
        return this.data
    }
    get obterData(){
        return this.data
    }
}