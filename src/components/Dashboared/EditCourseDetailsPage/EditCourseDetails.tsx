// EditCourseDetailsPage.tsx
import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import HeaderSection from './HeaderSection';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

interface CourseFormData {
  name: string;
  videoUrl: string;
  imageUrl: string;
  description: string;
  price: number;
  discount?: number;
}

const EditCourseDetailsPage: React.FC = () => {
  const methods = useForm<CourseFormData>();
  const { handleSubmit, reset } = methods;
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await axios.get(`/api/courses/${courseId}`); // ← endpoint #036
        reset(res.data);
      } catch {
        toast.error('Failed to load course data.');
      }
    }
    fetchCourse();
  }, [courseId, reset]);

  const onSubmit = async (data: CourseFormData) => {
    try {
      await axios.put(`/api/courses/${courseId}`, data); // ← endpoint #036_PUT
      toast.success('Course updated successfully!');
      navigate('/coursespage');
    } catch {
      toast.error('Failed to update course.');
    }
  };

  const handleCancel = () => {
    navigate('/coursespage');
  };

  return (
    <div className="bg-gray-100">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <HeaderSection
            onSave={handleSubmit(onSubmit)}
            onCancel={handleCancel}
          />
          <div className="flex gap-8">
            <div className="flex-1">
              <LeftSection />
            </div>
            <div className="w-1/3">
              <RightSection />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditCourseDetailsPage;
