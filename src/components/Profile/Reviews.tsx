import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Icon from '../Icon';

type Review = {
  id: number;
  courseName: string;
  rating: number;
  review: string;
};

const initialReviews: Review[] = [
  {
    id: 1,
    courseName: "Beginner's Guide to Design",
    rating: 5,
    review:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
  },
  {
    id: 2,
    courseName: "Beginner's Guide to Design",
    rating: 5,
    review:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
  },
  {
    id: 3,
    courseName: "Beginner's Guide to Design",
    rating: 5,
    review:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
  },
  {
    id: 4,
    courseName: "Beginner's to Design",
    rating: 5,
    review:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
  },
  {
    id: 5,
    courseName: "Beginner's to Design",
    rating: 5,
    review:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
  },
  {
    id: 6,
    courseName: "Beginner's Guide to Design",
    rating: 5,
    review:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingReviewId, setEditingReviewId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>('');
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);

  const reviewsPerPage = 3;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleDelete = (id: number) => {
    const updatedReviews = reviews.filter(review => review.id !== id);
    setReviews(updatedReviews);
    setMenuOpenId(null);
  };

  const handleEdit = (review: Review) => {
    setEditingReviewId(review.id);
    setEditedText(review.review);
    setMenuOpenId(null);
  };

  const handleSave = (id: number) => {
    const updatedReviews = reviews.map(review =>
      review.id === id ? { ...review, review: editedText } : review
    );
    setReviews(updatedReviews);
    setEditingReviewId(null);
    setEditedText('');
  };

  return (
    <div className="mt-10 lg:ms-7">
      <h2 className="text-xl font-bold mb-6">Reviews ({reviews.length})</h2>

      <div className="space-y-6">
        {currentReviews.map(review => (
          <div
            key={review.id}
            className="border border-gray-300 rounded-2xl p-6 shadow-sm bg-white relative"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-4">
                <p className="text-sm text-gray-900">Course Name:</p>
                <p className="font-bold">{review.courseName}</p>
              </div>

              {/* Edit and Delete BTN*/}
              <div className="relative">
                <button
                  className="text-gray-900 hover:text-gray-600 cursor-pointer"
                  onClick={() =>
                    setMenuOpenId(menuOpenId === review.id ? null : review.id)
                  }
                >
                  <span className="text-2xl">...</span>
                </button>

                {/* Dropdown Menu */}
                {menuOpenId === review.id && (
                  <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleEdit(review)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4 mb-3">
              <p className="text-sm text-gray-900">Rating:</p>
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Icon
                  key={idx}
                  name="star"
                  className="text-yellow-400 fill-yellow-400"
                  size={18}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <p className="text-sm text-gray-900 mb-1">Review:</p>
              {editingReviewId === review.id ? (
                <div className="flex flex-col w-full gap-2">
                  <textarea
                    value={editedText}
                    onChange={e => setEditedText(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                  />
                  <button
                    onClick={() => handleSave(review.id)}
                    className="self-end bg-blue-600 text-white text-sm py-1 px-3 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p className="text-gray-700">{review.review}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePreviousPage}
                className="cursor-pointer"
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <PaginationItem key={idx}>
                <button
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === idx + 1
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {idx + 1}
                </button>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={handleNextPage}
                className="cursor-pointer"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Reviews;
