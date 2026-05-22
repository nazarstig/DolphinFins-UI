import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IdentificationResult } from '../models/identification-result';

const BASE_URL = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private readonly http: HttpClient) {}

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

  identify(image: File): Observable<IdentificationResult[]> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<IdentificationResult[]>(`${BASE_URL}/FileUpload/upload`, formData);
    //return of(this.testResults);
  }
}
