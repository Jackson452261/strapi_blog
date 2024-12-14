import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import FetchApi from "./components/hooks/FetchApi";

function App() {
  const { loading, data, error } = FetchApi("http://localhost:1337/api/blogs?populate=*");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <Routes>
        {/* 傳遞 blogs 屬性給 HomePage 元件 */}
        <Route path="/" element={<HomePage blogs={data || { data: [] }} />} />
        {/* 傳遞 blogs 屬性給 BlogPage 元件 */}
        <Route path="/blog/:id" element={<BlogPage blogs={data || { data: [] }} />} />
      </Routes>
    </>
  );
}

export default App;
