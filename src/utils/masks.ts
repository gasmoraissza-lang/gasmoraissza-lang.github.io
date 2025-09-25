export const formatPhoneNumber = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
};

export const formatEmail = (value: string): string => {
  return value.trim().toLowerCase();
};

export const formatFullName = (value: string): string => {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  return phoneRegex.test(phone);
};

export const validateFullName = (name: string): boolean => {
  return name.trim().length >= 2 && /^[a-zA-ZÀ-ÿ\s]+$/.test(name);
};
