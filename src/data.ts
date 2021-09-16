export default class Data {
    private data: Date
    constructor(data: Date) {
        this.data = data
    }
    get pegarData() {
        return this.data
    }
}