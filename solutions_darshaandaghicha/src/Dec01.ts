export function findVanishingNumber(n: number, arr: number[]): number {
	const expectedSum = (n * (n + 1)) / 2;
	const actualSum = arr.reduce((acc, val) => acc + val, 0);
	return expectedSum - actualSum;
}
