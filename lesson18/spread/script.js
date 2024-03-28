// Spread
const courseParams = {
    course: "Full Stack",
    code: "W110923ER",
    startDate: "2023-09-11",
    campus: "Online",
}

const student1 = {
    ...courseParams,
    firstName: "Noam",
    lastName: "Abramovich",
    phone: "050-785-0545",
    campus: "Offline",
};

const student2 = {
    firstName: "Maor",
    lastName: "Gross",
    phone: "050-770-3215",
    ...courseParams,
};

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((res, x) => res += x, 0);
}