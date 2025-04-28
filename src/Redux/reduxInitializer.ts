// reduxInitializer.ts
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import { saveUserRedux, selectUser } from '@/Redux/slices/auth/userSlice';
import { useEffect } from 'react';

export const ReduxInitializer = () => {
  const dispatch = useAppDispatch();
  const userFromRedux = useAppSelector(selectUser);

  useEffect(() => {
    // Check if user data is already in Redux
    if (userFromRedux && userFromRedux.id !== 0) {
      console.log(
        'User data already present in Redux on app start (via Initializer):',
        userFromRedux
      );
      return; // Don't proceed to check local storage
    }

    // If not in Redux, check local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch(saveUserRedux(parsedUser));
        console.log(
          'User data loaded from local storage into Redux on app start (via Initializer).'
        );
      } catch (error) {
        console.error(
          'Error parsing user data from local storage on app start (via Initializer):',
          error
        );
        localStorage.removeItem('user');
      }
    }
  }, [dispatch, userFromRedux]);

  // This component doesn't need to render anything visible, so we return null
  return null;
};
