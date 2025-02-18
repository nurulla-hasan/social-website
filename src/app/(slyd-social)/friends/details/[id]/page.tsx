import SingleFriends from "@/components/friends/filters/SingleFriends/SingleFriends";

const FriendDetails = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <SingleFriends id={id} />
    </div>
  );
};

export default FriendDetails;
