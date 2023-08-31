import ExpertRjCardOne from "@/components/shared/ExpertRJCardOne";
import Image from "next/image";
import Link from "next/link";
import { radioJockeys } from "../../../../public/data/radioJockey";

const Rj = () => {
  return (
    <section className="pt-120 pb-120 position-relative z-index2">
      <div className="left-plus">
        <Image
          width={321}
          height={184}
          src="/images/elements/left-plus.png"
          alt="image"
        />
      </div>
      <div className="bottom-line">
        <Image
          width={80}
          height={649}
          src="/images/elements/bottom-line.png"
          alt="image"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-top">
              <span className="top-title">RJ</span>
              <h2 className="section-title">Our Expert RJ</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {radioJockeys.slice(0, 4).map(({ id, name, title, image }) => (
            <ExpertRjCardOne key={id} name={name} title={title} image={image} />
          ))}
        </div>
        <div className="text-center mt-50">
          <Link href="radio-jockey" className="btn btn-main">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rj;
