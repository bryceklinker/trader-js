describe('Trader', function() {
    it('should have Trader-JS title', function() {
        trader.setTitle();
        expect(document.title).toBe('Trader-JS')
    })
})