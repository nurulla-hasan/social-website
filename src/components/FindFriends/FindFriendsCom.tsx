"use client";

import { fakeUser } from "@/app/data/FakeData";
import { Col, Row, Typography } from "antd";
import FriendsFilter from "../friends/filters/Filters";
import FindFriendsCard from "./FindFriendsCard";

const { Title } = Typography;

const user = fakeUser;

const FindFriendsCom = () => {
  return (
    <>
      <div>
        <div className="py-7">
          <FriendsFilter />
        </div>

        <Row gutter={16}>
          {user?.map((user, index: number) => (
            <Col key={index + 1} xs={24} sm={12} md={8} lg={12} xl={8} xxl={6}>
              <FindFriendsCard user={user} key={index + 1} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default FindFriendsCom;
