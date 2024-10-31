# Arbitrage Finder

Discover potential arbitrage opportunities with our intuitive arbitrage finder tool, designed to enhance your betting strategy.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Understanding Inverse Sum](#understanding-inverse-sum)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User-Friendly Interface**: Intuitive design for easy navigation and input.
- **Dynamic Calculations**: Real-time computation of arbitrage opportunities.
- **Tooltips and Animations**: Hover over elements to get helpful information.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Error Handling**: Validates inputs and provides user-friendly error messages.

## Demo

Check out the live demo [here](https://jideoyelayo.com/arbitrage-finder).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jideoyelayo1/arbitrage-finder.git
   cd arbitrage-finder
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Add Bet Outcomes:**

   - Click on "➕ Add Outcome" to add a new bet outcome.
   - Enter the **Outcome** name and its **Odds** in decimal format.

2. **Calculate Arbitrage:**

   - Once you've entered all outcomes and odds, click on **"Calculate Arbitrage"**.
   - The app will determine if an arbitrage opportunity exists.
   - If an opportunity is found, it will display the stake distribution and expected profit percentage.

3. **Understanding the Results:**

   - **Stake Distribution**: Indicates how much to bet on each outcome to secure a profit.
   - **Expected Profit**: The guaranteed profit percentage regardless of the event's outcome.

4. **Tooltips:**

   - Hover over the **ℹ️** icons to see detailed explanations and guidance.

## Understanding Inverse Sum

**Inverse Sum Concept**: The inverse sum is calculated by taking the reciprocal of each outcome's decimal odds and summing them up. If this sum is less than 1, it indicates an arbitrage opportunity because the implied probabilities of all outcomes sum to less than 100%. This allows you to distribute your stakes across all outcomes to guarantee a profit.

**Formula:**

\[
\text{Inverse Sum} = \sum \left( \frac{1}{\text{Odds}_i} \right)
\]

- If **Inverse Sum < 1**: Arbitrage opportunity exists.
- If **Inverse Sum ≥ 1**: No arbitrage opportunity.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: Modern syntax and features.
- **CSS3**: Styling and animations.
- **Reactstrap**: Bootstrap components for React.
- **Bootstrap**: Responsive design framework.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Contact

Created by **[Jide Oyelayo](https://jideoyelayo.com)**

- **Website**: [jideoyelayo.com](https://jideoyelayo.com)
- **Email**: [contact@jideoyelayo.com](mailto:contact@jideoyelayo.com)
- **GitHub**: [github.com/jideoyelayo1](https://github.com/jideoyelayo1)

Feel free to reach out for any questions or collaboration opportunities!
