const inputs_heartAttack = [
  {
    name: "Age",
    information: "Age of the individual in years.",
  },
  {
    name: "Sex",
    information: "Gender of the individual. 0 for female, 1 for male.",
  },
  {
    name: "Cp",
    information:
      "Type of chest pain experienced by the individual. Values: 0 - Typical angina, 1 - Atypical angina, 2 - Non-anginal pain, 3 - Asymptomatic.",
  },
  {
    name: "Trestbps",
    information:
      "Resting blood pressure measured in mmHg (millimeters of mercury).",
  },
  {
    name: "Chol",
    information:
      "Serum cholesterol level measured in mg/dl (milligrams per deciliter).",
  },
  {
    name: "Fbs",
    information:
      "Fasting blood sugar level measured in mg/dl. Values greater than 120 mg/dl may indicate diabetes.",
  },
  {
    name: "Restecg",
    information:
      "Results of the resting electrocardiogram. Values: 0 - Normal, 1 - Abnormal ST-T wave, 2 - Probable or definite left ventricular hypertrophy.",
  },
  {
    name: "Thalach",
    information: "Maximum heart rate achieved during exercise stress testing.",
  },
  {
    name: "Exang",
    information:
      "Presence of exercise-induced angina during exercise stress testing. 0 for no, 1 for yes.",
  },
  {
    name: "Oldpeak",
    information:
      "ST segment depression induced by exercise relative to rest, measured in mm (millimeters).",
  },
  {
    name: "Slope",
    information:
      "Slope of the peak exercise ST segment. Values: 0 - Upsloping, 1 - Flat, 2 - Downsloping.",
  },
  {
    name: "Ca",
    information:
      "Number of major vessels colored by flourosopy during coronary angiography.",
  },
  {
    name: "Thal",
    information:
      "Presence of thalassemia. Values: 0 - Normal, 1 - Fixed defect, 2 - Reversible defect.",
  },
];

export default inputs_heartAttack;
