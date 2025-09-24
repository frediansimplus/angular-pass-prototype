export type MediaType = 'Picture' | 'Video';

export interface Media {
  id: number;
  filename: string;
  // type: MediaType;
  type: string;
  value: File;
  base64: any;
}
