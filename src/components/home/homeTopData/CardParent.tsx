"use client";

import { fakeParty } from "@/app/data/FakeData";
import { useEffect, useRef, useState } from "react";
import Card1 from "./Card1";

const CardParent = () => {
  const [partyData, setPartyData] = useState(fakeParty.slice(0, 4)); // Show first 4 items
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollSpeed = 6; // Scroll speed multiplier

  // Fetch more data when the user scrolls to the end
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

  // Handle smooth horizontal scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelScroll = (event: WheelEvent) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY * scrollSpeed;

      // Trigger fetching more data when reaching near the end of scroll
      if (
        container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 200 &&
        !loading &&
        !allLoaded
      ) {
        fetchMoreData();
      }
    };

    container.addEventListener("wheel", handleWheelScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheelScroll);
    };
  }, [loading, allLoaded]);

  return (
    <div className="overflow-hidden w-full">
      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        {partyData.map((party, index) => (
          <div key={index} className="flex-shrink-0">
            {" "}
            {/* Adjust width as needed */}
            <Card1 data={party} />
          </div>
        ))}
      </div>

      {/* No More Data Message */}
      {allLoaded && (
        <p className="text-center mt-4 text-gray-500">No more data available</p>
      )}
    </div>
  );
};

export default CardParent;
