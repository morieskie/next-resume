const ShareItComponent = () => {
  return (
    <>
      {/* <!-- Share Buttons --> */}
      <div className="btn-group share-buttons">
        <div className="block-title">
          <h3>Share</h3>
        </div>
        <a href="/" target="_blank" className="btn">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="/" target="_blank" className="btn">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/" target="_blank" className="btn">
          <i className="fa fa-dribbble"></i>
        </a>
      </div>
      {/* <!-- /Share Buttons --> */}
    </>
  );
};
export default ShareItComponent;
