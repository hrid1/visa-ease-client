import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyVisaCard from "../../components/MyVisaCard";

const MyVisas = () => {
  //   const visas = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/myvisa?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setVisas(data));
  }, [user.email]);

  return (
    <section className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">My Added Visas</h1>

      {/* Visa Cards Grid */}

      {visas.length > 0 ? (
        <>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {visas.map((visa, index) => (
              <MyVisaCard
                key={index}
                visa={visa}
                visas={visas}
                setVisas={setVisas}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="h-40 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-center my-4 text-red-400 ">There is No Visa Available !</h2>
        </div>
      )}
    </section>
  );
};

export default MyVisas;
