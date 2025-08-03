"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Category = {
  id: string;
  name: string;
  label: string;
  description: string;
};

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data || []);
      }
      setLoading(false);
    }

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h2>{category.label}</h2>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
