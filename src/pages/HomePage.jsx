import { Blog, Navbar, StaticLogo } from "../components";
import DynamicLogo from "../components/DynamicLogo";

const HomePage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <Blog blogs={blogs} />
      <StaticLogo />
      <DynamicLogo />
    </div>
  );
};

export default HomePage;
