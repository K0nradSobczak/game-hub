


export interface getAllRequest<Data> {
  counts: number;
  next: string | null;
  results: Data[];
}
