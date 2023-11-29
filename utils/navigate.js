import { useNavigate } from "react-router-dom";

export default function Navigate(menu) {
  const navigate = useNavigate();

  return navigate("/" + menu);
}
