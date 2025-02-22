import ProfileDetails from "@/components/profile/details/ProfileDetails";

const UserProfile = ({ params }: any) => {
  const id = params?.id;

  return (
    <div>
      <ProfileDetails id={id} />
    </div>
  );
};

export default UserProfile;
