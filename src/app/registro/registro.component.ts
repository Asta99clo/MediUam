import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
  
})
export class RegistroComponent {


  name: string = '';
  email: string = '';
  pw1: string = '';
  pw2: string = '';
  nss: string = '';
  direccion: string = '';
  showForm: boolean = true;
  welcomeMessage: string = '';

 
  onSubmit(): void {
    this.showForm = false; 

   
    this.welcomeMessage = `
      Holaa!!!! ${this.name}<br>
      Gracias por registrarte!<br>
      tu email: ${this.email}<br>
      el paciente es: ${this.pw1}<br>
      Tipo de sangre: ${this.pw2}<br>
      Numero de seguro social: ${this.nss}<br>
      Dirección: ${this.direccion}
      `;
  }
}
