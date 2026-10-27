import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super('Triángulo escaleno');
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }

  /** Comprueba que los lados formen un triángulo y sean todos distintos. */
  esValido(): boolean {
    const ladosPositivos = this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0;
    const cumpleDesigualdad = this.ladoA + this.ladoB > this.ladoC
      && this.ladoA + this.ladoC > this.ladoB
      && this.ladoB + this.ladoC > this.ladoA;
    const ladosDistintos = this.ladoA !== this.ladoB
      && this.ladoA !== this.ladoC
      && this.ladoB !== this.ladoC;
    return ladosPositivos && cumpleDesigualdad && ladosDistintos;
  }
}
