class Student {
    student = {
        id: 0,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthday: "",
        city: "",
        grades: []
    }; // אובייקט של הסטודנט

    getFullName() {
        return `${this.student.firstName} ${this.student.lastName}`;
    }

    // גיל של הסטודנט (לא מדוייק)
    getAge() {
        // השנה הנוכחית
        const currentYear = new Date().getFullYear();
        // שנת הלידה של הסטודנט
        const studentYear = new Date(this.student.birthday).getFullYear();

        // גיל של הסטודנט (במספר)
        return currentYear - studentYear;
    }

    getAverageTest() {
        const sum = this.student.grades.reduce((res, num) => res += num, 0);

        return sum / this.student.grades.length;
    }

    getTestAmount() {
        return this.student.grades.length;
    }

    constructor(student) {
        if (!student) {
            throw new Error("Student not found");
        }

        for (const key in student) {
            this.student[key] = student[key];
        }
    }
}

const student1 = new Student({
    id: 9128,
    firstName: "טליה",
    lastName: "אנקרי",
    phone: "059-7101369",
    // email: "abc487@gmail.com",
    birthday: "2005-11-19",
    city: "חיפה",
    grades: [81, 87, 60]
});

(async function() {
    const res = await fetch("../students.json");
    const data = await res.json();

    const students = data.map(s => new Student(s));

    console.log(students);
})()


// // יצירת ציונים פיקטיביים לכל סטודנט
// students.forEach(s => {
//     s.grades = [];

//     // טווח של 3 עד 8
//     const max = Math.floor(Math.random() * 6) + 3;
    
//     for (let i = 0; i < max; i++) {
//         // טווח של 40 עד 100
//         const g = Math.floor(Math.random() * 61) + 40;
//         s.grades.push(g);
//     }
// });