const Testimonials = () => {
  return (
    <section id="clients-testimonials" className="d-none d-xl-block">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-4">
            <h2>Clients are Loving Our App</h2>
          </div>
          <div className="col-4">
            <div className="card testimonial-card shadow-sm">
              <div className="quote-img">
                <img
                  className="img-fluid"
                  src="/assets/images/icons/quote-white.svg"
                  alt=""
                />
              </div>
              <div className="rating">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star unfilled"></span>
              </div>
              <p>
                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
                sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
                aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis sit amet.
              </p>
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid "
                    src="/assets/images/icons/avatar-female.svg"
                    alt="A female designer avatar"
                  />
                </div>
                <div className="col-9 text-start">
                  <span className="name">Fannie Summers</span>
                  <br />
                  <span className="small-text">Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card testimonial-card shadow-sm">
              <div className="quote-img">
                <img
                  className="img-fluid"
                  src="/assets/images/icons/quote-white.svg"
                  alt=""
                />
              </div>
              <div className="rating">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
              </div>
              <p>
                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
                sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo
                aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo
                turpis sit amet.
              </p>
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid "
                    src="/assets/images/icons/avatar-male.svg"
                    alt="A male developer avatar"
                  />
                </div>
                <div className="col-9 text-start">
                  <span className="name">Albert Flores</span>
                  <br />
                  <span className="small-text">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
