import ItemCard from "./ItemCard";

type Item = {
  id: string;
  name: string;
  category: string;
  materials?: { material: string; percentage: number }[];
};

export default function ItemGrid({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return <p className="text-gray-500">No items in your wardrobe yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
