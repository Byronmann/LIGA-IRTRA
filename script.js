const equipos = [
  { nombre: "Deportivo IRTRA", PJ: 3, G: 3, E: 0, P: 0, GF: 7, GC: 2 },
  { nombre: "Real Zunil", PJ: 3, G: 2, E: 1, P: 0, GF: 5, GC: 2 },
  { nombre: "Atlético Xetulul", PJ: 3, G: 2, E: 0, P: 1, GF: 4, GC: 3 },
  // Puedes agregar más equipos hasta tener 20
];

equipos.forEach((equipo, index) => {
  const DG = equipo.GF - equipo.GC;
  const Pts = equipo.G * 3 + equipo.E;
  document.getElementById("tabla-equipos").innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${equipo.nombre}</td>
      <td>${equipo.PJ}</td>
      <td>${equipo.G}</td>
      <td>${equipo.E}</td>
      <td>${equipo.P}</td>
      <td>${equipo.GF}</td>
      <td>${equipo.GC}</td>
      <td>${DG}</td>
      <td>${Pts}</td>
    </tr>`;
});
