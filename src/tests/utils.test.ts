import {
	capitalizeFirstChar,
	addSpacesBeforeCapital,
	truncateText,
	formatHumanReadableDate,
	formatValue,
} from '../utils/helper';

describe('Utility Functions', () => {

	describe('capitalizeFirstChar', () => {
		test('should capitalize the first character of a non-empty string', () => {
			expect(capitalizeFirstChar('hello')).toBe('Hello');
		});

		test('should return null for an empty string', () => {
			expect(capitalizeFirstChar('')).toBe(null);
		});

		test('should return null when input is undefined', () => {
			expect(capitalizeFirstChar(undefined)).toBe(null);
		});
	});

	describe('addSpacesBeforeCapital', () => {
		test('should add spaces before capital letters', () => {
			expect(addSpacesBeforeCapital('helloWorld')).toBe('hello World');
		});

		test('should return the same string if there are no capital letters', () => {
			expect(addSpacesBeforeCapital('helloworld')).toBe('helloworld');
		});

		test('should handle an empty string', () => {
			expect(addSpacesBeforeCapital('')).toBe('');
		});
	});

	describe('truncateText', () => {
		test('should return the same text if it is shorter than the max length', () => {
			expect(truncateText('Hello, World!', 20)).toBe('Hello, World!');
		});

		test('should truncate text and add ellipsis if it exceeds max length', () => {
			expect(truncateText('Hello, World!', 5)).toBe('Hello...');
		});

		test('should handle an empty string', () => {
			expect(truncateText('', 5)).toBe('');
		});
	});

	describe('formatHumanReadableDate', () => {
		test('should format a valid date string correctly without time', () => {
			expect(formatHumanReadableDate('2024-10-08')).toBe('October 8, 2024');
		});

		test('should format a valid date string correctly with time', () => {
			expect(formatHumanReadableDate('2024-10-08 14:30', true)).toBe('October 8, 2024, 14:30');
		});

		test('should return an empty string for an invalid date string', () => {
			expect(formatHumanReadableDate('invalid-date')).toBe('');
		});

		test('should return an empty string for null input', () => {
			expect(formatHumanReadableDate(null)).toBe('');
		});
	});

	describe('formatValue', () => {
		test('should capitalize the first letter of a string', () => {
			expect(formatValue('hello')).toBe('Hello');
		});

		test('should return the same number when input is a number', () => {
			expect(formatValue(42)).toBe(42);
		});

		test('should handle an empty string', () => {
			expect(formatValue('')).toBe('');
		});
	});

});
