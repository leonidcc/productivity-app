// timerConfig:{
//   name: string
//   blocks: string
//   work: number
//   break_short: number
//   break_long: number
//   color: string
// }

// Conversion a segundos:
// work =  parseInt(work) * 60;
// break_short: idem a work
// break_long:  idem a work

export function lsGet() {
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
