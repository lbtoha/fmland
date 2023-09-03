import Image from "next/image";
import Link from "next/link";

const RjShows = () => {
  return (
    //     rj shows section start
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-top">
              <h2 className="section-title">RJ Miron Shows</h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row gy-4">
          <div className="col-lg-3 col-sm-6">
            <div className="rj-show-item link-item">
              <Link href="/show-details" className="full-link"></Link>
              <div className="rj-show-thumb">
                <Image
                  width={306}
                  height={250}
                  src="/images/shows/rj-shows/1.jpg"
                  alt="image"
                />
              </div>
              <div className="rj-show-content">
                <h4 className="title">Music of Pop</h4>
                <p className="rj-show-duration">09:00 - 10:00AM </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="rj-show-item link-item">
              <Link href="/show-details" className="full-link"></Link>
              <div className="rj-show-thumb">
                <Image
                  width={306}
                  height={250}
                  src="/images/shows/rj-shows/2.jpg"
                  alt="image"
                />
              </div>
              <div className="rj-show-content">
                <h4 className="title">Music of Pop</h4>
                <p className="rj-show-duration">09:00 - 10:00AM </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="rj-show-item link-item">
              <Link href="/show-details" className="full-link"></Link>
              <div className="rj-show-thumb">
                <Image
                  width={306}
                  height={250}
                  src="/images/shows/rj-shows/3.jpg"
                  alt="image"
                />
              </div>
              <div className="rj-show-content">
                <h4 className="title">Music of Pop</h4>
                <p className="rj-show-duration">09:00 - 10:00AM </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="rj-show-item link-item">
              <Link href="/show-details" className="full-link"></Link>
              <div className="rj-show-thumb">
                <Image
                  width={306}
                  height={250}
                  src="/images/shows/rj-shows/4.jpg"
                  alt="image"
                />
              </div>
              <div className="rj-show-content">
                <h4 className="title">Music of Pop</h4>
                <p className="rj-show-duration">09:00 - 10:00AM </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  rj shows section end  */}
  );
};

export default RjShows;
