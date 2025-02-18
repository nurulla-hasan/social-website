import SingleYourActivities from "@/components/YourActivities/SingleYourAnActivities/SingleYourAnActivities";

const page = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <SingleYourActivities id={id} />
    </div>
  );
};

export default page;
