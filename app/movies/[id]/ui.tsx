"use client";

export default function UI({ id }: { id: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img
        src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
        className="w-1/3"
      />

      <div className="md:w-2/3 w-full md:items-start items-center flex flex-col gap-4 p-6">
        <h1 className="text-3xl font-bold">Dune: Part Two</h1>
        <p className="text-lg font-medium">
          Follow the mythic journey of Paul Atreides as he unites with Chani and
          the Fremen while on a path of revenge against the conspirators who
          destroyed his family. Facing a choice between the love of his life and
          the fate of the known universe, Paul endeavors to prevent a terrible
          future only he can foresee.
        </p>
        <p className="text-lg font-bold">
          <i className="fas fa-star text-yellow-500 mr-1" />
          vote average: 8.3
        </p>
        <p className="text-lg font-bold">popularity: 3437.313</p>
        <p className="text-lg font-bold">release date: 2024-02-27</p>
      </div>
    </div>
  );
}
