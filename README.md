# Team Neon Genesis - CeyGo

![CeyGo Tech Stack.png](CeyGo_Tech_Stack.png)

`CeyGo` is a travel guide app designed to attract tourists to our tropical paradise, Sri Lanka.


## Prerequisites

- `Flutter` 3.24.1
- `Dart` 3.5.1
- `React` 18.3.1
- `Node` 20.17.0
- `Scikit-learn` 1.5.1
- `MySQL` 8.0.39

# Setup

### Flutter App - Client Side

```bash
my_flutter_app/
│
├── android/               # Android native code
│   ├── app/
│   ├── gradle/
│   └── src/
│
├── ios/                   # iOS native code
│   ├── Runner/
│   ├── Flutter/
│   └── Podfile
│
├── lib/                   # Main Flutter application code
│   ├── models/            # Data models
│   ├── services/          # API or business logic services
│   ├── screens/           # App screens and widgets
│   ├── widgets/           # Reusable UI components 
│   ├── main.dart          # Main entry point of the app
│
├── test/                  # Unit and widget tests
│
├── build/                 # Generated build files
│
├── pubspec.yaml           # Project configuration and dependencies
│
├── pubspec.lock           # Version-locked dependencies
│
├── README.md              # Project documentation
│
└── .gitignore             # Files and directories to ignore in git

```
- Clone the repository to your device

```
git clone https://github.com/DulaknaRandil/Neon-Genesis_CeyGO_Mobile-Application.git
```

- Open the project & Install the dependencies by

```dart
flutter pub get
```

- Load the secrets to the `.env` file (Secret keys are located in a separate document).
- Run the Flutter app by

```dart
flutter run
```

### React - Admin Dashboard

# React Project Structure
```bash
my-react-app/
│
├── public/                # Static files, such as index.html
│   ├── favicon.ico        # App favicon
│   ├── index.html         # Main HTML file
│   └── manifest.json      # Web app manifest
│
├── src/                   # Main application code
│   ├── assets/            # Images, fonts, etc. 
│   ├── components/        # Reusable components
│   │   ├── Button.js      # Example reusable button component
│   │   ├── BarChart.jsx        # Bar chart visualization component
│   │   ├── Geography.jsx       # Component for geography-based data display
│   │   ├── Header.jsx          # Header component for the app
│   │   ├── LineChart.jsx       # Line chart visualization component
│   │   ├── PieChart.jsx        # Pie chart visualization component
│   │   ├── ProgressCircle.jsx  # Circular progress indicator component
│   │   └── StatBox.jsx         # Statistics box component for displaying data
│   ├── pages/             # Pages of the application 
│   │   ├── Home.js        # Example home page component
│   │   ├── Bar.jsx             # Bar chart data page
│   │   ├── Geo.jsx             # Geographical data page
│   │   ├── Interpol.jsx        # Interpol API verification page
│   │   ├── Line.jsx            # Line chart data page
│   │   ├── Pie.jsx             # Pie chart data page
│   │   ├── VisaApplication.jsx # Page for visa application submission
│   │   └── VisaPayments.jsx    # Page for managing visa payments
│   ├── screens/           # Screens within the application 
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx    # Main dashboard screen
│   │   └── Login.jsx           # Login screen
│   ├── global/            # Global components (e.g., navigation, layout)
│   │   ├── SideBar.jsx         # Sidebar navigation component
│   │   └── TopBar.jsx          # Top bar navigation component
│   ├── services/          # API calls or business logic 
│   ├── hooks/             # Custom React hooks 
│   ├── context/           # Context API for state management 
│   ├── data/              # Static or fetched data 
│   ├── App.js             # Main app component
│   ├── firebase.js        # Firebase configuration
│   ├── index.js           # Entry point of the app
│   ├── index.css          # Global styles
│   └── theme.js           # Theme customization for the app
│
├── node_modules/          # Installed dependencies 
│
├── package.json           # Project configuration and dependencies
│
├── package-lock.json      # Version-locked dependencies 
│
├── .gitignore             # Files and directories to ignore in git
│
├── README.md              # Project documentation
```

- Clone the repository to your device

```
https://github.com/AnuradhaDilshan/Neon-Genesis_CeyGO_Admin-Dashboard.git
```

- Open the project & Install the dependencies by

```jsx
npm i
```

- Run the app by

```jsx
npm start
```