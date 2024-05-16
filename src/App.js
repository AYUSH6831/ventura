import React, { useEffect, useState } from "react";
import IPODetailsPage from "./component/IPODetails";
import "./ResponsiveBreakpointsExample.css"; // Import CSS for styling

function ResponsiveBreakpointsExample() {
  const [IPOs, setIPOs] = useState([]); // State for storing IPO data

  // Mock API call to fetch IPO data
  useEffect(() => {
    // Simulate API response delay
    const fetchIPOs = setTimeout(() => {
      const mockIPOs = [
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
      setIPOs(mockIPOs);
    }, 1000); // Delay set to 1 second to simulate API response time

    // Clean up function to clear timeout in case component unmounts
    return () => clearTimeout(fetchIPOs);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Function to handle click event on IPO link
  function showDetails(id) {
    // Redirect to details page based on id
    window.location.href = `details.html?id=${id}`;
  }

  return (
    <div className="ipo-table-container">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Issue Date</th>
            <th>Issue Size</th>
            <th>Price Range</th>
            <th>Minimum Investment Quantity</th>
          </tr>
        </thead>
        <tbody>
          {IPOs.map((ipo) => (
            <tr key={ipo.id}>
              <td>
                <a
                  href=""
                  onClick={() => showDetails(ipo.id)}
                  className="ipo-link"
                >
                  {ipo.company}
                </a>
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
}

export default ResponsiveBreakpointsExample;
