import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";

const Learning = () => {
  const totalLessons = [
    { id: 1, title: "Lesson-1", info: "Introduction to basic concepts." },
    { id: 2, title: "Lesson-2", info: "Deep dive into core principles." },
    { id: 3, title: "Lesson-3", info: "Understanding advanced techniques." },
    { id: 4, title: "Lesson-4", info: "Hands-on project setup." },
    { id: 5, title: "Lesson-5", info: "Exploring real-world examples." },
    { id: 6, title: "Lesson-6", info: "Best practices and optimization." },
    { id: 7, title: "Lesson-7", info: "Debugging and troubleshooting tips." },
    { id: 8, title: "Lesson-8", info: "Preparing for assessments." },
    { id: 9, title: "Lesson-9", info: "Recap and revision exercises." },
    { id: 10, title: "Lesson-10", info: "Final project and next steps." },
  ];

  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-4">
        Start Your Vocabulary Journey!
      </h1>

      {/* lesseons section */}
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-2 my-12">
        {totalLessons.map((lesson, idx) => (
          <Link
            to={`/lesson/${lesson.id}`}
            key={idx}
            className="card bg-base-100 hover:bg-teal-100  shadow-xl border w-full  lg:w-11/12 "
          >
            <div className="card-body">
              <div className="flex gap-4">
                <GiBookCover className="text-4xl" />
                <h2 className="card-title text-2xl">{lesson.title}</h2>
              </div>
              <p className="text-gray-600">{lesson.info}</p>
              <div className="card-actions justify-en ">
                <button className="py-2 rounded-md text-white bg-emerald-500 w-1/2">
                  Start Lesson
                </button>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Tutorial section */}

      <section className="my-12">
        <h2 className="text-center text-4xl font-bold">Learn the Basics</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 my-6 p-4">
          <div className="w-full lg:w-1/2">
            <iframe
              className="rounded-md w-full h-60 md:h-[400px]"
              //   width="560"
              //   height="315"
              src="https://www.youtube.com/embed/7jP9Aw88h2Y?si=H7n_dwm33vAQF7Hm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              className="rounded-md w-full h-60 md:h-[400px]"
              //   width="560"
              //   height="315"
              src="https://www.youtube.com/embed/xU0PHFVw1Xs?si=wWChXGb2VFw4T0-m"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <button className="btn px-8 bg-emerald-500 text-white ">
            <Link to="/tutorial"> View More</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Learning;
