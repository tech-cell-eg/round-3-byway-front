import { InstructorAccCreate } from '@/components/Auth/InstructorAccCreate';
import { InstructorCreateFull } from '@/components/Auth/InstructorCreateFull';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
// placeholder
interface UserData {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  userName: string;
}

// test
export const InstructorSignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);
  //   check user role
  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const pasredData = JSON.parse(storedData);
      setUser(pasredData);
    }
  }, []);

  if (user?.role === 'instructor') {
    navigate('/profile');
    toast.warn('You are already logged in as an instructor');
  } else if (user?.role === 'student') {
    return <InstructorAccCreate />;
  } else if (!user) {
    return <InstructorCreateFull />;
  }
};
