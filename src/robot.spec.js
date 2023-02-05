describe('Robot', () => {
    describe('#sayHello', () => {
        it('should say hello', () => {
            // GIVEN
            const user = 'Quoc';
            const mock = jasmine.createSpy('getUserLang');
            mock.withArgs(user).and.returnValue('en');
            const expectedResult = 'hello';
            // WHEN
            const result = sayHello(user, mock);
            // THEN
            expect(mock).toHaveBeenCalledWith(user);
            expect(result).toEqual(expectedResult);
        });
    });
});
