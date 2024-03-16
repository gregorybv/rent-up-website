import { Back } from "../common/Back";
import { RecentCard } from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import img from "../images/about.jpg";

export const Blog = () => {
  return (
    <section className="blog-out mb">
      <Back name="Blog" title="Blog Grid - Our Blogs" cover={img}/>
      <div className="container recent">
        <RecentCard/>
      </div>
    </section>
  );
};
