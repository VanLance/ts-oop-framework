import { Containerable } from './types';

export default abstract class Container implements Required<Containerable> {
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(value) {
    this._zIndex = value;
  }
  get borderWidth() {
    return this._borderWidth;
  }
  set borderWidth(value) {
    if (parseInt(value.substring(0, 3)) < 10) {
      this._borderWidth = value;
    }
  }
  get borderStyle() {
    return this._borderStyle;
  }
  set borderStyle(value) {
    this._borderStyle = value;
  }
  get borderRadius() {
    return this._borderRadius;
  }
  set borderRadius(value) {
    this._borderRadius = value;
  }
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(value) {
    this._borderColor = value;
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    this._backgroundColor = value;
  }

  public get attributes(): Containerable {
    return {
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderRadius: this.borderRadius,
      borderStyle: this.borderStyle,
      borderWidth: this.borderWidth,
      zIndex: this.zIndex,
    };
  }

  constructor(
    private _backgroundColor = 'black',
    private _borderColor = 'white',
    private _borderRadius = '0px',
    private _borderStyle = 'solid',
    private _borderWidth = '2px',
    private _zIndex = 0
  ) {}
}
