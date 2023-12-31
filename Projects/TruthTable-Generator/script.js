function findDistinctAlphabets(inputString) {
    const alphabets = inputString.match(/[A-Za-z]/g);

    if (!alphabets) {
      return [];
    }

    const distinctAlphabets = new Set(alphabets);
    const sortedDistinctAlphabets = Array.from(distinctAlphabets).sort();
    return sortedDistinctAlphabets;
  }

  function decimalToBinaryStrings(n) {
      const binaryStrings = [];
      for (let i = 0; i < n; i++) {
          const binaryString = i.toString(2).padStart(Math.ceil(Math.log2(n)), '0');
          binaryStrings.push(binaryString);
      }
      return binaryStrings;
  }


  function evaluateExpression(expression, values) {
    const stack = [];

    const tokens = expression.split(/\s*([|&()])\s*/).filter(Boolean);

    for (const token of tokens) {
      if (token === "||" || token === "&&") {
        const op2 = stack.pop();
        const op1 = stack.pop();

        if (token === "||") {
          stack.push(op1 || op2);
        } else {
          stack.push(op1 && op2);
        }
      } else if (token === "(" || token === ")") {
        console.error("Invalid expression. Parentheses not supported.");
        return null;
      } else {
        stack.push(values[token]);
      }
    }

    return stack.pop();
  }





  function convert(expression) {
    let result = expression.replace(/'/g, '!');
    // result = expression.replace(/+/g, '||');
    // result = expression.replace(/\*/g, '&&');
    return result.replace(/\+/g, '||').replace(/\*/g, '&&');
  }

  function evalExp( exp , values){

    // Step 1: Replace the variables in the expression with their corresponding values
    const replacedExp = exp.replace(/[a-zA-Z]+/g, (match) => {
      const variable = match.trim();
      return values[variable] !== undefined ? values[variable] : match;
    });

    // Step 2: Use eval to evaluate the modified expression
    try {
      const result = eval(replacedExp);
      return result;
    } catch (error) {
      console.error("Error while evaluating the expression:", error);
      return null;
    }



  }

  function makeTable() {

    let table = document.getElementById('tTable');

    // Remove all child elements (rows) from the table before entering the new datas\
      console.log(table);

    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    const inputString = document.getElementById('input').value;
    const convertedExpression = convert(inputString);
  //   console.log(convertedExpression)


    const distinctAlphabets = findDistinctAlphabets(inputString);

    const columns = distinctAlphabets.length ;
    const rows = 2 ** columns;

    const binaryArray = decimalToBinaryStrings(rows);  // array having the values of all variables per row


    // Create the header row with column names
    const headerRow = document.createElement('tr');
    for (let column of distinctAlphabets) {
      const headerCell = document.createElement('th');
      headerCell.textContent = column;
      headerCell.className = "px-10"
      headerRow.appendChild(headerCell);

    }
    table.appendChild(headerRow);

    // Add an additional column header for the result/answer
    const resultHeaderCell = document.createElement('th');

    resultHeaderCell.textContent = "Result";
    resultHeaderCell.className = "text-blue-300 px-10 border-3 border-blue-500 text-blue-400 "
    headerRow.appendChild(resultHeaderCell);
    headerRow.className = "m-3 border-2 p-2 text-blue-400 border-blue-500"

    table.appendChild(headerRow);

    // Create the data rows
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr');
      let temp = '' ;
      for (let j = 0; j <=columns; j++) {
        const cell = document.createElement('td');
        if( j == columns){
           const values = {};
            for (let k = 0; k < distinctAlphabets.length; k++) {
              values[distinctAlphabets[k]] = parseInt(temp.charAt(k));
            }
            // const result = evaluateExpression(convertedExpression , values);
            console.log(values);
            // console.log(convertedExpression);
            let result = evalExp(convertedExpression , values);
            // console.log(result);
            // console.log(typeof result);
            if(result){
              result = 1;
            }
            else if(!result){
              console.log(result)
              result = 0;
            }
            cell.textContent = result;
        }else{
          temp += binaryArray[i][j] ;
          cell.textContent = binaryArray[i][j];
        }
        cell.className = "border-2 border-double border-blue-500"
        row.appendChild(cell);
        
      }
      table.appendChild(row);
    }
  }