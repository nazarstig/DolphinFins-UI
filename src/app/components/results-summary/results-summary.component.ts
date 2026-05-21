import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IdentificationResult } from '../../models/identification-result';

@Component({
  selector: 'app-results-summary',
  standalone: false,
  templateUrl: './results-summary.component.html',
  styleUrl: './results-summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsSummaryComponent {

  @Input() results: IdentificationResult[] = [];
  @Input() isLoading: boolean = false;
}
