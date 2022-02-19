import React from 'react';
import generateNumbers from '../helper/helper';

function Numbers() {
  let allNumbers = generateNumbers();
  console.log(allNumbers);
  console.log('hello');
  let cells = allNumbers.map((val) => {
    return <td>{val}</td>;
  });
  console.log(cells);
  return <table className="table-container">{cells}</table>;
}

export default Numbers;
