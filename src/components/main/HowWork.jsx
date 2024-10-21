const HowWork = () => {
  return ( 
    <section id="how-work-section">
      <div className="container text-center">
        <div className="row justify-content-center justify-content-md-around">
          <h2 className="text-center">How Does It Work?</h2>
          <div id="mobile-images" className="col-xl-10">
            <div className="row">
              <div id="left" className="col-md-4">
                <img 
                id="visa-card-img"
                className="d-none d-md-block d-xl-none" 
                src="/assets/images/how-work-group/tablet/visa-tablet-left.svg" 
                alt="Mobile shows visa card"
                />
                <img 
                className="d-none d-xl-block" 
                src="/assets/images/how-work-group/desktop/my-budget-left.svg" 
                alt="Mobile shows my budget"
                />
              </div>
              <div id="center" className="col-md-4">
                <img
                id="transfer-balance-img" 
                className="d-xl-none"
                src="/assets/images/how-work-group/mobile/transfer-balance-center.svg" 
                alt="Mobile shows transfer balance and contact list" 
                />
                <img 
                className="d-none d-xl-block"
                src="/assets/images/how-work-group/desktop/your-cards-center.svg" 
                alt="Mobile shows your card, visa card" 
                />
              </div>
              <div id="right" className="col-md-4">
                <img 
                className="d-none d-md-block d-xl-none" 
                src="/assets/images/how-work-group/tablet/transfer-one-person-right.svg" 
                alt="Mobile shows transfer money to one person"
                />
                <img 
                className="d-none d-xl-block" 
                src="/assets/images/how-work-group/desktop/transfer-balance-no-frame-right.svg" 
                alt="Mobile shows transfer money to three persons"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="how-work-info">
          <h4 className="d-md-none">
            Transfers to people from your contact list
          </h4>
          <h4 className="d-none d-md-block d-xl-none pt-4">
            Step 3. Transfers to people from your contact list
          </h4>
          <h4 className="d-none d-xl-block">
            Latest transaction history
          </h4>
          <p className="pt-4 d-xl-none">
            Proin volutpat mollis egestas. Nam luctus facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus.
          </p>
          <p className=" pt-4 d-none d-xl-block">
            Enim, et amet praesent pharetra. Mi non ante hendrerit 
            amet sed. Arcu sociis tristique quisque hac in consectetur 
            condimentum. 
          </p>
        </div>
      </div>
    </section>
  );
}
 
export default HowWork;