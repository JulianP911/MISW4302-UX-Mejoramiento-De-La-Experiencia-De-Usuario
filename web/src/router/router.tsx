import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { LogIn } from "src/ui/screens/auth/logIn";
import { EventWithAlarms } from "src/ui/screens/list/events";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LogIn />} />
      <Route path="/events-with-alarms" element={<EventWithAlarms />} />
    </Route>
  )
);
