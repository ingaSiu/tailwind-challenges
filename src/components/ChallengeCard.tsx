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
    <div className="border w-[550px]">
      <img src={image} alt="project" />

      <div>
        <h1 className="text-xl text-center">{title}</h1>

        <div className="flex gap-2 justify-between">
          <button onClick={() => navigate(path)}>View Task</button>
          <Link to={url} target="_blank">
            <button>iCodeThis challenge</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
