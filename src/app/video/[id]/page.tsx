import VideoDetailsClient from "./VideosDetailsClient";


type Props = {
  params: Promise<{ id: string }>;
};

export default async function VideoPage({ params }: Props) {
  const { id } = await params; 

  return <VideoDetailsClient id={id} />;
}