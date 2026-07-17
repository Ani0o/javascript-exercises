const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, person) => {
        if (!("yearOfDeath" in person)) {
            person["yearOfDeath"] = new Date().getFullYear();
        }

        const age = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        if (oldestAge < age) return person;
        else return oldest;
    }, {name: "abc", yearOfBirth: new Date().getFullYear(), yearOfDeath: new Date().getFullYear(),});

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
