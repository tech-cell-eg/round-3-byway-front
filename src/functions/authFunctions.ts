// singout
export const signOut = () => {
  localStorage.removeItem('user');

  window.location.href = '/';
};
