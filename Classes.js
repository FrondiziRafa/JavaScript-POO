class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome

    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa ('Dean', 'Norris')
const p2 = new Pessoa ('Anna', 'Gunn')
const p3 = new Pessoa ('Bryan', 'Cranston')
const p4 = new Pessoa ('Aaron', 'Paul')

const p11 = new Pessoa2 ('Dean', 'Norris')

