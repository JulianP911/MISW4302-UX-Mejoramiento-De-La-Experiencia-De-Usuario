import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CalendarSynchronizarionView extends StatelessWidget {
  const CalendarSynchronizarionView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Up to date at work’s',
          style: GoogleFonts.inter(
            fontSize: 24,
            color: const Color(0xFF090C10),
          ),
        ),
        centerTitle: true,
      ),
      body: Stack(
        fit: StackFit.expand,
        children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage(
                    'assets/backgroung_calendar_synchronization.png'),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'Te ofrecemos las siguientes opciones\npara vincular tu calendario:',
                  style: GoogleFonts.inter(
                    fontSize: 16,
                    color: const Color(0xFF090C10),
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(
                  height: 90,
                ),
                FilledButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/events_with_alarms');
                  },
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                    backgroundColor:
                        MaterialStateProperty.all(const Color(0xFF546D92)),
                    minimumSize: MaterialStateProperty.all(const Size(161, 36)),
                  ),
                  child: Text(
                    'GOOGLE',
                    style: GoogleFonts.inter(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                ),
                const SizedBox(
                  height: 16,
                ),
                FilledButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/events_with_alarms');
                  },
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                    backgroundColor:
                        MaterialStateProperty.all(const Color(0xFF546D92)),
                    minimumSize: MaterialStateProperty.all(const Size(161, 36)),
                  ),
                  child: Text(
                    'OUTLOOK',
                    style: GoogleFonts.inter(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                ),
                const SizedBox(
                  height: 16,
                ),
                FilledButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/events_with_alarms');
                  },
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                    backgroundColor:
                        MaterialStateProperty.all(const Color(0xFF546D92)),
                    minimumSize: MaterialStateProperty.all(const Size(161, 36)),
                  ),
                  child: Text(
                    'NOTION',
                    style: GoogleFonts.inter(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                ),
                const SizedBox(
                  height: 70,
                ),
                Text(
                  'Ten en cuenta que al realizar\nestá sincronización todos tus\neventos tendrán alarmas\nasociadas que podrán ser\neditadas',
                  style: GoogleFonts.inter(
                    fontSize: 14,
                    color: const Color(0xFF090C10),
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
