/** Clase base abstracta compartida por las figuras geométricas. */
export abstract class FiguraGeometrica {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  /** Cada figura concreta define su propia fórmula de perímetro. */
  abstract calcularPerimetro(): number;
}
