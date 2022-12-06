import React from "react";
import { SimpleForm } from "../../common/templeate-forms";
import { formSearch } from './render'

function SearchForm(props) {
  return <SimpleForm fields={formSearch} {...props} />;
}

export default SearchForm;
