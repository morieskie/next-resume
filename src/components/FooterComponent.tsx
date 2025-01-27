import React from "react";

const FooterComponent = () => {
  return (
    <footer>
      <div className="copyrights">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
