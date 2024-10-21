const AppFeatures = () => {
  return ( 
    <section id="app-features-section" className="container mt-5 mb-5">
      <div className="row">
        <div className="col-5 d-none d-xl-flex">
          <img src="/assets/images/features.svg" alt="Mobile phone with a visa card on it" />
        </div>
        <div className="col-12 col-xl-7">
        <div id="features-intro" className="row text-center text-xl-start">
          <h2>App Features</h2>
          <p className="pt-3 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at
            nec lacus.
          </p>
        </div>
        <div id="cards-wrapper" className="row mt-xl-4">
          <div className="col-12 col-md-6">
            <div className="card-wrapper">
              <div className="row">
                  <div className="col-2 col-md-3">
                    <img src="/assets/images/payments.svg" alt="Payment card icon" />
                  </div>
                <div className="col-10 col-md-9">
                  <h4>Easy Payments</h4>
                  <p>Id mollis consectetur congue
                    egestas egestas suspendisse
                    blandit justo.
                  </p>
              </div>
            </div>
          </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-wrapper ">
              <div className="row">
                <div className="col-2 col-md-3">
                  <img src="/assets/images/security.svg" alt="Secuirity icon" />
                </div>
                <div className="col-10 col-md-9" >
                  <h4>Data Security</h4>
                  <p>Augue pulvinar justo, fermentum
                    fames aliquam accumsan vestibulum
                    non.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-wrapper">
              <div className="row">
                <div className="col-2 col-md-3">
                  <img src="/assets/images/statistics.svg" alt="Statistic chart icon" />
                </div>
                <div className="col-10 col-md-9">
                  <h4>Cost Statistics</h4>
                  <p>Mattis urna ultricies non amet, purus
                    in auctor non. Odio vulputate ac nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-wrapper">
              <div className="row">
                <div className="col-2 col-md-3">
                  <img src="/assets/images/support.svg" alt="conversion icon with question marks" />
                </div>
                <div className="col-10 col-md-9">
                  <h4>Support 24/7</h4>
                  <p>A elementum, imperdiet enim, pretium
                    etiam facilisi in aenean quam mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-wrapper">
              <div className="row">
                <div className="col-2 col-md-3">
                  <img src="/assets/images/cashback.svg" alt="" />
                </div>
                <div className="col-10 col-md-9">
                  <h4>Regular Cashback</h4>
                  <p>Sit facilisis dolor arcu, fermentum
                    vestibulum arcu elementum imperdiet
                    eleifend.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-wrapper">
              <div className="row">
                <div className="col-2 col-md-3">
                  <img src="/assets/images/happy.svg" alt="A happay face icon" />
                </div>
                <div className="col-10 col-md-9">
                  <h4>Top Standards</h4>
                  <p>Faucibus cursus maecenas lorem
                    cursus nibh. Sociis sit risus id. Sit
                    facilisis dolor arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
        </div>
      </div>
    </section>
  );
}
 
export default AppFeatures;