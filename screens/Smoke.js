import {Link} from "react-router-dom";

/**
 * A sample Smoke page.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function SmokePage() {

  const ExternalLink = ({to, description}) => {
    return (
      <Link to={to} target="_blank">
        {description}
      </Link>
    );
  };

  return (
    <section>
        <h3>Smoke</h3>
        Smoke
        Smoke
    </section>
  );
}

export default SmokePage;