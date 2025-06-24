import SEO from './seo/SEO';

function Home() {
  return (
    <div>
      <SEO title="Home | SEO React App" description="საძიებო სისტემის ოპტიმიზაცია React ბიბლიოთეკაში" />
      <h1>საძიებო სისტემის ოპტიმიზაცია React ბიბლიოთეკაში სატესტო გარემო</h1>
      <p>This content is visible to search engines after JS is rendered.</p>
    </div>
  );
}

export default Home;
