"use client";

import MovieCard from "./movie-card";

export default function MovieCardList() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-3 w-full gap-1 h-full">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
