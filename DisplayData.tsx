import React from "react";

type DisplayDataProps = {
    data: any;
};

const DisplayData: React.FC<DisplayDataProps> = ({ data }) => {
    return (
        <div style={{ color: "white", padding: "10px", backgroundColor: "#333" }}>
            {/* Check if data exists and display it */}
            {data ? JSON.stringify(data, null, 2) : "No data fetched yet."}
        </div>
    );
};

export default DisplayData;
