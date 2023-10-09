import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.sass']
})
export class ExerciciosComponent {
  mensagem: string = 'Olá, mundo';
  linkDoSite: string = 'http://localhost:4200';
  backgroundColor: string = 'white';
  fontColor: string = 'black';

  mudarCores() {
    this.backgroundColor = 'black';
    this.fontColor = 'pink';

}
  textoSelecionado: string = '';

    mostrarTexto(event: any) {
      this.textoSelecionado = event.target.value;
    }

}


