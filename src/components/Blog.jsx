import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
  if (!blogs || !blogs.data) {
    return <p>No blogs available</p>;
  }

  return (
    <div className="w-full bg-[#ece2e28f] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black">
          {blogs.data.map((blog) => {
            const { id, blogTitle, blogDesc, coverImg, location, date } = blog; // 提取對應屬性
            const coverImgUrl = coverImg?.url
              ? `http://localhost:1337${coverImg.url}` // 確保是完整的圖片 URL
              : "https://via.placeholder.com/150";

            return (
              <Link to={`/blog/${id}`} key={id}>
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                  <img
                    className="h-56 w-full object-cover"
                    src={coverImgUrl}
                    alt={`Cover for ${blogTitle || "Untitled Blog"}`}
                  />
                  <div className="p-8">
                    <h2 className="font-bold text-2xl my-1">{blogTitle || "Untitled"}</h2>
                    <p className="text-black text-sm">{blogDesc || "No description available"}</p>
                    <p className="text-black text-sm">{location || "No location available"}</p>
                    <h2 className="text-black text-sm">{date || "No date available"}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
