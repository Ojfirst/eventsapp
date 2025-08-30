import NewsletterSignup from './NewsletterSignup';
import PageContent from '../Home/PageContent';

function NewsletterPage() {
  return (
    <div style={{'padding': '10rem'}}>
    <PageContent title="Join our awesome newsletter!" >
      <NewsletterSignup />
    </PageContent>
    </div>
  );
}

export default NewsletterPage;