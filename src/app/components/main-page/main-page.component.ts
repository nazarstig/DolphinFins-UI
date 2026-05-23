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
  @Select(MainState.identificationResult) identificationResult$!: Observable<IdentificationResult | null>;
  @Select(MainState.isLoading) isLoading$!: Observable<boolean>;

  constructor(private readonly store: Store) {}

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
