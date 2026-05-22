import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IdentificationResult } from '../models/identification-result';

const BASE_URL = 'https://localhost:7260/api';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private readonly http: HttpClient) {}

  testResult: IdentificationResult = {
    decision: 'CONFIDENT',
    predicted_id: '1325',
    verdict: 'Дельфін 1325',
    signals: { similarity: 0.72, gap: 0.24, consensus: 4 },
    top_matches: [
      { id: '1325', similarity: 0.72, photo_url: 'assets/images/SB25-2105-112.JPG' },
      { id: '1325', similarity: 0.68, photo_url: 'assets/images/SB25-2123-115.JPG' },
      { id: '1098', similarity: 0.41, photo_url: 'assets/images/SB25-2126-499.JPG' }
    ]
  };

  identify(image: File): Observable<IdentificationResult> {
    const formData = new FormData();
    formData.append('file', image);
    //return this.http.post<IdentificationResult>(`${BASE_URL}/FileUpload/upload`, formData);
    return of(this.testResult);
  }
}
