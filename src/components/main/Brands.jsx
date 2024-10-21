const Brands = () => {
  return (
    <section
      id="brands-section"
      className="container mt-5 mb-5 d-none d-md-block"
    >
      <div className="row">
        <div id="brand-1" className="col-md-3 col-xl-2">
          <div className="img-box">
            <img src="/assets/images/brand-1.svg" alt="brand icon 1" />
          </div>
        </div>
        <div id="brand-2" className="col-md-3 col-xl-2">
          <div className="img-box">
            <img src="/assets/images/brand-2.svg" alt="brand icon 2" />
          </div>
        </div>
        <div id="brand-3" className="col-md-3 col-xl-2">
          <div className="img-box">
            <img src="/assets/images/brand-3.svg" alt="brand icon 3" />
          </div>
        </div>
        <div id="brand-4" className="col-md-3 col-xl-2">
          <div className="img-box">
            <img src="/assets/images/brand-4.svg" alt="brand icon 4" />
          </div>
        </div>
        <div id="brand-5" className="d-none d-xl-block col-xl-2">
          <div className="img-box">
            <img src="/assets/images/brand-5.svg" alt="brand icon 5" />
          </div>
        </div>
        <div id="brand-6" className="d-none d-xl-block col-xl-2">
          <div className="img-box">
            <img src="/assets/images/brand-6.svg" alt="brand icon 6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
