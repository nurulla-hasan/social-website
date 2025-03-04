"use client";

import { fakeUser } from "@/app/data/FakeData";
import { Col, Row, Typography } from "antd";
import FriendsProfileCard from "./FriendsProfileCard";
import FriendsFilter from "./filters/Filters";

const { Title } = Typography;

const user = fakeUser;

const FriendsCom = () => {
  return (
    <div>
      <div className="mt-7">
        <FriendsFilter />
      </div>
      <Row gutter={16}>
        {user?.map((user, index: number) => (
          <Col key={index + 1} xs={24} sm={12} md={8} lg={12} xl={8} xxl={6}>
            <FriendsProfileCard user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FriendsCom;
