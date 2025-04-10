import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
        id: 1,
        title: "Step-by-Step Guide: How to Apply for a Visa Successfully",
        date: "June 1, 2024",
        views: "5.3k views",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWrEWCOYFqUSzq66aLq9HDXxONYkolXXDrw&s",
        link: "/visa-application-guide",
      },
      {
        id: 2,
        title: "Top 10 Mistakes to Avoid When Applying for a Visa",
        date: "June 3, 2024",
        views: "4.8k views",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjLh1pF4JxsGiZ7AHKR4NUBLyUypj2rsn_Q&s",
        link: "/visa-application-mistakes",
      },
      {
        id: 3,
        title: "The Ultimate Checklist for a Stress-Free Visa Process",
        date: "June 5, 2024",
        views: "6.2k views",
        image:
          "https://www.iflyeducation.com/wp-content/uploads/2023/04/Student-visa.png",
        link: "/visa-checklist",
      },
      {
        id: 4,
        title: "How to Track Your Visa Application Status Online",
        date: "June 7, 2024",
        views: "4.5k views",
        image:
          "https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1716978559207.svg",
        link: "/visa-application-status",
      },
      
  ];

  return (
    <section id="blogs" className="my-16">
      <div
        className="space-y-2 text-center my-6 lg:my-10 "
        data-aos="fade-down"
      >
        <h2 className="text-3xl lg:text-4xl font-bold"> Read Blogs</h2>
        <p className=" text-gray-600">
          Unlocking Insights: A Journey Through Language, Learning, and Beyond
        </p>
      </div>

      <section
        className="px-4 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-4 md:my-10"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card card-compact bg-base-100  shadow-xl rounded-md p-2"
          >
            <figure className=" rounded overflow-hidden h-52">
              <img
                className="w-full h-full object-cover"
                src={blog.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex flex-col justify-between">
              {/* <h2 className="card-title">Shoes!</h2> */}
              <Link to="/" className="card-title">
                {blog.title}
              </Link>
              <div className="flex justify-between">
                <p>{blog.date}</p>
                <span>{blog.views}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Blogs;
