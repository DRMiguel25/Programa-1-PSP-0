import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  numero1: string = '';
  numero2: string = '';
  operacionSeleccionada: string = 'suma';
  resultado: number | string | null = null;

  calcular() {
    const num1 = parseFloat(this.numero1);
    const num2 = parseFloat(this.numero2);

    if (isNaN(num1) || isNaN(num2)) {
      this.resultado = 'Por favor, ingrese ambos números';
      return;
    }

    switch (this.operacionSeleccionada) {
      case 'suma':
        this.resultado = num1 + num2;
        break;
      case 'resta':
        this.resultado = num1 - num2;
        break;
      case 'multiplicacion':
        this.resultado = num1 * num2;
        break;
      case 'division':
        if (num2 === 0) {
          this.resultado = 'Error: No se puede dividir por cero';
        } else {
          this.resultado = num1 / num2;
        }
        break;
    }
  }

  getOperacionSymbol(): string {
    switch (this.operacionSeleccionada) {
      case 'suma': return '+';
      case 'resta': return '-';
      case 'multiplicacion': return '×';
      case 'division': return '÷';
      default: return '';
    }
  }
}