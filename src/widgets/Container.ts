
export default abstract class Container {
  protected get zIndex() {
    return this._zIndex;
  }
  protected set zIndex(value) {
    this._zIndex = value;
  }
  protected get borderWidth() {
    return this._borderWidth;
  }
  protected set borderWidth(value) {
    if(parseInt(value.substring(0,3)) < 10){
      this._borderWidth = value;
    }
  }
  protected get borderStyle() {
    return this._borderStyle;
  }
  protected set borderStyle(value) {
    this._borderStyle = value;
  }
  protected get borderRadius() {
    return this._borderRadius;
  }
  protected set borderRadius(value) {
    this._borderRadius = value;
  }
  protected get borderColor() {
    return this._borderColor;
  }
  protected set borderColor(value) {
    this._borderColor = value;
  }
  protected get backgroundColor() {
    return this._backgroundColor;
  }
  protected set backgroundColor(value) {
    this._backgroundColor = value;
  }
  
  constructor(
    private _backgroundColor = 'black',
    private _borderColor = 'white',
    private _borderRadius = '0px',
    private _borderStyle = 'solid',
    private _borderWidth = '2px',
    private _zIndex = 0,
  ){}

}