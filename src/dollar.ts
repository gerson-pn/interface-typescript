import Formatador from "./formatador";
import Moeda from "./moeda";

export default class Dollar implements Formatador {
    private moeda: Moeda
    constructor(moeda: Moeda) {
        this.moeda = moeda
    }
    formatar(): string {
        return `US$ ${this.moeda.pegarValor}`
    }
}

