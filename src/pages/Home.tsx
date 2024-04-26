import ChallengeCard from '../components/ChallengeCard';
import { data } from '../assets/data';

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello</h1>
      <div>
        <p>This will be the front page of the iCodeThis daily challenges web site</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
        {data.map((card) => (
          <ChallengeCard key={card.path} title={card.title} image={card.image} path={card.path} url={card.url} />
        ))}
      </div>
    </>
  );
};

export default Home;
