"use client";

import { fakeParty } from "@/app/data/FakeData";
import SinglePartyCard from "@/components/FindAnActivities/SinglePartyCard";
import { Button, Col, Row, Spin } from "antd"; // Added Button for Load More
import { useState } from "react";

const NewAribal = () => {
  const [partyData, setPartyData] = useState(fakeParty.slice(0, 4)); // Show first 4 items
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  // Fetch more data when Load More button is clicked
  const fetchMoreData = async () => {
    if (loading || allLoaded) return;

    setLoading(true);

    setTimeout(() => {
      const nextBatch = fakeParty.slice(partyData.length, partyData.length + 4);

      if (nextBatch.length > 0) {
        setPartyData((prev) => [...prev, ...nextBatch]);
      } else {
        setAllLoaded(true); // No more data to load
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Row gutter={16}>
        {partyData.map((party, index: number) => (
          <Col
            key={index + 1}
            xs={24}
            sm={12}
            md={8}
            lg={12}
            xl={8}
            xxl={6}
            style={{ marginTop: "15px" }}
          >
            <SinglePartyCard data={party} />
          </Col>
        ))}
      </Row>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center my-4">
          <Spin size="small" />
        </div>
      )}

      {/* Load More Button */}
      {!allLoaded && !loading && (
        <div className="text-center mt-7">
          <Button onClick={fetchMoreData}>Load More</Button>
        </div>
      )}

      {/* No More Data Message */}
      {allLoaded && (
        <p className="text-center mt-4 text-gray-500">No more data available</p>
      )}
    </div>
  );
};

export default NewAribal;
