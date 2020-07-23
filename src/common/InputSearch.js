import React from "react";
import { Input } from "semantic-ui-react";

const InputSearch = () => (
  <Input
    className="search-bar"
    icon={{ name: "search", circular: true, link: true }}
    placeholder="Search..."
  />
);

export default InputSearch;
