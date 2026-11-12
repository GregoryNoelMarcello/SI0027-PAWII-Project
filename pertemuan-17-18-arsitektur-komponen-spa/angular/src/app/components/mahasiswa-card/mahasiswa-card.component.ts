// Mini Project - Pertemuan 17-18: Komponen anak, menerima data lewat @Input

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mahasiswa-card',
  standalone: true,
  templateUrl: './mahasiswa-card.component.html',
})
export class MahasiswaCardComponent {
  @Input() nama!: string;
  @Input() nim!: string;
}
