import HostDetailsCom from "@/components/host/HostDetailsCom";

const HostDetails = ({ params }: any) => {
  const id = params?.id;

  return (
    <div>
      <HostDetailsCom id={id} />
    </div>
  );
};

export default HostDetails;
