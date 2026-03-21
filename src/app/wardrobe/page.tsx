"use client";

import { useEffect, useState } from "react";
import ItemGrid from "@/components/wardrobe/ItemGrid";

type Item = {
  id: string;
  name: string;
  category: string;
  materials?: { material: string; percentage: number }[];
};

export default function WardrobePage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setItems(data ?? []);
      })
      .catch(() => setError("Failed to fetch items."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Wardrobe</h1>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <ItemGrid items={items} />}
    </div>
  );
}
