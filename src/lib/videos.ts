export type Video = {
  id: string;
  title: string;
  url: string; // YouTube/Vimeo embed URL
  instrument: "drums" | "guitar" | "keys" | "other";
  tags: string[];
};

export const videos: Video[] = [
  {
    id: "v1",
    title: "Drum Session - Live Take",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    instrument: "drums",
    tags: ["live", "studio"],
  },
  {
    id: "v2",
    title: "Loop & Groove Demo",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    instrument: "drums",
    tags: ["loops", "production"],
  },
];