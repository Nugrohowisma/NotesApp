import React from "react";
import HomeNav from "./HomeNav";

function NotFound() {
  return (
    <>
      <p className="NotFound">
        Sorry, it looks like the page you requested is not correct :(
      </p>
      <HomeNav />
    </>
  );
}

export default NotFound;
