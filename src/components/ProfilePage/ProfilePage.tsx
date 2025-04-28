import InputDataForm from './inputDataForm';
import InputPhotoForm from './inputPhotoForm';
import ProfileLinks from './ProfileLinks';

const ProfilePage = () => {
  return (
    <>
      <div className="lg:ps-7">
        <InputDataForm />
        <InputPhotoForm />
        <ProfileLinks />
      </div>
    </>
  );
};

export default ProfilePage;
