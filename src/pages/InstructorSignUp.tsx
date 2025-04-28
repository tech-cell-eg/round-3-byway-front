import { InstructorAccCreate } from '@/components/Auth/InstructorAccCreate';
import { InstructorCreateFull } from '@/components/Auth/InstructorCreateFull';
import { useAppSelector } from '@/Redux/reduxHooks';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
// placeholder

// test
export const InstructorSignUp = () => {
  const navigate = useNavigate();
  //   check user role

  const role = useAppSelector(state => state.user.role);
  const userToken = useAppSelector(state => state.user.token);

  if (role === 'instructor') {
    navigate('/profile');
    toast.warn('You are already logged in as an instructor');
  } else if (role === 'student') {
    return <InstructorAccCreate />;
  } else if (!userToken) {
    return <InstructorCreateFull />;
  }
};
