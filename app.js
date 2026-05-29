const wedding = new Date("2026-09-26T00:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const diff = wedding - now;

  document.getElementById("d").innerText = Math.floor(diff/86400000);
  document.getElementById("h").innerText = Math.floor((diff%86400000)/3600000);
  document.getElementById("m").innerText = Math.floor((diff%3600000)/60000);
  document.getElementById("s").innerText = Math.floor((diff%60000)/1000);
},1000);

// RSVP local
let list = [];

function rsvp(){
  const n = document.getElementById("name").value;
  const p = document.getElementById("people").value;

  list.push(`${n} - ${p} persoane`);

  document.getElementById("list").innerHTML =
    list.map(x=>`<p>✨ ${x}</p>`).join("");
}

// save date
function saveDate(){
  const ics =
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Andrei & Bianca Wedding
DTSTART:20260926T160000
DTEND:20260926T235900
LOCATION:Galați
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([ics], {type:"text/calendar"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "wedding.ics";
  a.click();
}