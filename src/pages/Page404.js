import React from 'react';
import { Link } from "react-router-dom";

const Page404 = () => (
    <div>Error 404. We did not expect that :(</div>
    <Link className="button button__accent" to="/index">Back to HomePage</Link>
)

export default Page404;
