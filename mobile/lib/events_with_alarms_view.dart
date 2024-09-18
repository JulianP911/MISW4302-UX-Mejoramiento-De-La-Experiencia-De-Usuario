import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/events_filter_view.dart';

class EventsWithAlarmsView extends StatelessWidget {
  const EventsWithAlarmsView({super.key});

  List<String> get eventsNames => [
        'Reunión seguimiento Tech',
        'Trabajo colectivo Design',
        'Reunión seguimiento Sentry',
        'Trabajo individual Programación',
        'Reunión seguimiento Finazas',
        'Trabajo colectivo Ideación'
      ];

  List<String> get eventsDescription => [
        'Tener el insumo del reporte',
        'Documento de consideraciones',
        'Enlace plataforma de bugs',
        'Herramienta visual studio code',
        'Excel con las ganacias y perdidas',
        'Herramienta miro y mentimeter'
      ];

  List<String> get eventsTime => [
        '09:15 a.m.',
        '10:30 a.m.',
        '12:45 p.m.',
        '14:20 p.m.',
        '15:35 p.m.',
        '18:50 p.m.'
      ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(
            Icons.pie_chart_outline,
            color: Color(0xFFEEECF9),
            size: 32,
          ),
          onPressed: () {},
        ),
        title: Text(
          '26 de Agosto',
          style: GoogleFonts.inter(
            fontSize: 20,
            color: const Color(0xFFEEECF9),
          ),
        ),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(
              Icons.arrow_forward_outlined,
              color: Color(0xFFEEECF9),
              size: 32,
            ),
            onPressed: () {},
          ),
        ],
        backgroundColor: const Color(0xFF6D86AB),
      ),
      body: Stack(
        fit: StackFit.expand,
        children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/background_events.png'),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Column(
            children: [
              const SizedBox(
                height: 24,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(right: 14),
                    child: FilledButton(
                      onPressed: () {
                        showModalBottomSheet(
                          context: context,
                          isScrollControlled: true,
                          builder: (BuildContext context) {
                            return const EventsFilterView();
                          },
                        );
                      },
                      style: ButtonStyle(
                        shape:
                            MaterialStateProperty.all<RoundedRectangleBorder>(
                          RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(4),
                          ),
                        ),
                        backgroundColor:
                            MaterialStateProperty.all(const Color(0xFF546D92)),
                        minimumSize:
                            MaterialStateProperty.all(const Size(92, 36)),
                      ),
                      child: Text(
                        'FILTRAR',
                        style: GoogleFonts.inter(
                          fontSize: 14,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 20,
              ),
              Expanded(
                child: ListView.builder(
                  itemCount: 5,
                  itemBuilder: (context, index) {
                    return Padding(
                      padding: const EdgeInsets.only(
                        bottom: 16,
                        left: 16,
                        right: 16,
                      ),
                      child: Slidable(
                        startActionPane: ActionPane(
                          motion: const ScrollMotion(),
                          children: <Widget>[
                            SlidableAction(
                              autoClose: true,
                              onPressed: (BuildContext context) {},
                              backgroundColor: Colors.transparent,
                              foregroundColor: const Color(0xFF1B123A),
                              label: 'EDITAR',
                              padding: EdgeInsets.zero,
                              spacing: 0,
                            ),
                          ],
                        ),
                        endActionPane: ActionPane(
                          motion: const ScrollMotion(),
                          children: <Widget>[
                            SlidableAction(
                              autoClose: true,
                              onPressed: (BuildContext context) {},
                              backgroundColor: Colors.transparent,
                              foregroundColor: const Color(0xFF1B123A),
                              label: 'ELIMINAR',
                              padding: EdgeInsets.zero,
                              spacing: 0,
                            ),
                          ],
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              eventsNames[index],
                              style: GoogleFonts.inter(
                                fontSize: 16,
                                color: const Color(0xFF090C10),
                              ),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  eventsDescription[index],
                                  style: GoogleFonts.inter(
                                    fontSize: 14,
                                    color: const Color(0xFF6D86AB),
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                                Text(
                                  eventsTime[index],
                                  style: GoogleFonts.inter(
                                    fontSize: 12,
                                    color: const Color(0xFF3E2A88),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(
                              height: 8,
                            ),
                            const Opacity(
                              opacity: 0.2,
                              child: Divider(
                                color: Color(0xFF212121),
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        backgroundColor: const Color(0xFF8B77D5),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(
            50,
          ),
        ),
        child: const Icon(
          Icons.add,
          color: Color(0xFFEFF2F6),
        ),
      ),
    );
  }
}
