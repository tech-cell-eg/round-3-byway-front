// import axios from "axios";
import { useState } from 'react';
import NavLinks from '../NavLinks';

const sectionData = [
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

export default function CourseSections() {
  //   const [sections, setSections] = useState(mockSections);
  //   const [loading, setLoading] = useState(false);
  const [editingSectionId, setEditingSectionId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');

  //   useEffect(() => {
  //     const fetchSections = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await axios.get("https://your-api.com/sections");
  //         setSections(response.data);
  //       } catch (error) {
  //         console.error("Error fetching sections:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //   }, []);

  return (
    <>
      <NavLinks />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            + Add Section
          </button>
        </div>

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
            {sectionData.map((section, idx) => (
              <tr key={section.id}>
                <td className="border p-2 text-center">{idx + 1}</td>
                <td className="border p-2">
                  {editingSectionId === section.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        value={editedName}
                        onChange={e => setEditedName(e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                      />
                      <button className="text-green-600 hover:underline">
                        Save
                      </button>
                      <button
                        className="text-gray-500 hover:underline"
                        onClick={() => setEditingSectionId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    section.name
                  )}
                </td>
                <td className="border p-2 text-center">{section.duration}</td>
                <td className="border p-2 text-center">
                  {section.lessonsCount}
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      setEditingSectionId(section.id);
                      setEditedName(section.name);
                    }}
                    className="text-blue-600 hover:underline mr-2 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline mr-2 cursor-pointer">
                    Delete
                  </button>
                  <button className="text-green-600 hover:underline cursor-pointer">
                    Lessons
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
