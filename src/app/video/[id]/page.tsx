// src/app/video/[id]/page.tsx

import VideoDetailsClient from "./VideosDetailsClient";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function VideoDetailsPage({ params }: Props) {
  const { id } = await params; // ← REQUIRED in your environment

  return <VideoDetailsClient id={id} />;
}
