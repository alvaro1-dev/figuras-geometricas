import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonImg, IonInput, IonItem, IonLabel, IonText
} from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonButton, IonCard, IonCardContent,
    IonCardHeader, IonCardTitle, IonImg, IonInput, IonItem, IonLabel, IonText
  ],
  templateUrl: './triangulo.component.html',
  styleUrl: './triangulo.component.scss'
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  resultado: number | null = null;
  error = '';

  calcularPerimetro(): void {
    this.error = '';
    this.resultado = null;

    if (this.ladoA === null || this.ladoB === null || this.ladoC === null
      || !Number.isFinite(this.ladoA) || !Number.isFinite(this.ladoB) || !Number.isFinite(this.ladoC)) {
      this.error = 'Ingresa las medidas de los tres lados.';
      return;
    }

    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    if (!triangulo.esValido()) {
      this.error = 'Usa lados positivos, todos distintos, y que la suma de dos lados sea mayor que el tercero.';
      return;
    }

    this.resultado = triangulo.calcularPerimetro();
  }
}
