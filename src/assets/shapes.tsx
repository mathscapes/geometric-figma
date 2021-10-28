export const shapes = [
    {
        "name": "Polar Rose",
        "slug": "polar-rose",
        "hint": "A sinusoid plotted in polar coordinates",
        "sliders": [
            { "title": "Amplitude", "label": "a", "min": 15, "max": 200, "symbol": "a", "defaultValue": 50 },
            { "title": "Petal factor", "label": "n", "min": 1, "max": 128, "symbol": "n", "defaultValue": 50 },
            { "title": "Spatial factor", "label": "d", "min": 1, "max": 128, "symbol": "d", "defaultValue": 50 },
            { "title": "Phase (in degrees)", "label": "λ", "min": 0, "max": 360, "symbol": "gm", "defaultValue": 50 },
            { "title": "Offset Parameter", "label": "c", "min": 0, "max": 100, "symbol": "c", "defaultValue": 50 }
        ]
    },
    {
        "name": "Sine",
        "slug": "sine",
        "hint": "Real functions which relate an angle of a right-angled triangle to ratios of two side lengths",
        "sliders": [
            { "label": "a", "min": 15, "max": 200, "symbol": "a", "defaultValue": 100 },
            { "label": "b", "min": 1, "max": 128, "symbol": "n", "defaultValue": 1 },
            { "label": "c", "min": 1, "max": 128, "symbol": "d", "defaultValue": 1 },
            { "label": "d", "min": 0, "max": 360, "symbol": "gm", "defaultValue": 1 },
            { "label": "e", "min": 0, "max": 100, "symbol": "c", "defaultValue": 1 }
        ]
    },
    {
      "name": "Cosine",
      "slug": "cosine",
      "hint": "Real functions which relate an angle of a right-angled triangle to ratios of two side lengths",
      "sliders": [
          { "label": "a", "min": 15, "max": 200, "symbol": "a", "defaultValue": 100 },
          { "label": "b", "min": 1, "max": 128, "symbol": "n", "defaultValue": 1 },
          { "label": "c", "min": 1, "max": 128, "symbol": "d", "defaultValue": 1 },
          { "label": "d", "min": 0, "max": 360, "symbol": "gm", "defaultValue": 1 },
          { "label": "e", "min": 0, "max": 100, "symbol": "c", "defaultValue": 100 }
      ]
  },
  {
    "name": "Tangent",
    "slug": "tangent",
    "hint": "Real functions which relate an angle of a right-angled triangle to ratios of two side lengths",
    "sliders": [
        { "label": "a", "min": 15, "max": 200, "symbol": "a", "defaultValue": 100 },
        { "label": "b", "min": 1, "max": 128, "symbol": "n", "defaultValue": 1 },
        { "label": "c", "min": 1, "max": 128, "symbol": "d", "defaultValue": 100 },
        { "label": "d", "min": 0, "max": 360, "symbol": "gm", "defaultValue": 1 },
        { "label": "e", "min": 0, "max": 100, "symbol": "c", "defaultValue": 1 }
    ]
}   
];