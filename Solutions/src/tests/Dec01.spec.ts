import assert from 'assert';
import { findVanishingNumber } from '../Dec01';

describe('Dec 01: The Vanishing Number', () => {
	it('should return 3', () => {
		assert.strictEqual(findVanishingNumber(5, [1, 2, 4, 5]), 3);
	});

	it('should return 2', () => {
		assert.strictEqual(findVanishingNumber(3, [1, 3]), 2);
	});
});
