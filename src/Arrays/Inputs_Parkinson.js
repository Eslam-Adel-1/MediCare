const inputs_parkinson = [
  {
    name: "MDVP_fo_HZ",
    information:
      "Mean frequency (in Hertz) of the fundamental frequency measured from the acoustic signal.",
  },
  {
    name: "MDVP_Fhi_HZ",
    information: "Highest frequency (in Hertz) in the acoustic signal.",
  },
  {
    name: "MDVP_Flo_HZ",
    information: "Lowest frequency (in Hertz) in the acoustic signal.",
  },
  {
    name: "MDVP_Jitter_percentage",
    information:
      "Percentage of jitter in the fundamental frequency, a measure of variation in pitch.",
  },
  {
    name: "MDVP_Jitter_Abs",
    information:
      "Absolute jitter in the fundamental frequency, measured in microseconds.",
  },
  {
    name: "MDVP_RAP",
    information:
      "Relative amplitude perturbation, a measure of variation in pitch, calculated using the average absolute difference between successive periods.",
  },
  {
    name: "MDVP_PPQ",
    information:
      "Five-point period perturbation quotient, another measure of variation in pitch.",
  },
  {
    name: "Jitter_DDP",
    information:
      "Jitter DDP (degree of DD), a measure of variation in pitch calculated as three times the difference between the average absolute differences of successive periods.",
  },
  {
    name: "MDVP_Shimmer",
    information: "Shimmer (local amplitude variation) in the acoustic signal.",
  },
  {
    name: "MDVP_Shimmer_dB",
    information:
      "Shimmer measured in decibels, providing a dB representation of amplitude variation.",
  },
  {
    name: "Shimmer_APQ3",
    information:
      "Amplitude variation measured in dB within consecutive segments of the acoustic signal.",
  },
  {
    name: "Shimmer_APQ5",
    information: "Similar to Shimmer_APQ3, but using a different segmentation.",
  },
  {
    name: "MDVP_APQ",
    information:
      "Absolute shimmer (APQ) is a measure of amplitude variation calculated as the average of the absolute differences between amplitudes of consecutive periods.",
  },
  {
    name: "Shimmer_DDA",
    information:
      "Shimmer measured in terms of the difference between the maxima and minima in the acoustic signal, providing another representation of amplitude variation.",
  },
  {
    name: "NHR",
    information:
      "Noise-to-harmonics ratio, which measures the ratio of noise to harmonics in the acoustic signal.",
  },
  {
    name: "HNR",
    information:
      "Harmonics-to-noise ratio, which measures the ratio of harmonics to noise in the acoustic signal.",
  },
  {
    name: "RPDE",
    information:
      "Recurrence period density entropy, a measure of voice quality based on recurrence rate.",
  },
  {
    name: "DFA",
    information:
      "Detrended fluctuation analysis, a measure of the fractal scaling properties of the acoustic signal.",
  },
  {
    name: "spread1",
    information:
      "Another measure related to the distribution of points around a central value in the acoustic signal.",
  },
  {
    name: "spread2",
    information:
      "Similar to spread1, representing a different aspect of point distribution.",
  },
  {
    name: "D2",
    information:
      "Correlation dimension, a measure of the complexity of the acoustic signal.",
  },
  {
    name: "PPE",
    information:
      "Pitch period entropy, a measure of voice quality based on pitch period variability.",
  },
];

export default inputs_parkinson;
