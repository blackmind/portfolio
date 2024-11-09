import React from "react";

const ExperienceYears: React.FC = () => {
  const startYear = 2008;
  const startMonth = 6; // July (0-indexed, so July is 6)

  const calculateYearsSince = (): number => {
    const now = new Date();
    const years = now.getFullYear() - startYear;
    const months = now.getMonth() - startMonth;

    // Adjust if the current month is earlier than July
    return months < 0 ? years - 1 : years;
  };

  return <span>{`${calculateYearsSince()}`}</span>;
};

export default ExperienceYears;
