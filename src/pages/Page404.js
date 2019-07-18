import React from "react";
import { Link } from "react-router-dom";
import error404 from "../images/undraw_page_not_found_su7k.svg";
import { flexbox } from "@material-ui/system";

const Page404 = () => (
  <div
    style={{
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: 'center',
      flexDirection: "column",
      height: '68vh'
    }}
  >
    <div style={{ display: "inline-block" }}>
      <img src={error404} class="expanded__image" style={{maxWidth: '600px'}} alt="undraw" />
    </div>
    <Link
      className="button button__accent"
      style={{ display: "inline-block", width: "20%", marginTop: '78px' }}
      to="/"
    >
      Back to Home page
    </Link>
  </div>
);

export default Page404;
