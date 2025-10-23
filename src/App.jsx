import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function BudgetCalculator() {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [others, setOthers] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const handleCalculate = () => {
    if (income === "" || rent === "" || food === "" || transport === "" || others === "") {
      alert("All fields are required!");
      return;
    }
    if (income < 0 || rent < 0 || food < 0 || transport < 0 || others < 0) {
      alert("All values must be positive!");
      return;
    }
    const remaining = parseFloat(income) - (parseFloat(rent) + parseFloat(food) + parseFloat(transport) + parseFloat(others));
    setBalance(remaining);
    if (remaining < 0) {
      setColor("text-danger");
      setMessage("You are overspending!");
    } else {
      setColor("text-success");
      setMessage("Good job managing your expenses!");
    }
  };
  return (
    <div className="container mt-5 p-4 border rounded bg-light" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Budget Calculator</h2>
      <div className="mb-3">
        <label className="form-label">Monthly Income:</label>
        <input
          type="number"
          className="form-control"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your monthly income"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Rent / EMI:</label>
        <input
          type="number"
          className="form-control"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Enter rent or EMI"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Food Expenses:</label>
        <input
          type="number"
          className="form-control"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food expenses"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Transport Expenses:</label>
        <input
          type="number"
          className="form-control"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          placeholder="Enter transport expenses"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Other Expenses:</label>
        <input
          type="number"
          className="form-control"
          value={others}
          onChange={(e) => setOthers(e.target.value)}
          placeholder="Enter other expenses"
        />
      </div>
      <button className="btn btn-primary w-100" onClick={handleCalculate}> Calculate Balance </button>
      {balance !== null && (
        <div className="mt-4 text-center">
          <h5>
            Remaining Balance: <span className={color}>₹{balance.toFixed(2)}</span>
          </h5>
          <p className={color}>{message}</p>
        </div>
      )}
    </div>
  );
}
export default BudgetCalculator;