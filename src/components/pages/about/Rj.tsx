import ExpertRj from "@/components/shared/ExpertRj";
import { radioJockeys } from "../../../../public/data/radioJockey";
import ExpertRjCardTwo from "../../shared/ExpertRjCardTwo";

const Rj = () => {
  return (
    <ExpertRj>
      <div className="row gy-4">
        {radioJockeys.slice(0, 4).map(({ id, name, title, image }) => (
          <ExpertRjCardTwo key={id} name={name} title={title} image={image} />
        ))}
      </div>
    </ExpertRj>
  );
};

export default Rj;
