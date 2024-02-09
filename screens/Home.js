import {Link} from "react-router-dom";

/**
 * A sample about page.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function HomePage() {

  const ExternalLink = ({to, description}) => {
    return (
      <Link to={to} target="_blank">
        {description}
      </Link>
    );
  };

  return (
    <section>
        <h3>Home</h3>
        Home
        Home
    </section>
  );
}

export default HomePage;