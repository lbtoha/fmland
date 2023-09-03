import previousShowData from "@/../public/data/previousShowData";
import PreviousShowCard from "./PreviousShowCard";

const PreviousShow = () => {
  return (
    //   previous show section start
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">Yesterday</span>
              <h2 className="section-title">Previous shows </h2>
            </div>
          </div>
        </div>
        {/*  row end  */}
        <div className="row gy-4 justify-content-center">
          {previousShowData.map(
            ({ id, image, artistImage, showName, artistName }) => (
              <PreviousShowCard
                key={id}
                image={image}
                artistImage={artistImage}
                showName={showName}
                artistName={artistName}
              />
            )
          )}
        </div>
      </div>
    </section>
    //   {/*  previous show section end  */}
  );
};

export default PreviousShow;
