// EditCourseDetails.tsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/Redux/slices/auth/userSlice';

const EditCourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    video_url: '',
    price: '',
    discountPrice: '',
    language: '',
    cc: [] as string[],
    level: '',
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `https://lms.digital-vision-solutions.com/api/courses/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await res.json();
        setFormData({
          title: data.data.course.title,
          description: data.data.course.description,
          imageUrl: data.data.course.image,
          video_url: data.data.course.video_url,
          price: data.data.course.price || '',
          discountPrice: data.data.course.discountPrice || '',
          language: data.data.course.language || '',
          cc: data.data.course.cc || [],
          level: data.data.course.level || '',
        });
      } catch (err) {
        console.error('Failed to load course:', err);
      }
    };

    fetchCourse();
  }, [courseId, user.token]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    fetch(`/api/courses/${courseId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => navigate(`/courses/${courseId}`))
      .catch(() => alert('Error updating course.'));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://lms.digital-vision-solutions.com/api/courses/${courseId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            image: formData.imageUrl,
            video_url: formData.video_url,
            price: formData.price,
            discountPrice: formData.discountPrice,
            language: formData.language,
            cc: formData.cc,
            level: formData.level,
          }),
        }
      );
      const result = await res.json();
      if (result.success) {
        alert('Course updated!');
      } else {
        alert('Update failed');
      }
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleCancel = () => navigate('/ProfilePage');

  return (
    <div className="max-w-6xl mx-auto bg-[#f9fafb] p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Details</h2>
        <div className="space-x-2">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>

      <div
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Left Side */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block mb-1">Course Name</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block mb-1 font-medium">
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="https://url.com"
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              Please enter a valid URL{' '}
            </p>
          </div>

          <div className="mt-6">
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={10}
              className="w-full border p-2 rounded resize-none"
              placeholder="Write course description..."
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Course Price</label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Discount Price (Optional)</label>
            <input
              name="discountPrice"
              value={formData.discountPrice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select language</option>
              <option>English</option>
              <option>Arabic</option>
              <option>Spanish</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">CC</label>
            <div className="flex flex-wrap gap-2 border p-2 rounded bg-white">
              {formData.cc.map((lang, idx) => (
                <span
                  key={idx}
                  className="flex bg-gray-100 text-sm px-2 py-1 rounded-[4px]"
                >
                  {lang} <X className="text-sm cursor-pointer" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1">Level</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full border p-2 rounded text-yellow-600"
            >
              <option value="">Select level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourseDetails;
