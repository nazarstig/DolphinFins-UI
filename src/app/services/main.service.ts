import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { IdentificationResult } from '../models/identification-result';

const BASE_URL = 'https://illiakhurtak-dolphin-reid.hf.space';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private readonly http: HttpClient) {}

  identify(image: File): Observable<IdentificationResult> {
    const formData = new FormData();
    formData.append('file', image, image.name);
    return this.http.post<IdentificationResult>(`${BASE_URL}/identify`, formData);
  }
}
