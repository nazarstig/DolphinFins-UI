import { IdentificationResult } from '../models/identification-result';

export interface IMainState {
  identificationResult: IdentificationResult | null;
  selectedImage: File | null;
  isLoading: boolean;
}
