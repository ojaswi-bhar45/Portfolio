import { BLOG } from '../data/portfolio';

export default function BlogSection() {
  return (
    <section id="blog">
      <h2 className="section-headline">Latest <span className="accent-word">Posts</span></h2>
      <div className="blog-grid">
        {BLOG.map((post, i) => (
          <article key={i} className="blog-card">
            <p className="blog-date">{post.date}</p>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-tags">
              {post.tags.map(t => (
                <span key={t} className="project-stack-tag">{t}</span>
              ))}
            </div>
            <a href={post.url} className="blog-read-more">
              Read More {'\u2192'}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
