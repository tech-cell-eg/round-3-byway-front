import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiStar } from 'react-icons/fi';

const filters = [
  { id: 'rating', label: 'Rating' },
  { id: 'sections', label: 'Number of Sections' },
  { id: 'price', label: 'Price' },
  { id: 'category', label: 'Category' },
];

type FilterProps = {
  onReset: () => void;
};

function Filter({ onReset }: FilterProps) {
  const [openSection, setOpenSection] = useState('rating');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 300]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ['Web Development', 'Design', 'Marketing', 'Data Science'];

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? '' : id));
  };

  const handleCheckboxChange = (
    value: string,
    selectedList: string[],
    setSelectedList: (list: string[]) => void
  ): void => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter(v => v !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  const reset = () => {
    setSelectedRating(null);
    setSelectedSections([]);
    setPriceRange([0, 100]);
    setSelectedCategories([]);
    onReset();
  };

  return (
    <div className="w-full max-w-xs p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <button
          onClick={reset}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Reset
        </button>
      </div>

      {filters.map(({ id, label }) => (
        <div key={id}>
          <div className="flex justify-between items-center">
            <button
              onClick={() => toggleSection(id)}
              className="w-full text-left font-semibold text-base text-gray-800 mb-3 flex items-center"
            >
              {label}
              {openSection === id ? (
                <FiChevronUp className="ml-2 text-gray-600" />
              ) : (
                <FiChevronDown className="ml-2 text-gray-600" />
              )}
            </button>
          </div>

          <AnimatePresence>
            {openSection === id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden space-y-4"
              >
                {id === 'rating' &&
                  [5, 4, 3, 2, 1].map(stars => (
                    <button
                      key={stars}
                      onClick={() => setSelectedRating(stars)}
                      className={`flex items-center space-x-2 transition-all hover:scale-105 hover:translate-x-1 cursor-pointer ${
                        selectedRating === stars ? 'scale-105' : 'opacity-80'
                      }`}
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`h-5 w-5 ${
                              i < stars
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </button>
                  ))}
                {id === 'rating' && <hr className="border-gray-200" />}

                {id === 'sections' &&
                  ['1-5', '6-10', '11-15', '16+'].map(range => (
                    <div key={range} className="flex items-center space-x-3">
                      <Checkbox
                        id={range}
                        checked={selectedSections.includes(range)}
                        onCheckedChange={() =>
                          handleCheckboxChange(
                            range,
                            selectedSections,
                            setSelectedSections
                          )
                        }
                        className="h-5 w-5 shadow-md"
                      />
                      <label htmlFor={range} className="text-sm text-gray-700">
                        {range}
                      </label>
                    </div>
                  ))}
                {id === 'sections' && <hr className="border-gray-200" />}

                {id === 'price' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg text-gray-700">Min</span>
                        <input
                          type="checkbox"
                          id="price"
                          checked={priceRange[0] > 0}
                          onChange={() => setPriceRange([0, priceRange[1]])}
                          className="h-5 w-5 shadow-md"
                        />
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg text-gray-700">Max</span>
                        <input
                          type="checkbox"
                          id="price"
                          checked={priceRange[1] > 0}
                          onChange={() => setPriceRange([priceRange[0], 0])}
                          className="h-5 w-5 shadow-md"
                        />
                      </div>
                    </div>

                    <Button
                      variant="default"
                      size="sm"
                      className="w-full bg-gray-500 hover:bg-gray-600 text-white rounded-2xl shadow-lg py-2 transition-all active:scale-95"
                      onClick={() =>
                        console.log('Apply Price Filter:', priceRange)
                      }
                    >
                      Apply Filter
                    </Button>
                  </div>
                )}
                {id === 'price' && <hr className="border-gray-200" />}

                {id === 'category' &&
                  categories.map(cat => (
                    <div key={cat} className="flex items-center space-x-3">
                      <Checkbox
                        id={cat}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={() =>
                          handleCheckboxChange(
                            cat,
                            selectedCategories,
                            setSelectedCategories
                          )
                        }
                        className="h-5 w-5 shadow-md"
                      />
                      <label htmlFor={cat} className="text-sm text-gray-700">
                        {cat}
                      </label>
                    </div>
                  ))}
                {id === 'category' && <hr className="border-gray-200" />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function FilterAndSort() {
  const handleReset = () => {
    console.log('Filters reset');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <Filter onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}
