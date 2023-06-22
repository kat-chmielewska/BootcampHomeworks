//Task 1
/*
Utwórz tablicę obiektów, zawierających 5 studentów.
Każdy obiekt powinien zawierać pola (wartości dowolne, wymyślone przez Was):
- id (typ number)
- imię (typ string),
- nazwisko (typ string),
- pesel (typ string),
- kierunek studiów (typ string)
- oceny (tablica typów number) - 6 ocen dla każdego ze studentów
*/
console.log("#1 Task");

const students = [
  {
    id: 1,
    firstName: "Karolina",
    lastName: "Nowakowska",
    pesel: "99120545668",
    field_of_study: "Finanse",
    notes: [5, 4, 5, 3, 4, 4],
  },
  {
    id: 2,
    firstName: "Marcin",
    lastName: "Kalicki",
    pesel: "00291157214",
    field_of_study: "Administracja",
    notes: [3, 5, 5, 3, 5, 3],
  },
  {
    id: 3,
    firstName: "Aleksander",
    lastName: "Malinowski",
    pesel: "98112821001",
    field_of_study: "Architektura",
    notes: [4, 4, 3, 3, 3, 4],
  },
  {
    id: 4,
    firstName: "Józef",
    lastName: "Antczak",
    pesel: "88021511887",
    field_of_study: "Informatyka",
    notes: [4, 4, 3, 5, 5, 5],
  },
  {
    id: 5,
    firstName: "Joanna",
    lastName: "Kuźmierska",
    pesel: "94030711884",
    field_of_study: "Dietetyka",
    notes: [5, 4, 3, 3, 4, 5],
  },
];

console.log("--------------------------------------------------");

//Task 2
/* Utwórz funkcję addNewStudent przyjmującą 5 paramaterów (imię, nazwisko, pesel, kierunek studiów, notes). Funkcja po uruchomieniu powinna utworzyć obiekt nowego studenta oraz dodać go do tablicy, utworzonej w Zadaniu 1. Id powinno zostać utworzone randomowo (np. za pomocą Math.random(), max 3 liczby) */

console.log("#2 Task");

function addNewStudent(firstName, lastName, pesel, field_of_study, notes) {
  let idNumber = Math.floor(Math.random() * 999 + 1);
  return {
    id: idNumber,
    firstName: firstName,
    lastName: lastName,
    pesel: pesel,
    field_of_study: field_of_study,
    notes: notes,
  };
}
students.push(addNewStudent("Jan", "Kowalski", "80042911845", "Filozofia", [3, 4, 3, 5, 3, 3]));
console.log(students);

console.log("--------------------------------------------------");

//Task 3
/* Utwórz funkcję, przyjmującą jako parametr tablicę obiektów, utworzoną w poprzednich zadaniach. Funkcja powinna wyświetlić w konsoli dane wszystkich studentów w postaci: Student 1: Jan Kowalski, PESEL: 111222333, Field of study: Informatics dla każdego studenta w tablicy. */

console.log("#3 Task");

function studentsDatas(students) {
  students.forEach(function (student, index) {
    const studentsDatas = `Student ${index + 1}: ${student.firstName} ${student.lastName}, PESEL:${student.pesel}, Field of study: ${
      student.field_of_study
    }`;
    console.log(studentsDatas);
  });
}

studentsDatas(students);

console.log("--------------------------------------------------");

//Task 4
/* Utwórz funkcje getMaxNote oraz getMinNote przyjmującą argumenty: TABLICA_STUDENTÓW, PESEL_STUDENTA, których rolą będzie wyświetlanie w konsoli tekstu (przykładowo): Max note for student Ewa Nowak is 5 / Min note for student Ewa Nowak is 2 */

console.log("#4 Task");

function getMaxNote(students, pesel) {
  students.forEach((student) => {
    if (student.pesel == pesel) {
      const maxNotes = Math.max(...student.notes);
      console.log(`Max note for student ${student.firstName} ${student.lastName} is ${maxNotes}`);
    }
  });
}

function getMinNote(students, pesel) {
  students.forEach((student) => {
    if (student.pesel == pesel) {
      const maxNotes = Math.min(...student.notes);
      console.log(`Min note for student ${student.firstName} ${student.lastName} is ${maxNotes}`);
    }
  });
}

getMaxNote(students, 94030711884);
getMinNote(students, 94030711884);
getMaxNote(students, 88021511887);
getMinNote(students, 88021511887);

console.log("--------------------------------------------------");
