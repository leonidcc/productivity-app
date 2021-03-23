

export   function lsGet() {
  if (!localStorage.getItem("plantillasx123kas"))
    localStorage.setItem(
      "plantillasx123kas",
      JSON.stringify({
        pomodoro: {
          name: "pomodoro",
          ciclo: "4",
          work: "25",
          break_short: "5",
          break_long: "5",
          color: "green",
        },
      })
    );
  return JSON.parse(localStorage.getItem("plantillasx123kas"));
}
export function lsSet(data) {
  localStorage.setItem("plantillasx123kas", JSON.stringify(data));
}
