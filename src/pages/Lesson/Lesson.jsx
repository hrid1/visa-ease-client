import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import WordCard from "../../components/WordCard";

const Lesson = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const navigate = useNavigate();

  console.log(id, allData);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const lessonsWords = allData.filter(
      (data) => data.Lesson_no === parseInt(id)
    );
    setWords(lessonsWords);
  }, [allData, id]);

  //   console.log(words, id);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">
        Lesson-{id}: Vocabulary Overview
      </h1>
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-4 mx-4 my-8">
        {words.map((data) => (
          <WordCard key={data.Id} data={data} />
        ))}
      </section>

      <button onClick={() => navigate(-1)} className="btn block mx-auto my-5 bg-emerald-500 text-white">
        {/* {" "}
        <Link to={-1}>Back to Lessons</Link> */}
        Back To Lesson
      </button>
    </div>
  );
};

export default Lesson;
