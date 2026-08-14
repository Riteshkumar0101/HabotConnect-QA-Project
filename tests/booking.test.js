function createBooking() {
    return true;
}

test("Booking should be successful", () => {
    expect(createBooking()).toBe(true);
});