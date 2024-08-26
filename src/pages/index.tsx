import FeaturedArticle from '../components/sections/FeaturedArticle';
import CurrentIssue from '../components/sections/CurrentIssue';

const Home: React.FC = () => (
  <div className="max-w-[1280px] mx-auto flex flex-col gap-12 pb-24">
    <FeaturedArticle />
    <CurrentIssue />
  </div>
);

export default Home;
