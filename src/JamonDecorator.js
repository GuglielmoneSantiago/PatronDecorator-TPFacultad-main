const PizzaDecorator = require('./PizzaDecorator');

class JamonDecorator extends PizzaDecorator{

  getPrice(){
      return this.pizza.getPrice()+2;
  }
  getName(){
      return this.pizza.getName()+" con Jamon";
  }
  getDescription(){
      return this.pizza.getDescription()+"-Jamon";
  }
}
module.exports = JamonDecorator;
