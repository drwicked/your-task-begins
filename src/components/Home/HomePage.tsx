import { FC } from 'react';
import useSound from 'use-sound';
import StartTaskSound from '../../assets/start-task.mp3';
import TMSeal from '../../assets/images/taskmaster-seal.png';

const HomePage: FC = () => {
  const [play] = useSound(StartTaskSound);
  const handleClick = () => {
    console.log('play sound');
    play();
  };
  return (
    <div className="text-center">
      <button onClick={handleClick}>
        <img
          src={TMSeal}
          width={500}
          className="mx-auto"
          alt="React-Typescript-Template"
        />
      </button>
    </div>
  );
};

export default HomePage;
