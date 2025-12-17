"use client";

type Props = {
  liveUrl: string;
};

export default function FacebookLivePlayer({ liveUrl }: Props) {
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    liveUrl
  )}&show_text=false`;

  return (
    <div style={{ width: "100%", aspectRatio: "16 / 9" }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
