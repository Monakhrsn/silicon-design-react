const Subscription = () => {
  return ( 
    <section className="container pt-md-4">
      <div className="row">
        <div className="col">
          <div className="subscription">
            <div className="row align-items-md-center">
              <div className="col-md-6">
                <div id="newsletter" className="row text-center py-5">
                  <div className="d-flex justify-content-center align-items-center px-5">
                    <div className="col-4 col-xl-2 me-xl-4">
                      <img 
                      className="img-fluid" 
                      src="/assets/images/icons/notification.svg" 
                      alt="Bell notification"
                      />
                    </div>
                    <h4 className="text-start d-xl-none">
                      Subscribe to our newslwtter
                    </h4>
                    <h4 className="text-start d-none d-xl-block col-xl-10 ">
                      Subscribe to our newsletter to stay 
                      informed about latest updates
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col d-flex justify-content-start align-items-center px-5">
                    <div className="input-group input-wrapper mb-4 mb-md-0">
                      <input 
                      type="text" 
                      className="form-control email" 
                      placeholder="Your Email" 
                      aria-label="Recipient's username" 
                      aria-describedby="button-addon2" />
                      <button 
                      className="btn btn-primary transition" 
                      type="button" 
                      id="button-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
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
 
export default Subscription;