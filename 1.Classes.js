class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
// Atrela os método ao prototype automaticamente
    falar() {
        console.log(`${this.nome} está falando`);
    }
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

// Função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Atrelar o método ao prototype
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa ('Dean', 'Norris')
console.log(p1)
const p2 = new Pessoa ('Anna', 'Gunn')
const p3 = new Pessoa ('Bryan', 'Cranston')
const p4 = new Pessoa ('Aaron', 'Paul')

const p11 = new Pessoa2 ('Dean', 'Norris')

