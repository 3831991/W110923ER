// פונקצית סיכום למערך
Array.prototype.sum = function() {
    return this.reduce((res, x) => res += x, 0);
}

// [88, 99, 66, 55].sum();

