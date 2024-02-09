import {Link} from "react-router-dom";

/**
 * A sample about page.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function AboutPage() {

  const ExternalLink = ({to, description}) => {
    return (
      <Link to={to} target="_blank">
        {description}
      </Link>
    );
  };

  return (
    <section>
        <h3>About</h3>
        About
        About
    </section>
  );
}

export default AboutPage;