import Image from "next/image";

const Experience = () => {
  return (
    // <!-- Experiences section start -->
    <section className="pt-120 pb-120 section-bg position-relative z-index2">
      <div className="bottom-box-shape">
        <Image
          width={221}
          height={220}
          src="/images/elements/bottom-box-shape.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center align-items-center">
          <div className="col-lg-4 text-lg-start text-center">
            <h2 className="section-title">
              <span className="text-base">12</span> Year Experience
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-sm-6">
                <div className="counter-item">
                  <h4 className="counter-item-amount">24K+</h4>
                  <p className="counter-item-title">Listener</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item">
                  <h4 className="counter-item-amount">50+</h4>
                  <p className="counter-item-title">Radio Jockey</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item">
                  <h4 className="counter-item-amount">30+</h4>
                  <p className="counter-item-title">Shows</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item">
                  <h4 className="counter-item-amount">20+</h4>
                  <p className="counter-item-title">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- Experiences section end -->
  );
};

export default Experience;
