import defualtImg from '@/assets/InstructorImg.png';
import { ShareSection } from './ShareSection';
import ProfileCards from './Profilecards';
import { useEffect, useState } from 'react';

export default function PersonProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setFirstName(user.first_name || 'user');
        setLastName(user.last_name || 'name');
      } catch (e) {
        console.error('Failed to parse user data:', e);
      }
    }
  }, []);
  return (
    <div>
      <div className="bg-surface-light-secondary rounded-2xl">
        <div className="flex-col items-center text-center pt-5">
          <img
            src={defualtImg}
            className="rounded-full w-[200px] mx-auto h-[200px] min-w-[100px] min-h-[100px]"
          />
          <h6 className="py-5 font-bold text-xl">
            <span>
              {firstName} {lastName}
            </span>
          </h6>
          <ShareSection />
          <ProfileCards />
        </div>
      </div>
    </div>
  );
}
