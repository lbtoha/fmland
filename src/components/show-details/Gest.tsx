import Image from "next/image";

const Gest = () => {
  return (
    //   guest section start
    <section className="pb-120 section-bg">
      <div className="container">
        <h3 className="guest-area-title">Gest</h3>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="guest-item">
              <div className="guest-thumb">
                <Image
                  width={306}
                  height={344}
                  src="/images/guest/1.jpg"
                  alt="image"
                />
              </div>
              <h4 className="guest-name">RJ Miron</h4>
              <p>Music Artist</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="guest-item">
              <div className="guest-thumb">
                <Image
                  width={306}
                  height={344}
                  src="/images/guest/2.jpg"
                  alt="image"
                />
              </div>
              <h4 className="guest-name">RJ Miron</h4>
              <p>Music Artist</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="guest-item">
              <div className="guest-thumb">
                <Image
                  width={306}
                  height={344}
                  src="/images/guest/3.jpg"
                  alt="image"
                />
              </div>
              <h4 className="guest-name">RJ Miron</h4>
              <p>Music Artist</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="guest-item">
              <div className="guest-thumb">
                <Image
                  width={306}
                  height={344}
                  src="/images/guest/4.jpg"
                  alt="image"
                />
              </div>
              <h4 className="guest-name">RJ Miron</h4>
              <p>Music Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  guest section end
  );
};

export default Gest;
