const equipos = [
  { nombre: "Jaguares de Xejuyup", PJ: 4, G: 3, E: 1, P: 0, GF: 9, GC: 3 },
  { nombre: "Cocodrilos de Retalhuleu", PJ: 4, G: 3, E: 0, P: 1, GF: 8, GC: 4 },
  { nombre: "Chapulines de Xocomil", PJ: 4, G: 2, E: 2, P: 0, GF: 7, GC: 3 },
  { nombre: "Panteras Rosadas", PJ: 4, G: 2, E: 1, P: 1, GF: 6, GC: 4 },
  { nombre: "Conejos de Reu", PJ: 4, G: 2, E: 1, P: 1, GF: 6, GC: 5 },
  { nombre: "Ardillas Voladoras", PJ: 4, G: 2, E: 0, P: 2, GF: 5, GC: 4 },
  { nombre: "Pavoreales Reales", PJ: 4, G: 2, E: 0, P: 2, GF: 4, GC: 4 },
  { nombre: "Tortugas del Sol", PJ: 4, G: 1, E: 2, P: 1, GF: 4, GC: 5 },
  { nombre: "Huracanes de San Martín", PJ: 4, G: 1, E: 2, P: 1, GF: 3, GC: 3 },
  { nombre: "Delfines de Agua Mágica", PJ: 4, G: 1, E: 1, P: 2, GF: 4, GC: 6 },
  { nombre: "Pingüinos de Fantasía", PJ: 4, G: 1, E: 1, P: 2, GF: 3, GC: 5 },
  { nombre: "Murciélagos de la Noche", PJ: 4, G: 1, E: 0, P: 3, GF: 2, GC: 6 },
  { nombre: "Linces de la Montaña", PJ: 4, G: 1, E: 0, P: 3, GF: 2, GC: 7 },
  { nombre: "Tigrillos del Bosque", PJ: 4, G: 1, E: 0, P: 3, GF: 3, GC: 8 },
  { nombre: "Caimanes del Río Azul", PJ: 4, G: 0, E: 2, P: 2, GF: 2, GC: 5 },
  { nombre: "Mapaches Atómicos", PJ: 4, G: 0, E: 2, P: 2, GF: 2, GC: 6 },
  { nombre: "Gacelas de Zunil", PJ: 4, G: 0, E: 1, P: 3, GF: 1, GC: 5 },
  { nombre: "Cóndores Celestes", PJ: 4, G: 0, E: 1, P: 3, GF: 1, GC: 6 },
  { nombre: "Monos Voladores", PJ: 4, G: 0, E: 1, P: 3, GF: 0, GC: 6 },
  { nombre: "Dragones de Aventura", PJ: 4, G: 0, E: 1, P: 3, GF: 1, GC: 7 }
];

equipos.sort((a, b) => {
  const ptsA = a.G * 3 + a.E;
  const ptsB = b.G * 3 + b.E;
  const dgA = a.GF - a.GC;
  const dgB = b.GF - b.GC;
  return ptsB - ptsA || dgB - dgA;
});

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
