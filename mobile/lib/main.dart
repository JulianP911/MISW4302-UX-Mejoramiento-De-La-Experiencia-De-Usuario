import 'package:flutter/material.dart';
import 'package:mobile/calendar_synchronization_view.dart';
import 'package:mobile/create_event_view.dart';
import 'package:mobile/edit_event_view.dart';
import 'package:mobile/events_with_alarms_view.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Up to date at work’s',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: false,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const CalendarSynchronizarionView(),
        '/events_with_alarms': (context) => const EventsWithAlarmsView(),
        '/create_event': (context) => const CreateEventView(),
        '/edit_event': (context) => const EditEventView(),
      },
    );
  }
}
