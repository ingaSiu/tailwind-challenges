import Button from './Button';
import { Link } from 'react-router-dom';

type CardProps = {
  image: string;
  title: string;
  path: string;
  url: string;
};

const ChallengeCard = ({ image, title, path, url }: CardProps) => {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden max-w-[450px]">
      <div className="relative w-full h-auto aspect-video">
        <img className="w-full" src={image} alt="project" />
      </div>

      <div className="px-5 pb-10 ">
        <h1 className="text-2xl text-center pt-4">
          Challenge -{' '}
          <span className="font-semibold bg-gradient-to-r from-pink-400 to-violet-400 inline-block text-transparent bg-clip-text">
            {title}
          </span>
        </h1>

        <div className="flex gap-8 justify-center mt-4">
          <Link to={path} target="_blank">
            <Button>View Task</Button>
          </Link>

          <Link to={url} target="_blank">
            <Button>iCodeThis challenge</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
