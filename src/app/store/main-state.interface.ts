import { IdentificationResult } from '../models/identification-result';

export interface IMainState {
  identificationResults: IdentificationResult[];
  selectedImage: File | null;
  isLoading: boolean;
}
