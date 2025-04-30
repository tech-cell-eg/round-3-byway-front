// LessonsDashboard.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavLinks from '../NavLinks';

type Lesson = {
  id: number;
  number: number;
  duration: string;
  type: 'video' | 'text';
  content: string;
  description: string;
};

const DataLessons: Lesson[] = [
  {
    id: 1,
    number: 1,
    duration: '10:23',
    type: 'video',
    content: 'https://youtu.be/7HUCAYMylCQ?si=fgPSbwBN8SmSufoc',
    description: 'Introduction to the section',
  },
  {
    id: 2,
    number: 2,
    duration: '5:10',
    type: 'text',
    content: 'https://youtu.be/7HUCAYMylCQ?si=fgPSbwBN8SmSufoc',
    description: 'Text-based lesson about fundamentals.',
  },
];

export default function SectionLessons() {
  const { sectionId } = useParams();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [showDetails, setShowDetails] = useState<Lesson | null>(null);
  const [editLesson, setEditLesson] = useState<Lesson | null>(null);
  const [deleteLessonId, setDeleteLessonId] = useState<number | null>(null);

  useEffect(() => {
    setLessons(DataLessons);
  }, []);

  const handleDelete = () => {
    if (deleteLessonId !== null) {
      setLessons(prev => prev.filter(l => l.id !== deleteLessonId));
      setDeleteLessonId(null);
    }
  };

  const handleSaveEdit = () => {
    if (editLesson) {
      setLessons(prev =>
        prev.map(l => (l.id === editLesson.id ? editLesson : l))
      );
      setEditLesson(null);
    }
  };

  return (
    <>
      <NavLinks />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          Lessons for Section {sectionId}
        </h2>
        <button
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => {
            const newLesson: Lesson = {
              id: Date.now(),
              number: lessons.length + 1,
              duration: '00:00',
              type: 'video',
              content: '',
              description: 'New Lesson Description',
            };
            setLessons([...lessons, newLesson]);
          }}
        >
          + Add Lesson
        </button>

        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Number in the course</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Content</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map(lesson => (
              <tr key={lesson.id}>
                <td className="border p-2 text-center">{lesson.id}</td>
                <td className="border p-2 text-center">{lesson.number}</td>
                <td className="border p-2 text-center">{lesson.duration}</td>
                <td className="border p-2 text-center">{lesson.type}</td>
                <td className="border p-2 max-w-xs truncate">
                  {lesson.content}
                </td>
                <td className="border p-2 max-w-xs truncate">
                  {lesson.description}
                </td>
                <td className="border p-2 text-center">
                  <button
                    className="text-blue-600 mr-2"
                    onClick={() => setShowDetails(lesson)}
                  >
                    Details
                  </button>
                  <button
                    className="text-green-600 mr-2"
                    onClick={() => setEditLesson(lesson)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => setDeleteLessonId(lesson.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Details Modal */}
        {showDetails && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[600px] max-w-full space-y-4">
              <h3 className="text-lg font-bold">Lesson Details</h3>
              <p>
                <strong>ID:</strong> {showDetails.id}
              </p>
              <p>
                <strong>Duration:</strong> {showDetails.duration}
              </p>
              <p>
                <strong>Description:</strong> {showDetails.description}
              </p>
              {showDetails.type === 'video' ? (
                <iframe
                  src={showDetails.content}
                  title="Lesson Video"
                  className="w-full aspect-video rounded border"
                  allowFullScreen
                />
              ) : (
                <p>{showDetails.content}</p>
              )}
              <button
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                onClick={() => setShowDetails(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editLesson && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[600px] max-w-full space-y-4">
              <h3 className="text-lg font-bold">Edit Lesson</h3>
              <input
                value={editLesson.description}
                onChange={e =>
                  setEditLesson({ ...editLesson, description: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Description"
              />
              <input
                value={editLesson.content}
                onChange={e =>
                  setEditLesson({ ...editLesson, content: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Content"
              />
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setEditLesson(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {deleteLessonId && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[400px] space-y-4">
              <h3 className="text-lg font-bold">Confirm Delete</h3>
              <p>Are you sure you want to delete lesson #{deleteLessonId}?</p>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setDeleteLessonId(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
