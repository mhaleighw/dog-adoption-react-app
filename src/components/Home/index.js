import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h2>Interested in adopting a dog?</h2>
          <p>French Bull Dog Puppies</p>
          <br></br>
          <Link to="/contact" className="flat-button">
            CONTACT FOR ADOPTION
          </Link>
        </div>
      </div>

    </>
  );
};

export default Home;
