import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";

const TimezonePicker: React.FC = () => {
  const [timezone, setTimezone] = useState<string>("Asia/Kolkata");

  return (
    <div>
      <TimezoneSelect
        timezones={[
          "Asia/Kolkata",
          "Asia/Chennai",
          "Asia/Mumbai",
          "Asia/Delhi",
        ]}
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      />
      <p>The selected time zone is {timezone}</p>
    </div>
  );
};

export default TimezonePicker;
