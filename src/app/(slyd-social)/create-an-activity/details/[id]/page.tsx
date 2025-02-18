import SingleCreateAnActivity from "@/components/CreateAnActivity/SingleCreateAnActivity/SingleCreateAnActivity";

const CreateAnActivityDetails = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <SingleCreateAnActivity id={id} />
    </div>
  );
};

export default CreateAnActivityDetails;
