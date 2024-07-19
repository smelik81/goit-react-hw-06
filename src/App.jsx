import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearcBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearcBox />
      <ContactList />
    </div>
  );
}

export default App;
