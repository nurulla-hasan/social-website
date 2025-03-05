import CardParent from "./homeTopData/CardParent";
import NewAribal from "./newAribal/NewAribal";
import PopularEvent from "./PopularData/CardParent";
import RandomEvent from "./random/RandomData";

const HomeCom = () => {
  return (
    <div className="my-7">
      <CardParent />

      <div className="mt-12">
        <div className="flex items-center justify-center py-3">
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-xl w-[12.5%]">
            Popular Activities
          </p>

          <div className="w-full h-[1px] bg-[#1c1c1c]"></div>
        </div>
        <PopularEvent />
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-center py-3">
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-xl w-[12.5%]">
            Nearby Activities
          </p>

          <div className="w-full h-[1px] bg-[#1c1c1c]"></div>
        </div>
        <RandomEvent />
      </div>
      <div className="mt-12">
        <div className="flex items-center justify-center py-3">
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-xl w-[12.5%]">
            Feeds Activities
          </p>

          <div className="w-full h-[1px] bg-[#1c1c1c]"></div>
        </div>

        <NewAribal />
      </div>
    </div>
  );
};

export default HomeCom;
