import "./App.css";
import Form from "./components/Form.jsx";
import { Routes, Route } from "react-router";
import Butler from "./pages/butlerTheories.jsx";

export default function App() {
  return (
    <Routes>
      <h1>Whodunnit</h1>
      <Form />
      <route path="/butlertheories" element={<Butler/>} />
    <Routes />
  );
}
