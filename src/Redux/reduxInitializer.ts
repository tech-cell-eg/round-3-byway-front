// reduxInitializer.ts
import { useAppDispatch } from '@/Redux/reduxHooks';
import { saveUserRedux, setLoadingUser } from '@/Redux/slices/auth/userSlice';
import { useEffect } from 'react';

export const ReduxInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoadingUser(true));

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
        dispatch(setLoadingUser(false));
      }
    } else {
      dispatch(setLoadingUser(false));
    }
  }, [dispatch]);

  return null;
};
