const PizzaDecorator = require('./PizzaDecorator');

class AceitunaDecorator extends PizzaDecorator{
    getPrice(){
        return this.pizza.getPrice()+1;
    }
    getName(){
        return this.pizza.getName()+" con aceitunas";
    }
    getDescription(){
        return this.pizza.getDescription()+"-Aceitunas";
    }
}
module.exports = AceitunaDecorator;