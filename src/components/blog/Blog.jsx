import SectionHeader from "../SectionHeader";
import PostList from "./PostList";

const getPosts = async () => {
  const res = await fetch("http://localhost:4000/posts");
  return res.json();
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <section className="section" id="blog">
      <div className="container mx-3 xl:mx-auto">
        <SectionHeader pretitle="Our Blog" title="latest News" />
        {/* post list */}
        <PostList posts={posts}/>
      </div>
    </section>
  );
};

export default Blog;
