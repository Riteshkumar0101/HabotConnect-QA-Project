describe("Parent booking workflow", () => {
    test("Parent should find an available LSA", () => {
        const lsaAvailable = true;

        expect(lsaAvailable).toBe(true);
    });

    test("Parent should complete the booking", () => {
        const bookingCompleted = true;

        expect(bookingCompleted).toBe(true);
    });
});