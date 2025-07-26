import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 5 Crypto Scams to Watch in 2025",
      date: "July 24, 2025",
      excerpt:
        "With the rapid growth of cryptocurrency, scams are evolving too. Stay informed with the top five crypto scams experts predict for 2025.",
    },
    {
      title: "How to Avoid Investment Fraud Online",
      date: "July 20, 2025",
      excerpt:
        "Investment opportunities are everywhere — but so are fraudsters. Learn practical tips to keep your money safe from online scammers.",
    },
    {
      title: "What to Do Immediately After Being Scammed",
      date: "July 10, 2025",
      excerpt:
        "Just got scammed? Don’t panic. Here's a step-by-step guide on what actions to take immediately to maximize your chances of recovery.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Latest Blog Posts
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2 hover:text-[#ed139a] cursor-pointer transition">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <button className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-black transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
