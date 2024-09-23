import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/components/custom_text_field.dart';
import 'package:mobile/utils/utils.dart';

class CreateEventView extends StatefulWidget {
  const CreateEventView({super.key});

  @override
  State<CreateEventView> createState() => _CreateEventViewState();
}

class _CreateEventViewState extends State<CreateEventView> {
  late TimeOfDay eventTime;
  late TextEditingController eventHourController;
  late String selectedAlarm;
  List<DropdownMenuItem<String>> alarms = <String>['Ring Bells', 'Alert 1']
      .map<DropdownMenuItem<String>>((String value) {
    return DropdownMenuItem<String>(
      value: value,
      child: Text(value),
    );
  }).toList();

  Future<void> handleSelectTime(BuildContext context) async {
    TimeOfDay? result = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.now(),
    );
    if (result != null) {
      setState(() {
        eventHourController.text = result.format(context);
      });
    }
  }

  @override
  void initState() {
    super.initState();
    eventHourController = TextEditingController();
    selectedAlarm = '';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: const Color(0xFF6D86AB),
          leading: IconButton(
            icon: const Icon(
              Icons.arrow_back_outlined,
              color: Color(0xFFEEECF9),
              size: 32,
            ),
            onPressed: () {
              Navigator.pop(context);
            },
          ),
          title: Text(
            "Crear Evento",
            style:
                GoogleFonts.inter(fontSize: 20, color: const Color(0xFFEEECF9)),
          ),
          centerTitle: true,
          actions: [
            IconButton(
              icon: const Icon(
                Icons.remove_red_eye_outlined,
                color: Color(0xFFEEECF9),
                size: 32,
              ),
              onPressed: () {},
            )
          ]),
      body: Stack(
        fit: StackFit.expand,
        children: <Widget>[
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/background_events.png'),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 24, right: 24),
            child: ListView(
              children: <Widget>[
                const SizedBox(
                  height: 34,
                ),
                const CustomTextField(
                  label: 'Nombre del evento',
                ),
                const SizedBox(
                  height: 16,
                ),
                CustomTextField(
                  controller: eventHourController,
                  label: 'Hora del evento',
                  onTap: () async {
                    await handleSelectTime(context);
                  },
                ),
                const SizedBox(
                  height: 16,
                ),
                const CustomTextField(
                  label: 'Día(s) del evento',
                ),
                const SizedBox(
                  height: 16,
                ),
                const CustomTextField(
                  label: 'Repetición de la alarma',
                ),
                const SizedBox(
                  height: 16,
                ),
                DropdownButtonFormField<String>(
                  decoration: InputDecoration(
                    labelText: 'Sonido de la alarma',
                    labelStyle: TextStyle(
                      color: CustomColors.primary[400],
                    ),
                    border: const OutlineInputBorder(),
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: CustomColors.primary[400]!),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: CustomColors.primary[400]!),
                    ),
                  ),
                  isExpanded: true,
                  onChanged: (value) => {},
                  items: alarms,
                ),
                const SizedBox(
                  height: 16,
                ),
                const CustomTextField(
                  label: 'Anexos',
                  minLines: 5,
                ),
                const SizedBox(
                  height: 16,
                ),
                TextButton(
                  onPressed: () {},
                  style: ButtonStyle(
                    foregroundColor: MaterialStateProperty.all<Color>(
                        CustomColors.primary[500]!),
                  ),
                  child: Text(
                    'Adjuntar documento',
                    style: GoogleFonts.inter(
                      fontSize: 14,
                      color: CustomColors.primary[500],
                    ),
                  ),
                ),
                const SizedBox(
                  height: 16,
                ),
                ElevatedButton(
                    style: ButtonStyle(
                      foregroundColor: MaterialStateProperty.all<Color>(
                        CustomColors.primary[400]!,
                      ),
                      backgroundColor: MaterialStateProperty.all<Color>(
                        CustomColors.primary[400]!,
                      ),
                    ),
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Text(
                      'Crear Evento',
                      style: GoogleFonts.inter(
                        fontSize: 14,
                        color: Colors.white,
                      ),
                    ))
              ],
            ),
          ),
        ],
      ),
    );
  }
}
