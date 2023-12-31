import { radioJockeys } from "@/../public/data/radioJockey";
import ExpertRjCardOne from "@/components/shared/ExpertRJCardOne";
import ExpertRj from "@/components/shared/ExpertRj";
import Link from "next/link";

const Rj = () => {
  return (
    <ExpertRj>
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
    </ExpertRj>
  );
};

export default Rj;
