import React from "react";

const Blog = () => {
  const blogs = [
    {
      title: "Ensuring Quality in Healthcare Construction Projects",
      description:
        "Discover the critical steps and standards we follow to deliver safe, reliable, and compliant healthcare facilities.",
      image: "images/blog1.png",
      link: "#",
    },
    {
      title: "The Role of Inspections in Healthcare Construction",
      description:
        "Learn how regular inspections ensure quality, compliance, and safety in healthcare infrastructure projects.",
      image: "images/blog2.png",
      link: "#",
    },
    {
      title: "Challenges and Solutions in Healthcare Construction",
      description:
        "Explore common challenges faced in construction & how our team expertly overcomes them to deliver results.",
      image: "images/blog3.png",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 sm:px-8" id="blog">
      <div className="max-w-[1140px] mx-auto py-[60px] md:py-[120px]">
        {/* Header Section */}
        <header className="text-center mb-12">
          <p className="text-sm font-semibold text-gray border border-gray rounded-[30px] inline-block px-4 py-2">
            Our Blog
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-default my-3">
            Our Latest Insights & Updates
          </h2>
          <p className="text-gray">
            Explore expert tips, industry trends, and project highlights from
            Pali Group Service.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white md:w-[350px] w-full rounded-lg"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="md:w-[350px] md:h-[350px] w-full object-cover"
              />
              {/* Blog Content */}
              <div className="font_popins">
                <h3 className="text-lg font-semibold text-default mb-3 mt-8 leading-[28px]">
                  {blog.title}
                </h3>
                <p className="text-gray mb-5">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-[#3D5BB8] font-medium inline-flex items-center hover:underline"
                >
                  Read More <span className="ml-1 font-medium">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
