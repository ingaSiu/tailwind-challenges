import ChallengeCard from '../components/ChallengeCard';
import { data } from '../assets/data';

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello</h1>
      <div>
        <p>This will be the front page of the iCodeThis daily challenges web site</p>
      </div>
      {data.map((card) => (
        <ChallengeCard key={card.path} title={card.title} image={card.image} path={card.path} url={card.url} />
      ))}
    </>
  );
};

export default Home;
