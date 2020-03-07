module.exports = function toReadable(number) {
    let answer = [];
    let mirrorNumber = number
        .toString(10)
        .split("")
        .reverse();
    if (number == 0) {
        return "zero";
    }
    if (mirrorNumber[2] == 1) {
        answer.push("one hundred");
    } else if (mirrorNumber[2] == 2) {
        answer.push("two hundred");
    } else if (mirrorNumber[2] == 3) {
        answer.push("three hundred");
    } else if (mirrorNumber[2] == 4) {
        answer.push("four hundred");
    } else if (mirrorNumber[2] == 5) {
        answer.push("five hundred");
    } else if (mirrorNumber[2] == 6) {
        answer.push("six hundred");
    } else if (mirrorNumber[2] == 7) {
        answer.push("seven hundred");
    } else if (mirrorNumber[2] == 8) {
        answer.push("eight hundred");
    } else if (mirrorNumber[2] == 9) {
        answer.push("nine hundred");
    }

    if (mirrorNumber[1] == 1) {
        if (mirrorNumber[0] == 0) {
            answer.push("ten");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 1) {
            answer.push("eleven");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 2) {
            answer.push("twelve");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 3) {
            answer.push("thirteen");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 4) {
            answer.push("fourteen");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 5) {
            answer.push("fifteen");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 6) {
            answer.push("sixteen");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 7) {
            answer.push("seventeen");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 8) {
            answer.push("eighteen");
            return answer.join(" ");
        } else if (mirrorNumber[0] == 9) {
            answer.push("nineteen");
            return answer.join(" ");
        }
    } else if (mirrorNumber[1] == 2) {
        answer.push("twenty");
    } else if (mirrorNumber[1] == 3) {
        answer.push("thirty");
    } else if (mirrorNumber[1] == 4) {
        answer.push("forty");
    } else if (mirrorNumber[1] == 5) {
        answer.push("fifty");
    } else if (mirrorNumber[1] == 6) {
        answer.push("sixty");
    } else if (mirrorNumber[1] == 7) {
        answer.push("seventy");
    } else if (mirrorNumber[1] == 8) {
        answer.push("eighty");
    } else if (mirrorNumber[1] == 9) {
        answer.push("ninety");
    }

    if (mirrorNumber[0] == 1) {
        answer.push("one");
    } else if (mirrorNumber[0] == 2) {
        answer.push("two");
    } else if (mirrorNumber[0] == 3) {
        answer.push("three");
    } else if (mirrorNumber[0] == 4) {
        answer.push("four");
    } else if (mirrorNumber[0] == 5) {
        answer.push("five");
    } else if (mirrorNumber[0] == 6) {
        answer.push("six");
    } else if (mirrorNumber[0] == 7) {
        answer.push("seven");
    } else if (mirrorNumber[0] == 8) {
        answer.push("eight");
    } else if (mirrorNumber[0] == 9) {
        answer.push("nine");
    }
    return answer.join(" ");
};
