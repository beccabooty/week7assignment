import { useParams } from "react-router";
import { Outlet } from "react-router";

export function UserPage() {
  let { username } = useParams();
  return <h2>User ID: {username}</h2>;
  <Outlet />;
}
