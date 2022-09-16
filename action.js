window.addEventListener("load", async () => {
  const url = "http://allugofrases.herokuapp.com/frases/random";
  fetch(url)
    .then((response) => response.json())
    .then((text) => {
      document.getElementById(
        "phrase"
      ).innerHTML = `${text.frase} (${text.autor} em ${text.livro})`;
    });

  const questions = [
    "Quanto o seu trabalho te irritou hoje?",
    "Quanto a sua família te irritou hoje?",
    "Quanto o seu smartphone te irritou hoje?",
  ];

  const grades = [];
  let iterator = 0;

  const questionDiv = document.getElementById("question");
  const answer = document.getElementById("answer");
  const actionButton = document.getElementById("actionButton");
  const sentenceDiv = document.getElementById("sentence");
  const resultDiv = document.getElementById("result");
  const finalGradeDiv = document.getElementById("finalGrade");
  const formWrapperDiv = document.getElementById("formWrapper");

  questionDiv.innerHTML = questions[iterator];

  actionButton.addEventListener("click", () => {
    if (iterator === 2) {
      const resultGrade = grades.reduce(
        (previous, current) => previous + current,
        grades[0]
      );

      let sentence =
        "Eh. Dia Sem graça. Bebe! Ai você vai ter pelo menos uma lembrança boa deste dia.";

      if (resultGrade <= 6) {
        sentence = "Seu dia foi bom! Beba! Você merece!";
      }

      if (resultGrade >= 10) {
        sentence = "Seu dia foi paia! Beba! Você precisa!";
      }
      finalGradeDiv.innerHTML = `Nota: ${resultGrade} `;
      sentenceDiv.innerHTML = sentence;
      resultDiv.style.display = "block";
      formWrapperDiv.remove();
      return;
    }

    grades[iterator] = parseInt(answer.value);

    iterator++;
    questionDiv.innerHTML = questions[iterator];
    answer.value = 3;
  });
});
