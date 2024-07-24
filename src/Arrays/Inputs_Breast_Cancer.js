const input_breast_cancer = [
  {
    name: "clump_thickness",
    information:
      "Thickness of cell clusters (clumps) in the breast tissue, assessed on a scale from 1 to 10.",
  },
  {
    name: "uniform_cell_size",
    information:
      "Consistency of cell size within the cell clusters, assessed on a scale from 1 to 10.",
  },
  {
    name: "uniform_cell_shape",
    information:
      "Consistency of cell shape within the cell clusters, assessed on a scale from 1 to 10.",
  },
  {
    name: "marginal_adhesion",
    information:
      "How well the tumor cells stick together or adhere to surrounding normal cells, assessed on a scale from 1 to 10.",
  },
  {
    name: "single_epithelial_size",
    information:
      "Size of individual epithelial cells, assessed on a scale from 1 to 10.",
  },
  {
    name: "bare_nuclei",
    information:
      "Presence of bare nuclei in the cell clusters, often assessed as either present or absent.",
  },
  {
    name: "bland_chromatin",
    information:
      "Uniformity and smoothness of the chromatin material within the cell nucleus, assessed on a scale from 1 to 10.",
  },
  {
    name: "normal_nucleoli",
    information:
      "Size and number of normal nucleoli present within the cell clusters.",
  },
  {
    name: "mitoses",
    information: "Number of cells undergoing mitosis within the cell clusters.",
  },
];

export default input_breast_cancer;
