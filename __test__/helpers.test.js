
const { format_date } = require('../utils/helper');
test('format_date() returns a date string', () => {
    const date = new Date('2022-05-09 16:12:03');

    expect(format_date(date)).toBe('5/9/2022');
});
