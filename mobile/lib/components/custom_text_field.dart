import 'package:flutter/material.dart';
import 'package:mobile/utils/exports.dart';
import 'package:mobile/utils/utils.dart';

class CustomTextField extends StatelessWidget {
  const CustomTextField({
    required this.label,
    this.onTap,
    this.readOnly = false,
    this.controller,
    this.minLines = 1,
    super.key,
  });

  final String label;
  final bool readOnly;
  final int minLines;

  final TextEditingController? controller;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return TextField(
      minLines: minLines,
      maxLines: minLines,
      readOnly: readOnly,
      controller: controller,
      onTap: onTap,
      cursorColor: CustomColors.primary[400],
      decoration: InputDecoration(
        labelText: label,
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
    );
  }
}
