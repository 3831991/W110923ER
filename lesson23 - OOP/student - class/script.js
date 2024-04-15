class Student {
    firstName = '';
    lastName = '';
    phone = '';
    birthday = '';
    city = '';
    grades = [];

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // גיל של הסטודנט (לא מדוייק)
    getAge() {
        // השנה הנוכחית
        const currentYear = new Date().getFullYear();
        // שנת הלידה של הסטודנט
        const studentYear = new Date(this.birthday).getFullYear();

        // גיל של הסטודנט (במספר)
        return currentYear - studentYear;
    }

    getAverageTest() {
        const sum = this.grades.reduce((res, num) => res += num, 0);

        return sum / this.grades.length;
    }

    getTestAmount() {
        return this.grades.length;
    }

    constructor(firstName, lastName, phone, birthday, city, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birthday = birthday;
        this.city = city;
        this.grades = grades;
    }
}

const student1 = new Student("Noam", "Abrmovich", "050-1234567", "1999-04-28", "Haifa", [100, 100, 100, 100, 110]);
