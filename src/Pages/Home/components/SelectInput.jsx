import React from "react";
import { Select } from "antd";

const SelectInput = () => (
  <Select
    showSearch
    style={({ width: 440 }, { height: 45 })}
    placeholder="Please choose your type"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    options={[
      {
        value: "1",
        label: "Hostel",
      },
      {
        value: "2",
        label: "Apartment",
      },
      {
        value: "3",
        label: "Hotel",
      },
      {
        value: "4",
        label: "Villa",
      },
      {
        value: "5",
        label: "Mini Hotel",
      },
      {
        value: "6",
        label: "Gest House",
      },
    ]}
  />
);

export default SelectInput;
