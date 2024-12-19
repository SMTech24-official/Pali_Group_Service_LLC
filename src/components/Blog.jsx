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
    <section className=" bg-gray-50 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto pt-[120px] pb-[120px]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray border border-gray rounded-[30px] inline-block px-4 py-2">Our Blog</p>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-default my-3">
            Our Latest Insights & Updates
          </h2>
          <p className=" text-gray mb-8">
            Explore expert tips, industry trends, and project highlights from
            Pali Group Service.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  w-[350px] h-[350px]"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[350px] h-[350px] object-cover"
              />
              {/* Blog Content */}
              <div className="">
                <h3 className="text-lg font-semibold text-[#000000] mt-8 mb-4">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-primary font-semibold text-sm inline-flex items-center hover:underline"
                >
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
