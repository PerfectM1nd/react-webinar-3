import './style.css';
import {usePagination} from "../../../hooks/use-pagination";
import PaginationButton from "../pagination-button";
import PaginationDots from "../pagination-dots";

function PaginationButtons() {
  const {
    pagesCount,
    currentPageNumber
  } = usePagination();

  const showButton = (pageNumber) => {
    if (pageNumber === 1 || pageNumber === pagesCount) return true;
    if (currentPageNumber <= 3 && pageNumber <= 3) return true;
    if (currentPageNumber > pagesCount - 3 && pageNumber > pagesCount - 3) return true;
    return pageNumber === currentPageNumber ||
      pageNumber === currentPageNumber - 1 ||
      pageNumber === currentPageNumber + 1;
  }

  const showDots = (pageNumber) => {
    if (pageNumber === 1 && currentPageNumber > 3) return true;
    return (pageNumber === pagesCount - 1) && (currentPageNumber < pagesCount - 2);
  }

  return (
    <div className="PaginationButtons">
      {
        [...Array(pagesCount)].map((_, index) => {
          const pageNumber = index + 1;
          return <>
            {
              showButton(pageNumber) && <PaginationButton pageNumber={pageNumber}/>
            }
            {
              showDots(pageNumber) && <PaginationDots />
            }
          </>;
        })
      }
    </div>
  );
}

export default PaginationButtons;

