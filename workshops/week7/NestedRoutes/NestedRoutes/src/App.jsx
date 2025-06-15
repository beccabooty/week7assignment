import { BrowserRouter, Routes, Route } from "react-router";
import { UserPage } from "./components/UserPage";
import { UserPosts } from ".?components/UserPosts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<UserPage />}
        <Route path={"posts"} element={"UserPosts"} />
        />
      </Routes>
    </BrowserRouter>
  );
}
