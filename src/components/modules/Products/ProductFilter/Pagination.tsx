"use client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  meta,
}: {
  meta: { page: number; totalPage: number };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      {meta.page > 1 && (
        <Button
          variant="outline"
          onClick={() => handlePageChange(meta.page - 1)}
        >
          Previous
        </Button>
      )}

      {Array.from({ length: Math.min(5, meta.totalPage) }, (_, i) => {
        let pageNum;
        if (meta.totalPage <= 5) {
          pageNum = i + 1;
        } else if (meta.page <= 3) {
          pageNum = i + 1;
        } else if (meta.page >= meta.totalPage - 2) {
          pageNum = meta.totalPage - 4 + i;
        } else {
          pageNum = meta.page - 2 + i;
        }
        return (
          <Button
            key={pageNum}
            variant={meta.page === pageNum ? "default" : "outline"}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </Button>
        );
      })}

      {meta.page < meta.totalPage && (
        <Button
          variant="outline"
          onClick={() => handlePageChange(meta.page + 1)}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
