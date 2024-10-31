import React from 'react';
import ArbitrageCalculator from './ArbitrageCalculator';
import './App.css'; // Import component-specific styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Arbitrage Finder</h2>
      </header>
      <main>
        <ArbitrageCalculator />
      </main>
      <footer>
        <p>
          <strong>Understanding Inverse Sum:</strong> The inverse sum of the odds is calculated by summing the reciprocals of each outcome's decimal odds. If this sum is less than 1, it indicates an arbitrage opportunity because the implied probabilities of all outcomes sum to less than 100%, allowing a guaranteed profit.
        </p>
      </footer>
    </div>
  );
}

export default App;
