
const IPizza = require('./IPizza');

class PizzaBase extends IPizza{
    getPrice(){
        return 10
    }
    getName(){
        return "Pizza"
    }
    getDescription(){
        return "Masa-Salsa-Queso"
    }
}
module.exports = PizzaBase;