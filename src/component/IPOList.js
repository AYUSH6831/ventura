// components/IPOListPage.js
import React from "react";
import { Link } from "react-router-dom";

const IPOListPage = () => {
  // Dummy IPO data
  const IPOs = [
    {
      id: 1,
      company: "GO AIR",
      issueDate: "4th-7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvestQty: "₹50,000 100 Shares/5 Lots",
    },
    {
      id: 2,
      company: "BAJAJ ENERGY",
      issueDate: "4th-7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvestQty: "₹50,000 100 Shares/5 Lots",
    },
    {
      id: 3,
      company: "OYO",
      issueDate: "To be announced",
      issueSize: "₹23600 Crores",
      priceRange: "₹250-60",
      minInvestQty: "₹50,000 100 Shares/5 Lots",
    },
  ];

  return (
    <div>
      <h1>IPO List</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Issue Date</th>
            <th>Issue Size</th>
            <th>Price Range</th>
            <th>Min Invest/Qty</th>
          </tr>
        </thead>
        <tbody>
          {IPOs.map((ipo) => (
            <tr key={ipo.id}>
              <td>
                <Link to={`/ipo/${ipo.id}`}>{ipo.company}</Link>
              </td>
              <td>{ipo.issueDate}</td>
              <td>{ipo.issueSize}</td>
              <td>{ipo.priceRange}</td>
              <td>{ipo.minInvestQty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPOListPage;
