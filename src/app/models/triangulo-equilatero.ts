import { TrianguloEscaleno } from './triangulo-escaleno';

/** Clase incluida para representar la jerarquía indicada en el UML del taller. */
export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(ladoA: number) {
    super(ladoA, ladoA, ladoA);
  }
}
