import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modelo de cada tarjeta de servicio
interface ServiceCard {
  emoji: string;
  title: string;
  description: string;
  tag: string;
}

// Componente standalone de la sección de servicios
@Component({
  selector: 'app-services',
  templateUrl: './service.html',
  standalone: true,
  imports: [CommonModule],
})
export class ServicesComponent {

  hoveredIndex: number | null = null; // Índice de la tarjeta en hover

  // Catálogo de servicios disponibles
  services: ServiceCard[] = [
    {
      emoji: '🚗',
      title: 'Transporte seguro',
      description: 'Conductores verificados para citas médicas, compras o paseos recreativos.',
      tag: 'Movilidad'
    },
    {
      emoji: '💬',
      title: 'Acompañamiento',
      description: 'Compañía profesional para reducir la soledad y estimular actividades diarias.',
      tag: 'Compañía'
    },
    {
      emoji: '💊',
      title: 'Telemedicina',
      description: 'Consultas virtuales con especialistas desde la comodidad del hogar.',
      tag: 'Salud'
    },
    {
      emoji: '🛒',
      title: 'Compras asistidas',
      description: 'Ayuda personalizada para hacer mercado o gestionar trámites del día a día.',
      tag: 'Asistencia'
    },
    {
      emoji: '🏥',
      title: 'Enfermería',
      description: 'Cuidados profesionales de enfermería y monitoreo de salud en casa.',
      tag: 'Salud'
    },
  ];

  // Actualiza la tarjeta en hover (null al salir)
  setHovered(index: number | null): void {
    this.hoveredIndex = index;
  }

  // Verifica si una tarjeta está en hover
  isHovered(index: number): boolean {
    return this.hoveredIndex === index;
  }
}