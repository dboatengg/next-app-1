export default function Image({ params }: { params: { imageId: string } }) {
  return <h1>Image {params.imageId}</h1>;
}