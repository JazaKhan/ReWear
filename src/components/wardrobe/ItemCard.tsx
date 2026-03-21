type Item = {
  id: string;
  name: string;
  category: string;
  materials?: { material: string; percentage: number }[];
};

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      {item.materials && item.materials.length > 0 && (
        <p className="text-sm text-gray-500">
          {item.materials.map((m) => `${m.material} ${m.percentage}%`).join(", ")}
        </p>
      )}
    </div>
  );
}
