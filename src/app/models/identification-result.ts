export interface IdentificationResult {
  dolphinId: string;
  name: string | null;
  confidence: number; // 0–1
  referenceImageUrl?: string;
}
