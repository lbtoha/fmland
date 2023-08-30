const JoinSponsor = () => {
  return (
    // <!-- sponsor section start -->
    <section
      className="dark-overlay pt-120 pb-120"
      style={{ backgroundImage: "url('assets/images/bg/sponsor.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Sponsor</span>
              <h2 className="section-title">Join As A Sponsor</h2>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <form>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="#0"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="#0"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Company Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="#0"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="#0"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="url"
                    name="#0"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="#0"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="submit" className="btn btn-main">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    //<!-- sponsor section end -->
  );
};

export default JoinSponsor;
