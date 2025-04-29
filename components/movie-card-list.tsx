"use client";

import { useQuery } from "@tanstack/react-query";
import MovieCard from "./movie-card";
import { Spinner } from "@material-tailwind/react";
import { searchMovies } from "actions/movieActions";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);
  const getAllMoviesQuery = useQuery({
    queryKey: ["movie", search],
    queryFn: () => searchMovies(search),
  });

  return (
    <div className="grid md:grid-cols-4 grid-cols-3 w-full gap-1 h-full">
      {getAllMoviesQuery.isLoading && <Spinner className="w-12 h-12" />}
      {getAllMoviesQuery.data &&
        getAllMoviesQuery.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
