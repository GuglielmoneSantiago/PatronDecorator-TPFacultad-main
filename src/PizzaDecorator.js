const IPizza = require('./IPizza'); 

class PizzaDecorator extends IPizza{
    pizza= new IPizza();

    constructor(pizzaP=IPizza){
        super(pizzaP);
        this.pizza=pizzaP;
    }
    getPrice(){
        return this.pizza.getPrice();
    }
    getName(){
        return this.pizza.getName();
    }
    getDescription(){
        return this.pizza.getDescription();
    }
}
module.exports = PizzaDecorator;