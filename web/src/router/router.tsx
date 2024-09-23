import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { Drawer } from "src/ui/Layouts/drawer";
import { StartLayout } from "src/ui/Layouts/startLayout";
import { Dashboard } from "src/ui/screens/analytics/dashboard";
import { EventWithAlarms } from "src/ui/screens/list/events";
import { Calendar } from "src/ui/screens/start/calendar";
import { Start } from "src/ui/screens/start/start";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to={"/start"} replace />} />
      <Route element={<StartLayout />}>
        <Route path="/start" element={<Start />} />
        <Route path="/start/calendar" element={<Calendar />} />
      </Route>
      <Route element={<Drawer />}>
        <Route path="/events-with-alarms" element={<EventWithAlarms />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);
