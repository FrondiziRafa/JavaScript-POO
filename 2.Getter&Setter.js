const _velocidade = Symbol('velocidade'); // Proteção de um dado específico
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    // Acessa como um atributo do objeto
    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >=100 || valor <= 0)  return;
        this[_velocidade] = valor;
    }
    
    // Acessa como um atributo do objeto
    get velocidade(){
        console.log('GETTER');
        return this[_velocidade]
    }
    
    
    // Acessa como um atributo do função
    acelerar() {
        if(this[_velocidade]>= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade]<= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca')

// for(let i = 0; i <= 200; i++){
//     c1.acelerar();
// }
c1.velocidade = 89;
console.log(c1)
console.log(c1.velocidade)