import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name = signal('Jorge Mario');
  profession = signal('dev Fullstack');
  color = signal('#6a1b9a');
  available = signal(true);

  iniciales = computed(() =>
  this.name()
  .split(' ')
  .map(p => p[0] ?? '')
  .join('')
  .toUpperCase()
  .slice(0, 2)
);

alternarDisponibilidad() {
  this.available.update(v => !v);
}

saludar(message : String) {
  alert(` Message to ${this.name()}: ${message}`);
}

}
