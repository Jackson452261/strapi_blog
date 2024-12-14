import { useParams } from "react-router-dom";
import { Navbar } from "../components";
const BlogPage = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs?.data?.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const { blogTitle, blogDesc, coverImg, location, date } = blog;
  const coverImgUrl = coverImg?.url
    ? `http://localhost:1337${coverImg.url}` // 確保是完整的圖片 URL
    : "https://via.placeholder.com/150";

  return (
    <> 
     <Navbar />  
    <div className="max-w-[1240px] mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{blogTitle || "Untitled"}</h1>
      <img className="w-full object-cover mb-4" src={coverImgUrl} alt={`Cover for ${blogTitle}`} />
      <p>{blogDesc || "No description available"}</p>
      <p className="text-black text-sm">{location || "No description available"}</p>
      <p className="text-red-600 text-sm">{date || "No date available"}</p>
    </div>
    </>
  );
};

export default BlogPage;
