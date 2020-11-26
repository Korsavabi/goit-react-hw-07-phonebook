import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterInput } from '../../redux/action/filter';
import { Input } from './StyleFilter';
const FilterForm = () => {
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const inputHandler = ({ target }) => {
    const { value } = target;
    dispatch(filterInput(value))
  }
  return (
    <div>
      <Input in={true} appear={true} type='text' placeholder="Search" name="filter" value={filterValue} onChange={inputHandler} />
    </div>
  );
};

export default FilterForm;