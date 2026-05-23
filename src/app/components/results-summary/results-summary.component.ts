import { Component, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { IdentificationResult } from '../../models/identification-result';

@Component({
  selector: 'app-results-summary',
  standalone: false,
  templateUrl: './results-summary.component.html',
  styleUrl: './results-summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsSummaryComponent implements OnDestroy {

  @Input() result: IdentificationResult | null = null;
  @Input() isLoading: boolean = false;

  private readonly blobUrlCache = new Map<File, string>();

  resolvePhotoUrl(photo: File | string): string {
    if (typeof photo === 'string') return photo;
    if (!this.blobUrlCache.has(photo)) {
      this.blobUrlCache.set(photo, URL.createObjectURL(photo));
    }
    return this.blobUrlCache.get(photo)!;
  }

  ngOnDestroy(): void {
    this.blobUrlCache.forEach(url => URL.revokeObjectURL(url));
    this.blobUrlCache.clear();
  }
}
