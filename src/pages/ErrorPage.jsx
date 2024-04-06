import { useRouteError } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>I Missed you!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link key={1} to='/'>
      <button class='md:hover:text-blue-700'>
        Click here to go home
      </button>
      </Link>
    </div>
  );
};
