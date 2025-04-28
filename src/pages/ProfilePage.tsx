import Reviews from '@/components/Profile/Reviews';
import InputDataForm from '@/components/Profile/inputDataForm';
import InputPhotoForm from '@/components/Profile/inputPhotoForm';

const ProfilePage = () => {
  return (
    <>
      <InputDataForm />
      <InputPhotoForm />
      {/* For My Reviews Section  in Sidebar */}
      <Reviews />
    </>
  );
};

export default ProfilePage;
