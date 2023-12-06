import {cn as bem} from '@bem-react/classname';
import './style.css';
import {usePagination} from "../../../hooks/use-pagination";
import PropTypes from "prop-types";
import {memo} from "react";

function PaginationButton({pageNumber}) {
  const cn = bem('PaginationButton');

  const {
    handlePageSwitch,
    currentPageNumber
  } = usePagination();

  const handleClick = () => {
    handlePageSwitch(pageNumber)
  }

  const isActive = () => {
    return pageNumber === currentPageNumber;
  }

  return (
    <div role="button" className={cn({active: isActive()})} onClick={handleClick}>
      {pageNumber}
    </div>
  );
}

PaginationButton.propTypes = {
  pageNumber: PropTypes.number.isRequired
};

export default memo(PaginationButton);
