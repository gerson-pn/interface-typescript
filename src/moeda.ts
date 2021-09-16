export default class Moeda {
    private valor: number
    constructor(valor: number) {
        this.valor = valor
    }
    get pegarValor(){
        return this.valor
    }
}