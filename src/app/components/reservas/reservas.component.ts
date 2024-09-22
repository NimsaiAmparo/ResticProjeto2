import { Component, OnInit } from '@angular/core';
import { ReservaService, Reserva } from '../../services/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  nome: string = '';
  horario: string = '';
  mensagem: string = '';

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(data => {
      this.reservas = data;
      console.log('Reservas carregadas:', this.reservas); //ERA PARA VERIFICAR AS RESERVAS
    });
  }

  adicionarReserva() {
    //VERIFICAVA O HORÁRIO A SER RESERVADO
    const horarioReservado = this.reservas.find(reserva => reserva.horario === this.horario);
    console.log('Horário a ser reservado:', this.horario);

    if (horarioReservado) {
      this.mensagem = 'Esse horário já foi reservado.';
      console.log('Mensagem de erro:', this.mensagem); 
    } else {
      const novaReserva: Reserva = {
        id: this.reservas.length + 1,
        nome: this.nome,
        horario: this.horario
      };

      this.reservaService.addReserva(novaReserva).subscribe(reserva => {
        this.reservas.push(reserva);
        this.mensagem = 'Reservado com sucesso!';
        console.log('Mensagem de sucesso:', this.mensagem);
      });

      // Limpar os campos
      this.nome = '';
      this.horario = '';
    }
  }
}
