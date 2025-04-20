import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TablePagination = ({ totalPage }: { totalPage: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get the current page from the query parameters or default to 1
  const currentPageFromQuery = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(currentPageFromQuery);

  useEffect(() => {
    // Update the current page state when the query parameter changes
    setCurrentPage(currentPageFromQuery);
  }, [currentPageFromQuery]);

  const handlePrev = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      router.push(`${pathname}?page=${prevPage}`);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      const nextPage = currentPage + 1;
      router.push(`${pathname}?page=${nextPage}`);
    }
  };

  const handlePageClick = (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  return (
    <div className="flex items-center justify-center gap-2 my-5">
      {/* Previous Button */}
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <ArrowLeft />
      </Button>

      {/* Page Numbers */}
      {[...Array(totalPage)].map((_, index) => (
        <Button
          onClick={() => handlePageClick(index + 1)}
          key={index}
          size="sm"
          className={`${
            currentPage === index + 1
              ? "bg-purple-500 text-white hover:bg-purple-600"
              : "bg-white text-black hover:bg-white"
          } w-8 h-8 rounded-full flex items-center justify-center cursor-pointer`}
        >
          {index + 1}
        </Button>
      ))}

      {/* Next Button */}
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;
