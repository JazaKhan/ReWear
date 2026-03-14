"use client";

import { useState } from "react";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [materials, setMaterials] = useState([
    { material: "", percentage: "" },
  ]);

  function updateMaterial(index: number, field: string, value: string) {
    const updated = [...materials];
    updated[index][field] = value;
    setMaterials(updated);
  }

  function addMaterialRow() {
    setMaterials([...materials, { material: "", percentage: "" }]);
  }

  function removeMaterialRow(index: number) {
    setMaterials(materials.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formattedMaterials = materials.map((m) => ({
      material: m.material,
      percentage: Number(m.percentage),
    }));

    const res = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({
        name,
        category,
        materials: formattedMaterials,
      }),
    });

    const data = await res.json();
    console.log("Saved:", data);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Item</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Category (e.g., Top, Bottom)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <div className="flex flex-col gap-2">
          <p className="font-medium">Materials</p>

          {materials.map((row, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Material"
                value={row.material}
                onChange={(e) =>
                  updateMaterial(index, "material", e.target.value)
                }
                className="border p-2 rounded w-full"
              />

              <input
                type="number"
                placeholder="%"
                value={row.percentage}
                onChange={(e) =>
                  updateMaterial(index, "percentage", e.target.value)
                }
                className="border p-2 rounded w-20"
              />

              {materials.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMaterialRow(index)}
                  className="text-red-500"
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addMaterialRow}
            className="text-blue-600 text-sm"
          >
            + Add material
          </button>
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Save Item
        </button>
      </form>
    </div>
  );
}
