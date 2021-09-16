import Formatador from "./formatador";
import Moeda from "./moeda";

export default class Real implements Formatador {
    private moeda: Moeda
    constructor(moeda: Moeda) {
        this.moeda = moeda
    }
    formatar(): string {
        let literal = new String(this.moeda.pegarValor)
        let comVirgula = literal.replace('.', ',')
        return `R$ ${comVirgula}`
    }
}

