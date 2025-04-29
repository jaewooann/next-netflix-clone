"use client";

export default function UI({ movie }: { movie: any }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={movie.image_url} className="w-1/3" />

      <div className="md:w-2/3 w-full md:items-start items-center flex flex-col gap-4 p-6">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-lg font-medium">{movie.overview}</p>
        <p className="text-lg font-bold">
          <i className="fas fa-star text-yellow-500 mr-1" />
          vote average: {movie.vote_average}
        </p>
        <p className="text-lg font-bold">popularity: {movie.popularity}</p>
        <p className="text-lg font-bold">release date: {movie.release_date}</p>
      </div>
    </div>
  );
}
