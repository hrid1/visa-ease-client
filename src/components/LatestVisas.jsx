import LatestVisaCard from "./LatestVisaCard";

const LatestVisas = () => {
  const visas = ["a", "c", "b", "5"];

  return (
    <section className="my-4 md:my-8 lg:my-12 px-4">
      <div>
        <h2 className="text-center font-bold my-4 md:my-8 text-xl md:text-3xl">
          Latest Visas
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">
        {visas.map((visa, idx) => (
          <LatestVisaCard key={idx} visa={visa} />
        ))}
      </div>
    </section>
  );
};

export default LatestVisas;
