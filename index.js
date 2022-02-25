class Pokemon {
    constructor(name, type, attack){
        this.name = name;
        this.type = type;
        this.attack = attack
    }
    pokeAttack() {
        return `${this.name} used ${this.attack} to attack!`
      }
}

const pokemon1 = new Pokemon('Pickachu', 'electric', 'thunderbolt')
console.log(pokemon1.pokeAttack());

const pokemon2 = new Pokemon('rotom', 'electric', 'thunderbolt')
console.log(pokemon2.pokeAttack());

const pokemon3 = new Pokemon('Raichu', 'electric', 'thunderbolt')
console.log(pokemon3.pokeAttack());

