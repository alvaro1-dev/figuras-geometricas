import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonImg, IonInput, IonItem, IonLabel, IonText
} from '@ionic/angular/standalone';
import { Circulo } from '../../models/circulo';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonButton, IonCard, IonCardContent,
    IonCardHeader, IonCardTitle, IonImg, IonInput, IonItem, IonLabel, IonText
  ],
  templateUrl: './circulo.component.html',
  styleUrl: './circulo.component.scss'
})
export class CirculoComponent {
  radio: number | null = null;
  resultado: number | null = null;
  error = '';

  calcularPerimetro(): void {
    this.error = '';
    this.resultado = null;

    if (this.radio === null || !Number.isFinite(this.radio) || this.radio <= 0) {
      this.error = 'Ingresa un radio numérico mayor que cero.';
      return;
    }

    const circulo = new Circulo(this.radio);
    this.resultado = circulo.calcularPerimetro();
  }
}
