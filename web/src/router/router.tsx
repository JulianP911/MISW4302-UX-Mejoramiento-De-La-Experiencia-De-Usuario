import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { AuthLayout } from "src/ui/Layouts/authLayout";
import { Drawer } from "src/ui/Layouts/drawer";
import { StartLayout } from "src/ui/Layouts/startLayout";
import { Dashboard } from "src/ui/screens/analytics/dashboard";
import { RegisterView } from "src/ui/screens/auth/register";
import { CreateEvent } from "src/ui/screens/create/event";
import { EventWithAlarms } from "src/ui/screens/list/events";
import { Calendar } from "src/ui/screens/start/calendar";
import { Start } from "src/ui/screens/start/start";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to={"/register"} replace />} />
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<RegisterView />} />
      </Route>
      <Route element={<StartLayout />}>
        <Route path="/start" element={<Start />} />
        <Route path="/start/calendar" element={<Calendar />} />
      </Route>
      <Route element={<Drawer />}>
        <Route path="/events-with-alarms" element={<EventWithAlarms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<CreateEvent />}></Route>
      </Route>
    </Route>
  )
);
