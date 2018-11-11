// circle centered at (X,Y) with radius R
const R = 1;
const X = 0;
const Y = 0;

/* coordinate: (1) Takes (x,y) coordinate of a point; (2) If point is inside or
		on circle, returns coordinate as is; otherwise, returns
		corresponding coordinate on circle; (3) Returns array with
		x-coordinate at index 0 and y-coordinate at index 1 */
function coordinate(x, y) {
	// r = distance from point to center of circle
	const r = Math.sqrt(Math.abs((x - X) ** 2 + (y - Y) ** 2));

	// If point is inside or on circle, return coordinate as is
	if (r <= R) {
		return[x, y];
	}

	// If point is outside circle, return corresponding point on circle
	else {
		return[(x - X) * R / r, (y - Y) * R / r];
	}	
}
