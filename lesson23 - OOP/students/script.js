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
}
