export type GridUnit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Containerable {
  attributes?: Containerable
  color: string
  backgroundColor: string
  borderColor: string
  borderRadius: string 
  borderStyle: string
  borderWidth: string
  zIndex: number
}
