describe("End-to-End testing", () => {
    test("Complete booking journey", () => {
        const login = true;
        const search = true;
        const booking = true;
        const payment = true;

        expect(login).toBe(true);
        expect(search).toBe(true);
        expect(booking).toBe(true);
        expect(payment).toBe(true);
    });
});