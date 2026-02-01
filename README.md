🎯 Catch Me If You Can: Random Moving Button Challenge <br>
A simple, fun interactive web game where users must try to click a button that teleports to a random position on the screen every time they try to click it (or hover over it).<br><br>
🚀 Features
Dynamic Movement: The button uses JavaScript's Math.random() to calculate new coordinates within the browser window.
Responsive Design: Works on different screen sizes by calculating positions relative to window.innerWidth and window.innerHeight.
Smooth Transitions: (Optional) CSS transitions make the button's movement feel fluid rather than instant.<br><br>
🛠️ Technologies Used
HTML5: For the basic button structure.<br>
CSS3: For styling and absolute positioning.<br>
JavaScript (Vanilla): For the core logic of calculating random positions and handling event listeners.<br><br>
📂 Project Structure
text<br>
├── index.html   # Main structure<br>
├── style.css    # Styling and animations<br>
└── script.js    # Random movement logic<br>
⚙️ How to Run Locally
Clone the repository:
git clone 

Open the index.html file in any modern web browser.<br><br>
💡 How It Works
The JavaScript listens for a click (or mouseenter) event on the button. When triggered:
It calculates a random X and Y coordinate.
It subtracts the button's own width and height to ensure it doesn't move off-screen.
It updates the button's style.left and style.top properties.
