'use strict';

const populationList = [...document.querySelectorAll('.population')];

const totalPopulation = populationList.reduce((acc, item) => {
  const value = +item.textContent.replace(/,/g, '');

  return acc + value;
}, 0);

const averagePopulation = totalPopulation / populationList.length;

const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

totalPopulationSpan.innerHTML = totalPopulation.toLocaleString('en-US');

averagePopulationSpan.innerHTML = averagePopulation.toLocaleString('en-US');
