import { supabase } from "@/lib/supabase/client";

export async function GET() {
  const { data, error } = await supabase.from("wardrobe_items").select("*");
  return Response.json({ data, error });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await supabase.from("wardrobe_items").insert(body);
  return Response.json({ data, error });
}
