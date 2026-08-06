import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  page,
  pageCount,
  onPageChange,
  className,
}: {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
}) {
  if (pageCount <= 1) return null;

  return (
    <nav className={cn("flex items-center justify-center gap-2", className)} aria-label="Pagination">
      <Button
        variant="outline"
        size="icon"
        className="rounded-xl"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft />
      </Button>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((value) => (
        <Button
          key={value}
          variant={value === page ? "default" : "outline"}
          size="icon"
          className="rounded-xl"
          aria-current={value === page ? "page" : undefined}
          onClick={() => onPageChange(value)}
        >
          {value}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="rounded-xl"
        aria-label="Next page"
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight />
      </Button>
    </nav>
  );
}
