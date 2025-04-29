"use server";

import { createServerSupabaseClient } from "utils/supabase/server";

function handleError(error: any) {
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function searchMovies(search: string = "") {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .like("title", `%${search}%`);

  handleError(error);

  return data;
}

export async function getMoive(id) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  handleError(error);

  return data;
}
