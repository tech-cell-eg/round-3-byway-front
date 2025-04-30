import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';
import { ReviewCards } from './ReviewCards';

const reviews = [
  {
    rating: 5,
    userName: 'Chris Walter',
    date: '3 days ago',
    comment:
      'I was initially apprehensive, having no prior design experience...',
  },
  {
    rating: 4,
    userName: 'Michel Evans',
    date: '3 days ago',
    comment:
      'I was initially apprehensive, having no prior design experience...',
  },
  {
    rating: 4,
    userName: 'Michel Evans',
    date: '3 days ago',
    comment:
      'I was initially apprehensive, having no prior design experience...',
  },
  {
    rating: 4,
    userName: 'Michel Evans',
    date: '3 days ago',
    comment:
      'I was initially apprehensive, having no prior design experience...',
  },
  {
    rating: 4,
    userName: 'Michel Evans',
    date: '3 days ago',
    comment:
      'I was initially apprehensive, having no prior design experience...',
  },
];

const REVIEWS_PER_PAGE = 3;

export function ReviewList() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const paginatedReviews = reviews.slice(
    (page - 1) * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE
  );

  return (
    <div className="space-y-4">
      {paginatedReviews.map((review, index) => (
        <ReviewCards key={index} {...review} />
      ))}

      <Pagination>
        <PaginationContent className="justify-center">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              className={page === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          <PaginationItem>
            <span className="px-2 text-sm">
              Page {page} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              className={
                page === totalPages ? 'pointer-events-none opacity-50' : ''
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
