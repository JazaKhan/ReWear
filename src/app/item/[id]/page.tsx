export default function ItemDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Item Detail</h1>
      <p>Viewing item with ID: {params.id}</p>
    </div>
  );
}
