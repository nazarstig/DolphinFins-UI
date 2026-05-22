import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IdentificationResult } from '../../models/identification-result';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MainState } from '../../store/main.state';
import { AddImage, ClearResults, GetIdentificationResults } from '../../store/main.actions';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  @Select(MainState.identificationResults) identificationResults$!: Observable<IdentificationResult[]>;

  constructor(private readonly store: Store) {}

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
    this.store.dispatch(new AddImage(file));
  }

  onIdentifyClick(): void {
    const file = this.store.selectSnapshot(MainState.selectedImage);
    if (file) {
      this.store.dispatch(new GetIdentificationResults(file));
    }
  }

  clear(): void {
    this.store.dispatch(new ClearResults());
  }
}
