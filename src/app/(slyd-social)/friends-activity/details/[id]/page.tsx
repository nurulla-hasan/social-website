import SingleFriendActivities from "@/components/FriendsActivity/SingleFriendActivities/SingleFriendActivities";

const FriendsActivitiesDetails = ({ params }: any) => {
  const id = params?.id;

  return (
    <div>
      <SingleFriendActivities id={id} />
    </div>
  );
};

export default FriendsActivitiesDetails;
