const FAQ = () => {
  return (  
    <section id="FAQ-section" className="container">
      <div className="row">
        <div className="col-12 col-xl-5">
          <div className="row">
            <div className="col header-wrapper text-center text-xl-start my-md-5 my-5">
              <h2>Any questions? Check out the FAQs</h2>
              <p>Still have unanswered questions and need to get in touch?</p>
            </div>
          </div>
          <div className=" row d-none d-xl-flex justify-content-md-between ">
            <div className="col-6">
              <div className="contact-us-wrapper">
                <img className="img-fluid" src="/images/icons/phone.svg" alt="Phone ringing icon" />
                <p>Still have questions?</p>
                <button className="btn-border-none left justify-content-md-between">
                  <span className="pe-2">Contact us</span> 
                </button>  
              </div>
            </div> 
            <div className="col-6">
              <div className="contact-us-wrapper">
                <img className="img-fluid" src="/images/icons/message.svg" alt="A pop up message" /> 
                <p>Don't like phone calls?</p>
                <button className="btn-border-none right">
                  <span className="pe-2">Contact us</span> 
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-7 my-xl-5">
          <div className="row">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button 
                  className="accordion-button" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseOne" 
                  aria-expanded="true" 
                  aria-controls="collapseOne"
                  >
                    Is any of my personal information
                    stored in the App?
                  </button>
                </h2>
                <div 
                id="collapseOne" 
                className="accordion-collapse collapse show" 
                aria-labelledby="headingOne" 
                data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Nunc duis id aenean gravida tincidunt eu, tempor
                    ullamcorper. Viverra aliquam arcu, viverra et,
                    cursus. Aliquet pretium cursus adipiscing gravida
                    et consequat lobortis arcu velit. Nibh pharetra
                    fermentum duis accumsan lectus non. Massa
                    cursus molestie lorem scelerisque pellentesque.
                    Nisi, enim, arcu purus gravida adipiscing euismod
                    montes, duis egestas. Vehicula eu etiam quam
                    tristique tincidunt suspendisse ut consequat.
                  </div>
                  <div className="accordion-body">
                    Ornare senectus fusce dignissim ut. Integer
                    consequat in eu tortor, faucibus et lacinia
                    posuere. Turpis sit viverra lorem suspendisse
                    lacus aliquam auctor vulputate. Quis egestas
                    aliquam nunc purus lacus, elit leo elit facilisi.
                    Dignissim amet adipiscing massa integer.
                  </div>   
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseTwo" 
                  aria-expanded="false" 
                  aria-controls="collapseTwo"
                  >
                    What formats can I download my
                    transaction history in?
                  </button>
                </h2>
                <div 
                id="collapseTwo" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingTwo" 
                data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                      It is hidden by default, until the collapse plugin adds the appropriate 
                      classes that we use to style each element. These classes control the 
                      overall appearance, as well as the showing and hiding via CSS transitions. 
                      You can modify any of this with custom CSS or overriding our default variables. 
                      It's also worth noting that just about any HTML can go within the 
                      <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button 
                  className="accordion-button collapsed" 
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#collapseThree" 
                  aria-expanded="false" 
                  aria-controls="collapseThree"
                  >
                    Can I schedule future transfers?
                  </button>
                </h2>
                <div 
                id="collapseThree" 
                className="accordion-collapse d-none collapse" 
                aria-labelledby="headingThree" 
                data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Nunc duis id aenean gravida tincidunt eu, 
                    tempor ullamcorper. Viverra aliquam arcu, viverra et, 
                    cursus. Aliquet pretium cursus adipiscing gravida et 
                    consequat lobortis arcu velit. Nibh pharetra fermentum 
                    duis accumsan lectus non. Massa cursus molestie lorem 
                    scelerisque pellentesque. Nisi, enim, arcu purus gravida 
                    adipiscing euismod montes, duis egestas. Vehicula eu 
                    etiam quam tristique tincidunt suspendisse ut consequat.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button 
                  className="accordion-button collapsed" 
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#collapseFour" 
                  aria-expanded="false" 
                  aria-controls="collapseFour">
                    When can I use Banking App
                    services?
                  </button>
                </h2>
                <div 
                id="collapseThree" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingFour" 
                data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    It is hidden by default, until the collapse plugin adds the appropriate classes 
                    that we use to style each element. These classes control the overall appearance, 
                    as well as the showing and hiding via CSS transitions. You can modify any of this 
                    with custom CSS or overriding our default variables. It's also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the transition 
                    does limit overflow.
                  </div>
                </div>
              </div> 
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button 
                  className="accordion-button collapsed" 
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#collapseFive" 
                  aria-expanded="false" 
                  aria-controls="collapseFive"
                  >
                    Can I create my own password that is
                    easy for me to remember?
                  </button>
                </h2>
                <div 
                id="collapseThree" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingFive" 
                data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    It is hidden by default, until the collapse plugin adds the appropriate 
                    classes that we use to style each element. These classes control the overall 
                    appearance, as well as the showing and hiding via CSS transitions. You can modify 
                    any of this with custom CSS or overriding our default variables. It's also worth 
                    noting that just about any HTML can go within the <code>.accordion-body</code>, 
                    though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button 
                  className="accordion-button collapsed" 
                  type="button" data-bs-toggle="collapse" 
                  data-bs-target="#collapseSix" 
                  aria-expanded="false" 
                  aria-controls="collapseSix"
                  >
                    What happens if I forget or lose my
                    password?
                  </button>
                </h2>
                <div 
                id="collapseThree" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingSix" 
                data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    It is hidden by default, until the collapse plugin adds the appropriate 
                    classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can 
                    modify any of this with custom CSS or overriding our default variables. It's 
                    also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
                    though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" row d-none d-md-flex  d-xl-none">
            <div className="col-6">
              <div className="contact-us-wrapper">
                <img 
                className="img-fluid" 
                src="/images/icons/phone.svg" 
                alt="Phone ringing icon"
                />
                <p>Still have  questions?</p>
                <button className="btn-border-none left">
                  <span className="pe-2">Contact us</span>
                </button>  
              </div>
            </div> 
            <div className="col-6">
              <div className="contact-us-wrapper">
                <img 
                className="img-fluid" 
                src="/images/icons/message.svg" 
                alt="A pop up message"
                /> 
                <p>Don't like phone calls?</p>
                <button className="btn-border-none right">
                  <span className="pe-2">
                    Contact us 
                  </span>                
                </button>
              </div>
            </div>
          </div>
          <div className="row d-md-none">
            <div className="col-12 my-5 text-center transition">
              <button className="btn btn-primary py-3 px-4">  
                <span className="pe-2">
                  Contact us now
                </span>  
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};
 
export default FAQ;