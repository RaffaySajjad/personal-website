import { getDateMonthYearFromStringDate } from "../components/helpers/blog";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs: React.FC = () => {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) return;

  return (
    <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>Recent Blogs</h2>
          <span>Recent Blogs</span>
        </div>
        <div className="row mt-30-reverse">
          {blogs.map((blog) => {
            const date = getDateMonthYearFromStringDate(blog.modified);

            return (
              <div
                key={blog.globalId}
                className="col-lg-6 col-md-6 col-12 mt-30">
                <div className="mi-blog">
                  <div className="mi-blog-image">
                    <a href="/blogs/1/markdown-html-supported-blog">
                      <img
                        src="/images/blog-image-placeholder.png"
                        alt="Markdown &amp; Html supported blog."
                      />
                    </a>
                    <div className="mi-blog-date">
                      <span className="date">{date.day}</span>
                      <span className="month">{date.month}</span>
                    </div>
                  </div>
                  <div className="mi-blog-content">
                    <h5>
                      <a href="/blogs/1/markdown-html-supported-blog">
                        {blog.title}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mi-pagination mt-50">
          <ul>
            <li className="is-active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">
                <i className="lni lni-chevron-right size-md "></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
