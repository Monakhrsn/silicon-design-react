const Header = () => {
  return ( 
    <div className="row header-details mt-5 pb-md-5">
      <div className="col">
        <div className="row justify-content-md-center justify-content-xl-start align-items-xl-end">
          <div className="col-12 col-md-6">
            <h1 className="text-center text-xl-start">Manage All Your Money in One App</h1>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-6 mt-md-5 mt-xl-3">
            <p className="text-center text-md-start mt-md-5 mt-xl-0 mb-xl-5">
              We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
            </p> 
            <div className="row">
              <div className="col-12 col-md-6 col-xl-4 pb-3">
                <a href="#" className="appstore d-flex justify-content-center justify-align-center">
                  <img className="show-light img-fluid" src="/assets/images/icons/appstore-light.svg" alt="App Store" />
                  <img className="show-dark img-fluid" src="/assets/images/icons/appstore-dark.svg" alt="App Store Dark" />
                </a>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <a href="#" className="googleplay d-flex justify-content-center justify-align-center">
                  <img className="show-light img-fluid" src="/assets/images/icons/googleplay-light.svg" alt="Google Play" />
                  <img className="show-dark img-fluid" src="/assets/images/icons/googleplay-dark.svg" alt="Google Play Dark" />                      
                </a>  
              </div> 
            </div>
            <div className="discover-btn-wrapper mt-4 mb-4 mb-md-1 text-center text-md-start">
              <button className="accardion-btn bg-white rounded-circle align-middle" />
              <span className="discover-more ps-2 align-middle">Discover more</span> 
            </div>
          </div>          
        </div>     
      </div> 
    </div>
  );
}

export default Header;
