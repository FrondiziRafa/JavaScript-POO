class ElectronicDevice {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends ElectronicDevice {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends ElectronicDevice {
    constructor(nome, tem3G){
        super(nome);
        this.tem3G = tem3G;
    }

    ligar() {
        console.log('Você alterou o método ligar.');
    }

    // Metodo específico da classe
    falaOi() {
        console.log('Oi')
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '12 pro');
console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1);
console.log(t1.ligado);