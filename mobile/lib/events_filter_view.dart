import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:google_fonts/google_fonts.dart';

class EventsFilterView extends StatelessWidget {
  const EventsFilterView({super.key});

  List<String> get typeEvents => [
        'Reunión',
        'T. Individual',
        'T. Colectivo',
      ];

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(
            16,
          ),
          topRight: Radius.circular(
            16,
          ),
        ),
      ),
      child: Container(
        constraints: BoxConstraints(
          maxHeight: MediaQuery.of(context).size.height * 0.8,
        ),
        child: Padding(
          padding: EdgeInsets.only(
              top: 21,
              left: 18,
              right: 18,
              bottom: MediaQuery.of(context).viewInsets.bottom),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Flexible(
                child: ScrollConfiguration(
                  behavior: const ScrollBehavior().copyWith(overscroll: false),
                  child: RawScrollbar(
                    thumbVisibility: true,
                    trackColor: Colors.transparent,
                    child: ListView(
                      shrinkWrap: true,
                      children: <Widget>[
                        Text(
                          'Filtrar:',
                          style: GoogleFonts.inter(
                            fontSize: 20,
                            color: const Color(0xFF090C10),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 12, left: 10),
                          child: Text(
                            'Tipo de evento',
                            style: GoogleFonts.inter(
                              fontSize: 16,
                              color: const Color(0xFF090C10),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 12, left: 10),
                          child: Row(
                            children: [
                              FilledButton(
                                onPressed: () {},
                                style: ButtonStyle(
                                  shape: MaterialStateProperty.all<
                                      RoundedRectangleBorder>(
                                    RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(16),
                                    ),
                                  ),
                                  backgroundColor: MaterialStateProperty.all(
                                    const Color(0xFF546D92),
                                  ),
                                  minimumSize: MaterialStateProperty.all(
                                      const Size(77, 28)),
                                ),
                                child: Text(typeEvents[0]),
                              ),
                              const SizedBox(
                                width: 3,
                              ),
                              FilledButton(
                                onPressed: () {},
                                style: ButtonStyle(
                                  shape: MaterialStateProperty.all<
                                      RoundedRectangleBorder>(
                                    RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(16),
                                    ),
                                  ),
                                  backgroundColor: MaterialStateProperty.all(
                                    const Color(0xFF546D92),
                                  ),
                                  minimumSize: MaterialStateProperty.all(
                                      const Size(70, 28)),
                                ),
                                child: Text(typeEvents[1]),
                              ),
                              const SizedBox(
                                width: 3,
                              ),
                              FilledButton(
                                onPressed: () {},
                                style: ButtonStyle(
                                  shape: MaterialStateProperty.all<
                                      RoundedRectangleBorder>(
                                    RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(16),
                                    ),
                                  ),
                                  backgroundColor: MaterialStateProperty.all(
                                    const Color(0xFF546D92),
                                  ),
                                  minimumSize: MaterialStateProperty.all(
                                      const Size(77, 28)),
                                ),
                                child: Text(typeEvents[2]),
                              ),
                            ],
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 12, left: 10),
                          child: Text(
                            'Tiempo',
                            style: GoogleFonts.inter(
                              fontSize: 16,
                              color: const Color(0xFF090C10),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 12, left: 10),
                          child: Row(
                            children: [
                              Expanded(
                                child: SizedBox(
                                  height: 45,
                                  child: TextField(
                                    decoration: InputDecoration(
                                      border: const OutlineInputBorder(),
                                      labelText: 'Fecha',
                                      hintText: 'Ingrese la fecha',
                                      labelStyle: GoogleFonts.inter(
                                        fontSize: 16,
                                        color: const Color(0xFF5036AF),
                                      ),
                                      hintStyle: GoogleFonts.inter(
                                        fontSize: 16,
                                        color: const Color(0xFF5036AF),
                                      ),
                                      enabledBorder: const OutlineInputBorder(
                                        borderSide: BorderSide(
                                          color: Color(0xFF6A50C9),
                                          width: 1,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(
                                width: 16,
                              ),
                              Expanded(
                                child: SizedBox(
                                  height: 45,
                                  child: TextField(
                                    decoration: InputDecoration(
                                      border: const OutlineInputBorder(),
                                      labelText: 'Hora',
                                      hintText: 'Ingrese la hora',
                                      labelStyle: GoogleFonts.inter(
                                        fontSize: 16,
                                        color: const Color(0xFF5036AF),
                                      ),
                                      hintStyle: GoogleFonts.inter(
                                        fontSize: 16,
                                        color: const Color(0xFF5036AF),
                                      ),
                                      enabledBorder: const OutlineInputBorder(
                                        borderSide: BorderSide(
                                          color: Color(0xFF6A50C9),
                                          width: 1,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(
                          height: 12,
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 4, left: 10),
                          child: Row(
                            children: [
                              Expanded(
                                child: SizedBox(
                                  height: 45,
                                  child: TextField(
                                    decoration: InputDecoration(
                                      border: const OutlineInputBorder(),
                                      labelText: 'Día',
                                      hintText: 'Ingrese la fecha',
                                      labelStyle: GoogleFonts.inter(
                                        fontSize: 16,
                                        color: const Color(0xFF6A50C9),
                                      ),
                                      hintStyle: GoogleFonts.inter(
                                        fontSize: 16,
                                        color: const Color(0xFF5036AF),
                                      ),
                                      enabledBorder: const OutlineInputBorder(
                                        borderSide: BorderSide(
                                          color: Color(0xFF6A50C9),
                                          width: 1,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(
                                width: 16,
                              ),
                              Expanded(
                                  child: SizedBox(
                                width: MediaQuery.of(context).size.width * 0.4,
                              )),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
