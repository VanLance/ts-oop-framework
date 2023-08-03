import Component from './Component';

export default class Canvas {
  private _widgets: Component[] = [];

  constructor(private parent: HTMLElement) {
    this.parent.innerHTML = '';
    this.parent.id = 'canvas';
    const newStyle: Partial<CSSStyleDeclaration> = {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridGap: '5px',
      height: '100vh',
      aspectRatio: '1/1',
      margin: '5px auto',
      border: '2px solid hotpink',
    };
    Object.assign(this.parent.style, newStyle);
  }

  public addWidget(widget: Component) {
    this._widgets.push(widget);
  }

  private initializeDiv(widget: Component): HTMLDivElement {
    const div = document.createElement('div');
    div.id = widget.id.toString();
    const styles: Partial<CSSStyleDeclaration> = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      margin: 'center',
      width: '100%',
      height: '100%',
      padding: '3%',
      aspectRatio: '1/1',
    };
    Object.assign(div.style, styles);
    return div;
  }

  private buildShape(widget: Component, div: HTMLDivElement): void{
    Object.assign(div.style, widget.container.attributes)
  }

  private placeShape(widget: Component, div: HTMLDivElement): void{
    const styles: Partial<CSSStyleDeclaration> = {
      gridColumnStart: widget.locationLeft.toString(),
      gridRowStart: widget.locationTop.toString(),
      gridColumnEnd: `span ${widget.width}`, 
      gridRowEnd: `span ${widget.height}` 
    }
    Object.assign(div.style, styles)
  }
  private buildWidget(widget: Component): void{
    const div = this.initializeDiv(widget)
    this.buildShape(widget, div)
    this.placeShape(widget, div)
  }
}

