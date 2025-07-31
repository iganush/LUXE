
import Heroo from '../assets/images/Heroo.jpg'

const Heropage = () => {
  return (
    <>
    <div className="w-full h-180 pt-13 overflow-hidden ">
      <img
        src={Heroo}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
    </>
  );
};

export default Heropage;
