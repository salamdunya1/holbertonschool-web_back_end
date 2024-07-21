const CarSymbol = Symbol('car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[CarSymbol] = this.constructor;
  }

  cloneCar() {
    const ClonedCar = this[CarSymbol];
    return new ClonedCar(this._brand, this._motor, this._color);
  }
}
