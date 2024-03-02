abstract class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;

  getColor(): string {
    return this.color;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number, color: string) {
    super(color);
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number, color: string) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Uso de las clases abstractas y las subclases
const circle = new Circle(5, "red");
console.log("Circle Area:", circle.getArea());
console.log("Circle Perimeter:", circle.getPerimeter());
console.log("Circle Color:", circle.getColor());

const rectangle = new Rectangle(4, 6, "blue");
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Perimeter:", rectangle.getPerimeter());
console.log("Rectangle Color:", rectangle.getColor());
