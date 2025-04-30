import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavLinks from '../NavLinks';

interface Section {
  id: number;
  name: string;
  duration: string;
  date: string;
  lessonsCount: number;
}

const DataSections: Section[] = [
  {
    id: 1,
    name: 'The Solid State',
    duration: '45 min',
    date: '15 May 2020 9:00 am',
    lessonsCount: 3,
  },
  {
    id: 2,
    name: 'Solutions',
    duration: '45 min',
    date: '15 May 2020 9:00 am',
    lessonsCount: 7,
  },
  {
    id: 3,
    name: 'Electrochemistry',
    duration: '45 min',
    date: '15 May 2020 9:00 am',
    lessonsCount: 7,
  },
  {
    id: 4,
    name: 'Chemical Kinetics',
    duration: '45 min',
    date: '15 May 2020 9:00 am',
    lessonsCount: 7,
  },
  {
    id: 5,
    name: 'Surface Chemistry',
    duration: '45 min',
    date: '15 May 2020 9:00 am',
    lessonsCount: 7,
  },
];

const CourseSections = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSectionId, setEditingSectionId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');
  const [deleteLessonId, setDeleteLessonId] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setSections(DataSections);
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = () => {
    if (deleteLessonId !== null) {
      setSections(prev => prev.filter(s => s.id !== deleteLessonId));
      setDeleteLessonId(null);
    }
  };

  return (
    <>
      <NavLinks />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => {
              const newSection: Section = {
                id: Date.now(),
                name: 'New Section',
                duration: '30 min',
                date: new Date().toLocaleString(),
                lessonsCount: 0,
              };
              setSections(prev => [...prev, newSection]);
            }}
          >
            + Add Section
          </button>
        </div>

        {loading ? (
          <p>Loading sections...</p>
        ) : (
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Chapter</th>
                <th className="border p-2 text-left">Title</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2">Number of Lessons</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, idx) => (
                <tr key={section.id}>
                  <td className="border p-2 text-center">{idx + 1}</td>
                  <td className="border p-2">{section.name}</td>
                  <td className="border p-2 text-center">{section.duration}</td>
                  <td className="border p-2 text-center">
                    {section.lessonsCount}
                  </td>
                  <td className="border p-2 text-center">
                    {editingSectionId === section.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          value={editedName}
                          onChange={e => setEditedName(e.target.value)}
                          className="border rounded px-2 py-1 w-full"
                        />
                        <button
                          onClick={() => {
                            setSections(prev =>
                              prev.map(s =>
                                s.id === section.id
                                  ? { ...s, name: editedName }
                                  : s
                              )
                            );
                            setEditingSectionId(null);
                          }}
                          className="text-green-600 hover:underline"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingSectionId(null)}
                          className="text-gray-600 hover:underline"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 justify-center">
                        <button
                          onClick={() => {
                            setEditingSectionId(section.id);
                            setEditedName(section.name);
                          }}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteLessonId(section.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() =>
                            navigate(`/dashboard/lessons/${section.id}`)
                          }
                          className="text-green-600 hover:underline"
                        >
                          Lessons
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Delete Modal*/}
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
};

export default CourseSections;
