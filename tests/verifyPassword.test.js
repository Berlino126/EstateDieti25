import { describe, it, expect } from "vitest";
import { verifyPassword } from '../src/lib/utils'; 

describe('verifyPassword', () => {
    it('Deve restituire un errore se la nuova password è troppo corta', () => {
        // Arrange
        const oldPassword = "passwordvecchia";
        const newPassword = "12345";
        const confirmPassword = "12345";

        // Act
        const result = verifyPassword(oldPassword, newPassword, confirmPassword);

        // Assert
        expect(result).toBe("La nuova password deve essere di almeno 8 caratteri.");
    });

    it('Deve restituire un errore se la nuova password è uguale alla vecchia password', () => {
        // Arrange
        const oldPassword = "passwordvecchia";
        const newPassword = "passwordvecchia";
        const confirmPassword = "passwordvecchia";

        // Act
        const result = verifyPassword(oldPassword, newPassword, confirmPassword);

        // Assert
        expect(result).toBe("La nuova password non può essere uguale alla vecchia.");
    });

    it('Deve restituire un errore se la nuova password e la conferma non coincidono', () => {
        // Arrange
        const oldPassword = "passwordvecchia";
        const newPassword = "nuovapassword";
        const confirmPassword = "nuovapassworddiversa";

        // Act
        const result = verifyPassword(oldPassword, newPassword, confirmPassword);

        // Assert
        expect(result).toBe("Le nuove password non coincidono.");
    });

    it('Deve restituire null se tutti i controlli passano correttamente', () => {
        // Arrange
        const oldPassword = "passwordvecchia";
        const newPassword = "nuovapassword";
        const confirmPassword = "nuovapassword";

        // Act
        const result = verifyPassword(oldPassword, newPassword, confirmPassword);

        // Assert
        expect(result).toBeNull();
    });
});