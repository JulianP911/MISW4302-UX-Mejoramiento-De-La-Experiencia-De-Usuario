import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/components/custom_text_field.dart';
import 'package:mobile/utils/utils.dart';

class EditEventView extends StatefulWidget {
  const EditEventView({super.key});

  @override
  State<EditEventView> createState() => _EditEventViewState();
}

class _EditEventViewState extends State<EditEventView> {
  late TimeOfDay eventTime;
  late TextEditingController eventNameController;
  late TextEditingController eventHourController;
  late TextEditingController eventDayController;
  late TextEditingController eventAlarmRepeatController;
  late TextEditingController eventAttachmentsController;
  late String selectedAlarm;
  List<DropdownMenuItem<String>> alarms = <String>['Ring Bells', 'Pop Champs']
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
    eventNameController = TextEditingController();
    eventDayController = TextEditingController();
    eventAlarmRepeatController = TextEditingController();
    eventAttachmentsController = TextEditingController();

    eventNameController.text = 'Reunión seguimiento Tech';
    eventHourController.text = '09:15 a.m.';
    eventDayController.text = 'Lunes, Miércoles, Viernes';
    eventAlarmRepeatController.text = 'Cada 5 minutos';
    eventAttachmentsController.text =
        'Enlaces a la reunión:\n\nhttp://google.meets.com/UAU-1239-JS\n\nEn este espacio revisaremos los avances entorno a los objetivos propuestos para este año.';
    selectedAlarm = 'Ring Bells';
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
            "Editar Evento",
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
                image: AssetImage(
                  'assets/background_add_and_edit_event.png',
                ),
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
                CustomTextField(
                  controller: eventNameController,
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
                CustomTextField(
                  controller: eventDayController,
                  label: 'Día(s) del evento',
                ),
                const SizedBox(
                  height: 16,
                ),
                CustomTextField(
                  controller: eventAlarmRepeatController,
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
                  value: selectedAlarm,
                  onChanged: (value) => {},
                  items: alarms,
                ),
                const SizedBox(
                  height: 16,
                ),
                CustomTextField(
                  controller: eventAttachmentsController,
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
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
                const SizedBox(
                  height: 72,
                ),
                Align(
                  alignment: Alignment.center,
                  child: ElevatedButton(
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(4),
                        ),
                      ),
                      backgroundColor:
                          MaterialStateProperty.all(const Color(0xFF546D92)),
                      minimumSize:
                          MaterialStateProperty.all(const Size(161, 36)),
                    ),
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Text(
                      'EDITAR EVENTO',
                      style: GoogleFonts.inter(
                        fontSize: 14,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
