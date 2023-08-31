import Image from "next/image";

const SubscribeNewsLetter = () => {
  return (
    // <!-- subscribe section start -->
    <section className="subscribe-section style-two">
      <div className="side-img">
        <Image
          width={838}
          height={506}
          src="/images/bg/subscribe3.jpg"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="section-title text-lg-start text-center">
              Subscribe Our Newsletter
            </h2>
            <p className="subscribe-section-des text-lg-start text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <form className="subscribe-form style-two">
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
    //   <!-- subscribe section end -->
  );
};

export default SubscribeNewsLetter;
