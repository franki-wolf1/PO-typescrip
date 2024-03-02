/*
Enums:
Los enums (enumeraciones) permiten definir un conjunto de constantes nombradas. 
Pueden ser útiles para representar conjuntos finitos de opciones.
*/

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Uso de enums
let playerDirection: Direction = Direction.Up;
if (playerDirection === Direction.Up) {
  console.log("El jugador va hacia arriba");
}

/**Const:
La palabra clave const se utiliza para declarar una constante cuyo valor no puede ser reasignado.
*/
const gravity = 9.81;
// gravity = 10; // Esto dará un error, no puedes reasignar una constante


/**Interfaces:
Las interfaces en TypeScript definen la forma que debe tener un objeto. Pueden ser utilizadas 
para definir la estructura de un objeto y garantizar que ciertas propiedades o métodos estén presentes.
*/
interface Shape {
  color: string;
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number, public color: string) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

let circle: Shape = new Circle(5, "red");
console.log(circle.area()); // Output: 78.54


/**Clases Abstractas:
Las clases abstractas sirven como plantillas para otras clases. No se pueden instanciar directamente, 
sino que se deben extender y luego implementar sus métodos abstractos.
*/
abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof");
  }
}

let myDog: Animal = new Dog();
myDog.makeSound(); // Output: Woof

 
*/
/**
*/
