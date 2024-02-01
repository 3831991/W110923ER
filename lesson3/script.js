function task1() {
    const answer = document.getElementById("answer1").value;

    if (answer == "צהוב" || answer == "yellow") {
        document.getElementById("output1").innerHTML = "נכון";
    } else {
        document.getElementById("output1").innerHTML = "לא נכון";
    }
}