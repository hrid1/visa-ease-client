import { Link } from "react-router-dom";

const Tutorial = () => {
  const videos = [
    {
      videoId: "01",
      link: "https://www.youtube.com/embed/6Ka_3Rq8JZ4?si=SLpygxy_DUAwxM3P",
    },
    {
      videoId: "02",
      link: "https://www.youtube.com/embed/iovmibRNZnM?si=0Fn9_r3AzJ3CApwv",
    },
    {
      videoId: "03",
      link: "https://www.youtube.com/embed/7T2kr_Vtgw8?si=ojcL7sRyvjZpdFH9",
    },
    {
      videoId: "04",
      link: "https://www.youtube.com/embed/aUwDYE5MEww?si=iqvX5dWbhmmZJfb",
    },
    {
      videoId: "05",
      link: "https://www.youtube.com/embed/qYsHLUAlH_8?si=41D2qcX4UpfOw6ON",
    },
    {
      videoId: "06",
      link: "https://www.youtube.com/embed/tmfTzSLPAM4?si=lXT-2B-7CqCpEl8M",
    },
    {
      videoId: "07",
      link: "https://www.youtube.com/embed/paDNTjoWExI?si=7OhxZcfRa8HC8kdY",
    },
    {
      videoId: "08",
      link: "https://www.youtube.com/embed/fkddcu144t4?si=rl-YW3IjiEvU6CNa",
    },
  ];

  return (
    <div>
      {/* Header section */}
      <header className="text-center py-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-emerald-500 ">
          Learn New Vocabulary
        </h1>
        <p className="text-gray-700 mt-2">
          Explore lessons designed to boost your vocabulary with interactive
          examples and real-world usage.
        </p>
      </header>
      {/* serach section */}
      <section className="py-4 px-6 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search tutorials..."
              className="input input-bordered border-r-0 rounded-e-none "
            />
            <button className="btn bg-emerald-500 text-white  border-r-0 rounded-s-none ">
              Search
            </button>
          </div>
          <select className="select select-bordered w-9/12 md:w-1/4">
            <option disabled selected>
              Filter by Difficulty
            </option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </section>
      {/* all tutorial video */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
        <div className="w-full">
          <iframe
            className="rounded-md w-full h-60 md:h -[400px]"
            //   width="560"
            //   height="315"
            src="https://www.youtube.com/embed/7jP9Aw88h2Y?si=H7n_dwm33vAQF7Hm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {videos.map((video) => (
          <div key={video.videoId} className="w-full">
            <iframe
              className="rounded-md w-full h-60 md:h -[400px]"
              //   width="560"
              //   height="315"
              src={video.link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </section>

      <div className="flex items-center justify-center my-6">
        <Link to="/learning" className="btn px-6 bg-emerald-500 text-white ">
          Learn Vocabularies
        </Link>
      </div>
    </div>
  );
};

export default Tutorial;
