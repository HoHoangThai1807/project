export const setPersisted = ({ name, state }) => {
  if (name && state) return localStorage.setItem(name, JSON.stringify(state));
  throw new Error('key or state is invalid');
}

export const removePersisted = (name) => {
  if (name) return localStorage.removeItem(name);
  throw new Error('key not found');
}

export const getPersisted = (name) => {
  const value = localStorage.getItem(name);
  if (value) return JSON.parse(value);
  throw new Error('key not found');
}