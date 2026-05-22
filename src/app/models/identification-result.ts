export interface TopMatch {
  id: string;
  similarity: number;
  photo_url: File | string;
}

export interface Signal {
  similarity: number;
  gap: number;
  consensus: number;
}

export interface IdentificationResult {
  decision: string;
  predicted_id: string;
  verdict: string;
  signals: Signal;
  top_matches: TopMatch[];
}
