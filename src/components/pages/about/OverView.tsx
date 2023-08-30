import Image from "next/image";

const OverView = () => {
  return (
    // <!-- overview section start -->
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="row gy-4">
              <div className="col-sm-6">
                <div className="overview-item">
                  <h4 className="overview-amount">24K+</h4>
                  <p className="overview-caption">Listener</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="overview-item">
                  <h4 className="overview-amount">50+</h4>
                  <p className="overview-caption">Radio Jockey</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="overview-item">
                  <h4 className="overview-amount">30+</h4>
                  <p className="overview-caption">Shows</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="overview-item">
                  <h4 className="overview-amount">20+</h4>
                  <p className="overview-caption">Awords</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2 order-1">
            <div className="overview-thumb">
              <Image
                width={526}
                height={550}
                src="/images/bg/overview.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- overview section end -->
  );
};

export default OverView;
