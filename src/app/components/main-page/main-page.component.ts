import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IdentificationResult } from '../../models/identification-result';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

  testResults: IdentificationResult[] = [
    {
      dolphinId: 'dolphin-123',
      name: '1234',
      confidence: 0.95
    },
    {
      dolphinId: 'dolphin-456',
      name: '1245',
      confidence: 0.89
    }
  ];

  onImageDropped(file: File): void {
    console.log('Image dropped:', file.name);
  }

  onIdentifyClick(): void {
    console.log('Identify button clicked');
  }
}
