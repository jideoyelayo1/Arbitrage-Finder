import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import TooltipInfo from './TooltipInfo';
import './ArbitrageCalculator.css';

function ArbitrageCalculator() {
  const [betOrders, setBetOrders] = useState([{ outcome: '', odds: '' }]);
  const [result, setResult] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleInputChange = (index, event) => {
    const values = [...betOrders];
    values[index][event.target.name] = event.target.value;
    setBetOrders(values);
  };

  const handleAddFields = () => {
    setBetOrders([...betOrders, { outcome: '', odds: '' }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...betOrders];
    values.splice(index, 1);
    setBetOrders(values);
  };

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  const checkArbitrage = () => {
    // Clean and validate input
    const cleanedBetOrders = betOrders
      .map((order) => ({
        outcome: order.outcome.trim(),
        odds: parseFloat(order.odds),
      }))
      .filter((order) => order.outcome && order.odds > 0);

    if (cleanedBetOrders.length < 2) {
      setResult('Please enter at least two valid outcomes and odds.');
      return;
    }

    // Calculate inverse sum
    const inverseSum = cleanedBetOrders.reduce(
      (sum, order) => sum + 1 / order.odds,
      0
    );

    if (inverseSum < 1) {
      // Arbitrage exists
      const totalStake = 100;
      const stakes = {};
      cleanedBetOrders.forEach((order) => {
        const stake = (totalStake / order.odds) / inverseSum;
        stakes[order.outcome] = stake.toFixed(2);
      });
      const profitPercentage = ((1 - inverseSum) * 100).toFixed(2);
      setResult({ stakes, profitPercentage });
    } else {
      setResult('No arbitrage opportunity exists with the provided odds.');
    }
  };

  return (
    <div className="calculator-container">
      <h3>
        Enter Bet Outcomes and Odds{' '}
        <span id="TooltipExample" className="tooltip-icon">
          ℹ️
        </span>
      </h3>
      <Tooltip
        placement="right"
        isOpen={tooltipOpen}
        target="TooltipExample"
        toggle={toggleTooltip}
      >
        <TooltipInfo />
      </Tooltip>
      {betOrders.map((betOrder, index) => (
        <div key={index} className="bet-order-row">
          <input
            name="outcome"
            type="text"
            placeholder="Outcome"
            value={betOrder.outcome}
            onChange={(event) => handleInputChange(index, event)}
          />
          <input
            name="odds"
            type="number"
            placeholder="Odds"
            step="0.01"
            value={betOrder.odds}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button
            type="button"
            className="remove-button"
            onClick={() => handleRemoveFields(index)}
          >
            ✖️
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddFields} className="add-button">
        ➕ Add Outcome
      </button>
      <button type="button" onClick={checkArbitrage} className="calculate-button">
        Calculate Arbitrage
      </button>
      {result && (
        <div className="result-container">
          {typeof result === 'string' ? (
            <p>{result}</p>
          ) : (
            <div>
              <h4>Arbitrage Opportunity Found!</h4>
              <p>Bet distribution and expected profit:</p>
              <ul>
                {Object.entries(result.stakes).map(([outcome, stake]) => (
                  <li key={outcome}>
                    {outcome}: ${stake}
                  </li>
                ))}
              </ul>
              <p>Expected profit: {result.profitPercentage}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ArbitrageCalculator;
