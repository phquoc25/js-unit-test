describe('Robot', () => {
    describe('#sayHello', () => {
        it('should say hello', () => {
            // GIVEN
            const user = 'Quoc';
            const expectedResult = 'bonjour';
            // WHEN
            const result = sayHello(user);
            // THEN
            expect(result).toEqual(expectedResult);
        });
    });
});
