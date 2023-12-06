import {useSearchParams} from "react-router-dom";
import useSelector from "../store/use-selector";

export function usePagination(limit = 10) {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalItemsCount = useSelector(state => state.catalog.totalItemsCount);

  const handlePageSwitch = (pageNumber) => {
    if (pageNumber === 1) {
      setSearchParams([]);
      return;
    }
    setSearchParams(params => {
      params.set("page", pageNumber);
      return params;
    });
  }

  const currentPageNumber = Number.parseInt(searchParams.get('page')) || 1;

  const pagesCount = Math.ceil(totalItemsCount / limit);

  const skip = (currentPageNumber === 1) ? 0 : (currentPageNumber * limit - limit);

  return {
    handlePageSwitch,
    pagesCount,
    currentPageNumber,
    skip,
    limit
  }
}