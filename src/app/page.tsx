import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-4">ReWear</h1>
      <p className="text-gray-600 mb-8">
        Welcome to your sustainable wardrobe. Choose a page to get started.
      </p>

      <div className="flex gap-4">
        <Link
          href="/wardrobe"
          className="px-4 py-2 bg-black text-white rounded-md"
        >
          View Wardrobe
        </Link>

        <Link
          href="/add-item"
          className="px-4 py-2 border border-black rounded-md"
        >
          Add Item
        </Link>
      </div>
    </main>
  );
}
