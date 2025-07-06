const MathUtils = {
    random: function(min = 0, max = 1) {
        return Math.random() * (max - min) + min;
    },
    
    randomInt: function(min = 0, max = 1) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    ceil: function(number) {
        return Math.ceil(number);
    },
    
    floor: function(number) {
        return Math.floor(number);
    },
    
    trunc: function(number) {
        return Math.trunc(number);
    },
    
    round: function(number, decimals = 0) {
        return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
    },
    
    clamp: function(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },
    
    lerp: function(start, end, factor) {
        return start + (end - start) * factor;
    },
    
    map: function(value, inMin, inMax, outMin, outMax) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },
    
    distance: function(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    },
    
    angle: function(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    },
    
    degreesToRadians: function(degrees) {
        return degrees * (Math.PI / 180);
    },
    
    radiansToDegrees: function(radians) {
        return radians * (180 / Math.PI);
    },
    
    factorial: function(n) {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    },
    
    fibonacci: function(n) {
        if (n <= 1) return n;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    },
    
    isPrime: function(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    },
    
    gcd: function(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    },
    
    lcm: function(a, b) {
        return (a * b) / this.gcd(a, b);
    },
    
    generateRandomArray: function(length, min = 0, max = 100) {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(this.randomInt(min, max));
        }
        return array;
    },
    
    shuffle: function(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    sum: function(array) {
        return array.reduce((acc, val) => acc + val, 0);
    },
    
    average: function(array) {
        return this.sum(array) / array.length;
    },
    
    median: function(array) {
        const sorted = [...array].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
    },
    
    mode: function(array) {
        const frequency = {};
        let maxFreq = 0;
        let modes = [];
        
        array.forEach(item => {
            frequency[item] = (frequency[item] || 0) + 1;
            if (frequency[item] > maxFreq) {
                maxFreq = frequency[item];
                modes = [item];
            } else if (frequency[item] === maxFreq) {
                modes.push(item);
            }
        });
        
        return modes;
    },
    
    variance: function(array) {
        const avg = this.average(array);
        const squaredDiffs = array.map(x => Math.pow(x - avg, 2));
        return this.average(squaredDiffs);
    },
    
    standardDeviation: function(array) {
        return Math.sqrt(this.variance(array));
    },
    
    percentile: function(array, percentile) {
        const sorted = [...array].sort((a, b) => a - b);
        const index = (percentile / 100) * (sorted.length - 1);
        const lower = Math.floor(index);
        const upper = Math.ceil(index);
        const weight = index - lower;
        
        if (upper === lower) return sorted[lower];
        return sorted[lower] * (1 - weight) + sorted[upper] * weight;
    }
};

function runMathDemo() {
    console.log("Math Demo Started");
    
    const x = MathUtils.random() * 3;
    console.log("Random number:", x);
    console.log("Ceiling:", MathUtils.ceil(x));
    console.log("Floor:", MathUtils.floor(x));
    console.log("Truncate:", MathUtils.trunc(x));
    console.log("Round to 2 decimals:", MathUtils.round(x, 2));
    
    const randomArray = MathUtils.generateRandomArray(10, 1, 100);
    console.log("Random array:", randomArray);
    console.log("Sum:", MathUtils.sum(randomArray));
    console.log("Average:", MathUtils.average(randomArray));
    console.log("Median:", MathUtils.median(randomArray));
    console.log("Mode:", MathUtils.mode(randomArray));
    console.log("Standard deviation:", MathUtils.standardDeviation(randomArray));
    
    console.log("Math Demo Completed");
} 