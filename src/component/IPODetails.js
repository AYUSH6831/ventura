// components/IPODetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";

const IPODetailsPage = () => {
  const { id } = useParams();

  // Dummy IPO data
  const IPOData = {
    companyName: "OYO",
    description: "OYO Private Limited",
    applyNowLink: "Apply now",
    issueSize: "₹3,600-3,700 Cr.",
    priceRange: "₹100-200",
    issueDates: "12 Dec-15 Dec 22",
    listedOn: "15 Dec 22",
    minimumAmount: "₹50,000",
    listedPrice: "₹150",
    lotSize: "150 shares/lots",
    listingGains: "₹10 (10.0%)",
    timeline: {
      biddingStarts: "12 Dec 2023",
      biddingEnds: "15 Dec 2023",
      allotmentFinalization: "18 Dec 2023",
      refundInitiation: "18 Dec 2023",
      dematTransfer: "18 Dec 2023",
      listingDate: "21 Dec 2023",
    },
  };

  return (
    <div>
      <h1>{IPOData.companyName}</h1>
      <p>{IPOData.description}</p>
      <a href="#">{IPOData.applyNowLink}</a>
      <h2>IPO details</h2>
      <ul>
        <li>
          <strong>Issue size:</strong> {IPOData.issueSize}
        </li>
        <li>
          <strong>Price range:</strong> {IPOData.priceRange}
        </li>
        <li>
          <strong>Issue dates:</strong> {IPOData.issueDates}
        </li>
        <li>
          <strong>Listed on:</strong> {IPOData.listedOn}
        </li>
      </ul>
      <h2>Minimum amount</h2>
      <p>{IPOData.minimumAmount}</p>
      <h2>Listed price</h2>
      <p>{IPOData.listedPrice}</p>
      <h2>Lot size</h2>
      <p>{IPOData.lotSize}</p>
      <h2>Listing gains</h2>
      <p>{IPOData.listingGains}</p>
      <h2>IPO timeline</h2>
      <ul>
        <li>
          <strong>Bidding starts:</strong> {IPOData.timeline.biddingStarts}
        </li>
        <li>
          <strong>Bidding ends:</strong> {IPOData.timeline.biddingEnds}
        </li>
        <li>
          <strong>Allotment finalization:</strong>{" "}
          {IPOData.timeline.allotmentFinalization}
        </li>
        <li>
          <strong>Refund initiation:</strong>{" "}
          {IPOData.timeline.refundInitiation}
        </li>
        <li>
          <strong>Demat transfer:</strong> {IPOData.timeline.dematTransfer}
        </li>
        <li>
          <strong>Listing date:</strong> {IPOData.timeline.listingDate}
        </li>
      </ul>
    </div>
  );
};

export default IPODetailsPage;
