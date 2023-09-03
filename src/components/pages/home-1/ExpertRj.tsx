import { radioJockeys } from "@/../public/data/radioJockey";
import ExpertRj from "@/components/shared/ExpertRj";
import Link from "next/link";
import ExpertRjCard from "./ExpertRjCard";

const ExpertRjHome = () => {
  return (
    <ExpertRj>
      {/*  row end  */}
      <div className="row gy-4 justify-content-center">
        {radioJockeys.slice(0, 4).map(({ id, image, name }) => (
          <ExpertRjCard key={id} image={image} name={name} />
        ))}
      </div>
      {/*  row end  */}

      <div className="text-center mt-50">
        <Link href="radio-jockey" className="btn btn-main">
          Explore More
        </Link>
      </div>
    </ExpertRj>
  );
};

export default ExpertRjHome;
