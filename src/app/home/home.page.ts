import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonItem, IonLabel, IonSelect, IonSelectOption,
  IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../components/circulo/circulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonItem, IonLabel, IonSelect,
    IonSelectOption, IonTitle, IonToolbar, CirculoComponent, TrianguloComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  figuraSeleccionada = '';
}
