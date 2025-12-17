import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');
  const [results, setResults] = useState([]);

  const handleNum1Change = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setNum1(value);
    }
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setNum2(value);
    }
  };

  const performAction = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert('Please enter valid numbers in both fields');
      return;
    }

    let result;
    let operationSymbol;

    switch (operation) {
      case 'Add':
        result = n1 + n2;
        operationSymbol = '+';
        break;
      case 'Subtract':
        result = n1 - n2;
        operationSymbol = '-';
        break;
      case 'Multiply':
        result = n1 * n2;
        operationSymbol = '×';
        break;
      default:
        return;
    }

    const newResult = {
      id: Date.now(),
      expression: `${n1} ${operationSymbol} ${n2} = ${result}`,
      value: result
    };

    setResults([...results, newResult]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
        />
      </div>

      <div>
        <input
          type="text"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
        />
      </div>

      <div>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="Add">Add</option>
          <option value="Subtract">Subtract</option>
          <option value="Multiply">Multiply</option>
        </select>
      </div>

      <button onClick={performAction}>Perform Action</button>

      {results.length > 0 && (
        <div>
          <h3>Results:</h3>
          {results.map((result) => (
            <div key={result.id}>{result.expression}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calculator;