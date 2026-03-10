import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Modelo de cada tarjeta de rol
interface Role {
  icon: string;
  title: string;
  description: string;
  confirmationText: string;
}

// Componente standalone de selección de rol
@Component({
  selector: 'app-role-selection',
  templateUrl: './roleselection.html',
  styleUrl: './roleselection.css',
  standalone: true,
  imports: [CommonModule],
})
export class RoleSelectionComponent {

  selectedRole: number = 2;        // Rol activo por defecto (índice)
  hoveredRole: number | null = null; // Rol en hover para mostrar CTA

  constructor(private sanitizer: DomSanitizer) {}

  // Datos de los 3 roles disponibles
  roles: Role[] = [
    {
      icon: 'users',
      title: 'Familiar o Responsable',
      description: 'Gestiono los servicios de cuidado de un ser querido adulto mayor',
      confirmationText: '✓ ¡Excelente! Crearemos tu perfil de Familiar con herramientas de gestión.'
    },
    {
      icon: 'briefcase',
      title: 'Proveedor de Servicios',
      description: 'Ofrezco mis servicios profesionales a adultos mayores y sus familias',
      confirmationText: '✓ ¡Excelente! Crearemos tu perfil de Proveedor con opciones comerciales.'
    },
    {
      icon: 'accessibility',
      title: 'Adulto Mayor',
      description: 'Quiero gestionar mis propios servicios de cuidado de forma autónoma',
      confirmationText: '✓ ¡Excelente! Crearemos tu perfil de Adulto Mayor con información de salud.'
    }
  ];

  // SVGs inline por nombre de ícono
  private icons: Record<string, string> = {
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    accessibility: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>`
  };

  // Sanitiza y retorna el SVG seguro para el template
  getIcon(name: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icons[name] || '');
  }

  // Actualiza el rol seleccionado al hacer click
  setSelected(index: number): void {
    this.selectedRole = index;
  }
}