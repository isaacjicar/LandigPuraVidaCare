import { Component } from '@angular/core';

// Componente standalone del hero ilustrado
@Component({
  selector: 'app-heroillustrated',
  imports: [],
  templateUrl: './heroillustrated.html',
  styleUrl: './heroillustrated.css',
})
export class Heroillustratedcomponent {

  windows9  = Array(9).fill(0);   // 9 ventanas — edificio pequeño
  windows12 = Array(12).fill(0);  // 12 ventanas — edificio grande
  windows6  = Array(6).fill(0);   // 6 ventanas — edificio fondo


  scrollTo(id: string): void {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}