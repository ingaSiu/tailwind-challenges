import Button from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  image: string;
  title: string;
  path: string;
  url: string;
};

const ChallengeCard = ({ image, title, path, url }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-xl shadow-lg overflow-hidden ">
      <div className="relative w-full h-auto aspect-video">
        <img className="w-fill" src={image} alt="project" />
      </div>

      <div className="px-5 pb-10 ">
        <h1 className="text-2xl text-center pt-4">
          Challenge -{' '}
          <span className="font-semibold bg-gradient-to-r from-pink-400 to-violet-400 inline-block text-transparent bg-clip-text">
            {title}
          </span>
        </h1>

        <div className="flex gap-8 justify-center mt-4">
          <Button onClick={() => navigate(path)}>View Task</Button>
          <Link to={url} target="_blank">
            <Button>iCodeThis challenge</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
