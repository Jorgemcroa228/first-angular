  import { Component, signal, computed } from '@angular/core';   import { FormsModule } from '@angular/forms';      @Component({     selector: 'app-root',     imports: [FormsModule],     templateUrl: './app.html',     styleUrl: './app.css',   }) 
  export class App { 
    // ----- Estado editable ----- 
    nombre = signal('Alex Rivera'); 
    profesion = signal('Desarrollador/a Angular'); 
    color = signal('#6a1b9a'); 
    disponible = signal(true); 

    // ----- Estado derivado (se recalcula solo) ----- 
    iniciales = computed(() => 
      this.nombre() 
        .split(' ') 
        .map(p => p[0] ?? '') 
        .join('') 
        .toUpperCase() 
        .slice(0, 2) 
    ); 
    // ----- Acciones ----- 
    alternarDisponibilidad() { 
      this.disponible.update(v => !v); 
    } 
  saludar(mensaje: string) { 
      alert(`📨 Mensaje para ${this.nombre()}: ${mensaje}`); 
    } 
  }
