/* eslint-disable no-underscore-dangle, class-methods-use-this */

const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarSymbol](_brand, _motor, _color) {
    return new Car(_brand, _motor, _color);
  }

  cloneCar(_brand, _motor, _color) {
    const instance = new Car();
    return instance[cloneCarSymbol](_brand, _motor, _color);
  }
}
