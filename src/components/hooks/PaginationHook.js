import { useMemo } from 'react'

const LEFT_PAGE = 'LEFT_PAGE'
const RIGHT_PAGE = 'RIGHT_PAGE'

const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

export const usePagination = ({ totalCount, pageSize, sibilingCount = 1, currentPage}) => {
    
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = sibilingCount + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */

    const leftSiblingIndex = Math.max(currentPage - sibilingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + sibilingCount,
      totalPageCount,
    )
    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * sibilingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, RIGHT_PAGE, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * sibilingCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      )

      return [firstPageIndex, RIGHT_PAGE, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [
        firstPageIndex,
        LEFT_PAGE,
        ...middleRange,
        RIGHT_PAGE,
        lastPageIndex,
      ]
    }
  }, [totalCount, pageSize, sibilingCount, currentPage])

  return paginationRange
}
