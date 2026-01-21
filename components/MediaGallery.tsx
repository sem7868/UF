export default function MediaGallery({ images, videos }) {
  return (
    <>
      {images.map((img, i) => (
        <img key={i} src={img} width="100%" />
      ))}
      {videos.map((vid, i) => (
        <video key={i} src={vid} controls width="100%" />
      ))}
    </>
  );
}
