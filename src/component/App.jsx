import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [input, setInput] = useState(""); // Для обычного калькулятора
  const [a, setA] = useState(""); // Коэффициент a
  const [b, setB] = useState(""); // Коэффициент b
  const [c, setC] = useState(""); // Коэффициент c
  const [roots, setRoots] = useState(""); // Результат нахождения корней

const handleClick = (value) => {
    setInput(input + value);
};

const handleClear = () => {
    setInput("");
};

const handleEvaluate = () => {
    try {
        setInput(eval(input).toString());
    } catch (error) {
        setInput("Error");
    }
};

const calculateRoots = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
        setRoots("Пожалуйста, введите все коэффициенты");
        return;
    }

    const D = bNum * bNum - 4 * aNum * cNum;

    if (D > 0) {
      const x1 = (-bNum + Math.sqrt(D)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(D)) / (2 * aNum);
        setRoots(`Корни: x1 = ${x1}, x2 = ${x2}`);
    } else if (D === 0) {
      const x = -bNum / (2 * aNum);
        setRoots(`Единственный корень: x = ${x}`);
    } else {
        setRoots("Нет реальных корней");
    }
};

return (
    <div className="calculator">
        <div className="display">{input}</div>
            <div className="buttons">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={handleClear}>C</button>
            <button onClick={handleEvaluate}>=</button>
        </div>

        <div className="quadratic">
            <h3>Нахождение корней квадратного уравнения:</h3>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="a"
            />
            <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="b"
            />
            <input
                type="number"
                value={c}
                onChange={(e) => setC(e.target.value)}
                placeholder="c"
            />
            <button onClick={calculateRoots}>Рассчитать корни</button>
            <div>{roots}</div>
        </div>
    </div>
);
}

// export default App;