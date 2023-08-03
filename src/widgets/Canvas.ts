
export default class Canvas {

  constructor(private parent: HTMLElement){
    this.parent.innerHTML = ''
    this.parent.id = 'canvas'
    const newStyle: Partial<CSSStyleDeclaration>= {
      display: 'grid',
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(12, 1fr)",
      gridGap: '5px',
      height: '100vh',
      aspectRatio: '1/1',
      margin: '5px auto',
      border: '2px solid hotpink'
    }
    Object.assign(this.parent.style, newStyle)
  }
}
