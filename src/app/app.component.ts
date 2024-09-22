import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  nome: string = '';
  horario: string = '';
  reservas: { nome: string; horario: string }[] = [];

  adicionarReserva() {
    if (this.nome && this.horario) {
      this.reservas.push({ nome: this.nome, horario: this.horario });
      this.nome = '';
      this.horario = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}

