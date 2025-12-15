// src/app/video/[id]/page.tsx
import { Suspense } from "react";
import VideoDetailsClient from "./VideosDetailsClient";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function VideoPage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<div className="p-4">Loading video...</div>}>
      <VideoDetailsClient id={id} />
    </Suspense>
  );
}
