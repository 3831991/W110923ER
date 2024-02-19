function task1() {
    const userName = prompt("שלום, מדבר נציג המלונית, מה שמכם בבקשה?");

    if (!userName) {
        task1();
        return;
    }
    
    const days = prompt(`יש לי שאלה ${userName} כמה ימים תרצה להתארח אצלנו?`, 1);

    if (!days) {
        return;
    }

    let price = days * 100;

    alert(`עלות יומית במלונית הינה 100 שקלים ליום, ולכן תשלם רק ${price}`);

    const isBreakFast = confirm("עלות ארוחת בוקר הינה 30 שקלים, האם תרצה שנפנק אותך?");

    if (isBreakFast) {
        price += 30 * days;
    }

    alert(`סה"כ לתשלום: ${price}`);
}