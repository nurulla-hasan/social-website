import { fakeParty } from "@/app/data/FakeData";
import SinglePartyCard from "../FindAnActivities/SinglePartyCard";

const Participated = () => {
  const Party = fakeParty.slice(4, 8);
  return (
    <>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-7 ">
        {Party?.map((party: any, index: number) => (
          <SinglePartyCard data={party} key={index + 1} />
        ))}
      </div>
    </>
  );
};

export default Participated;
