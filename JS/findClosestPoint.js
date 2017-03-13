var zeroPoint = {x: 0, y: 0};
var points = [
	{x: 0, y: 100},
	{x: 1, y: 200},
	{x: 5, y: 300},
	{x: -10, y: 250},
	{x: 3, y: -3},
	{x: -220, y: -220}
];

function calculateDistance(p1, p2) {
	return (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
}

function findClosestPoint(refPoint, points) {
	var i,
	closestPoint,
	closestDistance = Number.MAX_VALUE,
	distanceEst,
	point;

	for (i = 0; i < points.length; ++i) {
		point = points[i];
		distanceEst = calculateDistance(refPoint, point);
		if (distanceEst < closestDistance) {
			closestPoint = point;
			closestDistance = distanceEst;
		}
	}
	return closestPoint;
}
console.log('Najbliższy punkt to:', findClosestPoint(zeroPoint, points));
