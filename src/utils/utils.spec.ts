import { format } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Rohit', undefined, undefined)).toEqual('Rohit');
  });

  it('formats first and last names', () => {
    expect(format('Rohit', undefined, 'Kumar')).toEqual('Rohit Kumar');
  });

  it('formats first, middle and last names', () => {
    expect(format('Rohit', 'Kumar', 'Yadav')).toEqual('Rohit Kumar Yadav');
  });
});
