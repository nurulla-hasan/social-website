"use client";

import { Tabs } from "antd";
import { useState } from "react";
import Follower from "./tabs/Follower";
import Following from "./tabs/Following";

const { TabPane } = Tabs;

const LikeCom: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("likes-received");

  return (
    <Tabs
      activeKey={selectedTab}
      onChange={setSelectedTab}
      className="text-white custom-tabs"
      style={{ color: "#fff" }}
    >
      {/* Likes Received Tab */}
      <TabPane
        tab={<span className="font-semibold">Likes Received</span>}
        key="likes-received"
      >
        <Follower />
      </TabPane>

      {/* Liked Profiles Tab */}
      <TabPane
        tab={<span className="font-semibold tab-label">Liked Profiles</span>}
        key="liked-profiles"
      >
        <Following />
      </TabPane>
    </Tabs>
  );
};

export default LikeCom;
