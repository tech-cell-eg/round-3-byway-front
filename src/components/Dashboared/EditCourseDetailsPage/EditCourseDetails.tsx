import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGetQuery } from '@/api/useGetQuery';
import { usePostMutation } from '@/api/usePostMutation';

const EditCourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation(['DashBoard/editcourse']);
  const isRTL = i18n.language === 'ar';

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

  const { data: courseData } = useGetQuery<{
    data: {
      course: {
        title: string;
        description: string;
        image: string;
        video_url: string;
        price: string;
        discountPrice: string;
        language: string;
        cc: string[];
        level: string;
      };
    };
  }>(`/coursespage/${courseId}`, courseId!);
  const { mutateAsync: updateCourse } = usePostMutation(`/courses/${courseId}`);

  useEffect(() => {
    if (courseData?.data?.course) {
      const course = courseData.data.course;
      setFormData({
        title: course.title || '',
        description: course.description || '',
        imageUrl: course.image || '',
        video_url: course.video_url || '',
        price: course.price || '',
        discountPrice: course.discountPrice || '',
        language: course.language || '',
        cc: course.cc || [],
        level: course.level || '',
      });
    }
  }, [courseData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    navigate(`/courses/${courseId}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = (await updateCourse({
        id: courseId!,
        data: {
          title: formData.title,
          description: formData.description,
          image: formData.imageUrl,
          video_url: formData.video_url,
          price: formData.price,
          discountPrice: formData.discountPrice,
          language: formData.language,
          cc: formData.cc,
          level: formData.level,
        },
      })) as { success: boolean };

      if (result.success) {
        console.log('Course updated!');
      } else {
        console.log('Update failed');
      }
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleCancel = () => navigate('/ProfilePage');

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl h-full mx-auto bg-[#f9fafb] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold"> {t('editCourse.Details')}</h2>
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              {t('common.save')}
            </button>
            <button
              onClick={handleCancel}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              {t('common.cancel')}
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left Side */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="block mb-1">{t('editCourse.courseName')}</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block mb-1 font-medium">
                {t('editCourse.imageUrl')}
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
                {t('editCourse.imageUrlPlaceholder')}
              </p>
            </div>

            <div className="mt-6">
              <label className="block mb-1">
                {' '}
                {t('editCourse.description')}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={10}
                className="w-full border p-2 rounded resize-none"
                placeholder={t('editCourse.descriptionPlaceholder')}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1">{t('editCourse.price')}</label>
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
              <label className="block mb-1">{t('editCourse.language')}</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="">{t('editCourse.languagePlaceholder')}</option>
                <option>{t('editCourse.English')}</option>
                <option>{t('editCourse.Arabic')}</option>
                <option>{t('editCourse.Spanish')}</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">CC</label>
              <div className="flex flex-wrap gap-2 border p-5 rounded bg-white">
                {formData.cc.map((lang, idx) => (
                  <span
                    key={idx}
                    className="flex text-black bg-gray-100 text-sm px-2 py-1 rounded-[4px]"
                  >
                    {lang} <X className="text-sm cursor-pointer" />
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-1">{t('editCourse.Level')}</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full border p-2 rounded text-yellow-600"
              >
                <option value="">{t('editCourse.LevelPlaceholder')}</option>
                <option>{t('editCourse.Beginner')}</option>
                <option>{t('editCourse.Intermediate')}</option>
                <option>{t('editCourse.Advanced')}</option>
              </select>
            </div>
            <div className="flex mt-6 justify-center">
              <p>Go to Captures</p>
            </div>
            <div className="mt-10">
              <div className="flex flex-col items-center justify-center text-blue-600 cursor-pointer">
                <Link to="/captures"> Add Section + </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseDetails;
