export const validateAdminCreation = (email, password, confirmPassword, secret) => {
  const emailValid = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/
  // const specialCharacter = /[!@#$%^&*(),.?":{}|<>\\/]/g;

  if (!email) throw new Error('Email is required');
  if (!password) throw new Error('Password is required');
  if (!secret) throw new Error('Key is required');
  if (!emailValid.test(email)) throw new Error('invalid email');
  if (password.length <= 6) throw new Error('password must be longer than 6 characters');
  if (password.length >= 20) throw new Error('password must be shorter than 20 characters');
  if (confirmPassword !== password) throw new Error('confirm password must match password');
  return true;
};