import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => (
  <div>
    <div>Error 404. We did not expect that :(</div>
    <Link className="button button__accent" to="/">
      Back to Home page
    </Link>
  </div>
);

export default Page404;
