// priceUtils.js
export const verifyPrice = (minPrice, maxPrice) => {
  const min = minPrice !== "" ? parseInt(minPrice, 10) : null;
  const max = maxPrice !== "" ? parseInt(maxPrice, 10) : null;

  if (min !== null && max !== null && min > max) {
    return false;
  }
  if (max !== null && min !== null && max < min) {
    return false;
  }
  return true;
};

export const verifyPassword = (oldPassword, newPassword, confirmPassword) => {
    if (newPassword.length < 8) {
      return "La nuova password deve essere di almeno 8 caratteri.";
    }

    if (newPassword === oldPassword) {
      return "La nuova password non può essere uguale alla vecchia.";
    }

    if (newPassword !== confirmPassword) {
      return "Le nuove password non coincidono.";
    }

    return null; // Nessun errore
  };