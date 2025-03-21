import { describe, it, expect, vi } from "vitest";
import { verifyPrice } from '../src/lib/utils'; // Assicurati di importare correttamente la funzione

describe('verifyPrice', () => {
    it('Deve restituire false e mostrare un alert se il prezzo massimo è minore del prezzo minimo', () => {
        // Arrange
        const minPrice = "50";
        const maxPrice = "30";
        // Act
        const result = verifyPrice(minPrice, maxPrice);

        // Assert
        expect(result).toBe(false);

    });

    it('Deve restituire true se i prezzi sono validi (minPrice <= maxPrice)', () => {
        // Arrange
        const minPrice = "50";
        const maxPrice = "100";

        // Act
        const result = verifyPrice(minPrice, maxPrice);

        // Assert
        expect(result).toBe(true);
    });

    it('Deve restituire true se uno dei due campi è vuoto', () => {
        // Arrange
        const minPrice = "";
        const maxPrice = "100";

        // Act
        const result = verifyPrice(minPrice, maxPrice);

        // Assert
        expect(result).toBe(true);
    });
    it('Deve restituire true se uno dei due campi è vuoto', () => {
        // Arrange
        const minPrice = "100";
        const maxPrice = "";

        // Act
        const result = verifyPrice(minPrice, maxPrice);

        // Assert
        expect(result).toBe(true);
    });


    it('Deve restituire true se entrambi i campi sono vuoti', () => {
        // Arrange
        const minPrice = "";
        const maxPrice = "";

        // Act
        const result = verifyPrice(minPrice, maxPrice);

        // Assert
        expect(result).toBe(true);
    });
});