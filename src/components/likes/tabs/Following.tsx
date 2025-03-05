import { fakeUser } from "@/app/data/FakeData";
import FindFriendsCard from "@/components/FindFriends/FindFriendsCard";
import { Col, Row } from "antd";

const Following = () => {
  const user = fakeUser?.slice(3);

  return (
    <div>
      <Row gutter={16}>
        {user?.map((user, index: number) => (
          <Col key={index + 1} xs={24} sm={12} md={8} lg={12} xl={8} xxl={6}>
            <FindFriendsCard user={user} key={index + 1} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Following;
