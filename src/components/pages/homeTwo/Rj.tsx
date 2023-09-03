import ExpertRj from "@/components/shared/ExpertRj";
import ExpertRjCardTwo from "@/components/shared/ExpertRjCardTwo";
import Link from "next/link";
import { radioJockeys } from "../../../../public/data/radioJockey";

const Rj = () => {
  return (
    <ExpertRj>
      <div className="row gy-4">
        {radioJockeys.slice(0, 4).map(({ id, name, title, image }) => (
          <ExpertRjCardTwo key={id} name={name} title={title} image={image} />
        ))}
      </div>
      <div className="text-center mt-50">
        <Link href="/radio-jockey" className="btn btn-main">
          Explore More
        </Link>
      </div>
    </ExpertRj>
  );
};

export default Rj;
