export default function DocsCatchAll({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>Docs Catch-all Page</h1>
      <p>Segments: {JSON.stringify(params.slug)}</p>
    </div>
  );
}