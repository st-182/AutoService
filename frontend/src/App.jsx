import GlobalStyle from "./Global.style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ContactsScreen from "./Screens/ContactsScreen";
import BlogScreens from "./Screens/BlogScreens";
import ServicesScreen from "./Screens/ServicesScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import Header from "./components/atomic/molecules/Header/Header";
import Footer from "./components/atomic/molecules/Footer/Footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <header className=""></header>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route to="/" component={HomeScreen} />
            <Route to="/about" component={AboutUsScreen} />
            <Route to="/services" component={ServicesScreen} />
            <Route to="/blog" component={BlogScreens} />
            <Route to="/contacts" component={ContactsScreen} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
