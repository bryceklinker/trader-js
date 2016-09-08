describe('Trader', function() {
    it('should have title', function() {
        trader.setTitle();
        expect(document.title).toBe('Trader-JS')
    })
})