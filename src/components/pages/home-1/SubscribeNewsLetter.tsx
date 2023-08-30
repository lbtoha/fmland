const SubscribeNewsLetter = () => {
  return (
    // <!-- subscribe section start -->
    <section
      className="subscribe-section"
      style={{ backgroundImage: "url('/images/bg/subscribe.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-lg-8 text-center">
            <h2 className="section-title">Subscribe Our Newsletter</h2>
            <p className="subscribe-section-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <form className="subscribe-form">
              <input
                type="email"
                name="#0"
                className="form-control"
                placeholder="Email"
              />
              <button type="submit" className="btn btn-main">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    // <!-- subscribe section end -->
  );
};

export default SubscribeNewsLetter;
