import ShowThumbnail from "./ShowThumbnail";

function ShowsCollection({ results, title }) {
  //console.log(results);
  return (
    <section className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-3 overflow-y-hidden overeflow-x-scroll scrollbar-hide p-2 -m-2">
        {results.map((result) => (
          <ShowThumbnail key={result.id} result={result} />
        ))}
      </div>
    </section>
  );
}

export default ShowsCollection;
