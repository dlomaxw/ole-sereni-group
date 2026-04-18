import { Wind, Waves, Maximize2, Shield, Zap, Target, Settings, Info, Flame, Thermometer, Layers, Droplets } from 'lucide-react';

export type CategoryKey = 
  | 'AluminiumGlass' 
  | 'GypsumWorks' 
  | 'PaintingTiling' 
  | 'CarpentryJoinery' 
  | 'Electrical' 
  | 'CurtainWall' 
  | 'WindowSystems' 
  | 'DoorSystems' 
  | 'GlassSystems' 
  | 'AluminiumProfiles'
  | 'GeneralFinishing'
  | 'SpecializedSystems';

export interface TechSpec {
  id: string;
  label: string;
  value: string;
  icon: any;
}

export interface TechCategory {
  id: CategoryKey;
  label: string;
  subCategories: { id: string, label: string }[];
  specs: Record<string, TechSpec[]>;
}

export const techData: Record<CategoryKey, TechCategory> = {
  AluminiumGlass: {
    id: 'AluminiumGlass',
    label: 'Aluminium & Glass',
    subCategories: [
      { id: 'Windows', label: 'Aluminium Windows' },
      { id: 'Doors', label: 'Aluminium Doors' },
      { id: 'Balustrades', label: 'Glass Balustrades' },
      { id: 'Skylights', label: 'Skylights & Atria' },
      { id: 'Acoustic', label: 'Acoustic Glazing' },
    ],
    specs: {
      Windows: [
        { id: 'UW', label: 'Thermal Transmittance', value: '1.4 W/m²K', icon: Wind },
        { id: 'RW', label: 'Acoustic Reduction', value: '42 dB', icon: Waves },
        { id: 'PD', label: 'Profile Depth', value: '75mm / Unitized', icon: Maximize2 },
        { id: 'GZ', label: 'Glazing Index', value: '24mm Double-Argon', icon: Shield },
      ],
      Doors: [
        { id: 'UW', label: 'Thermal Insulation', value: '1.6 W/m²K', icon: Wind },
        { id: 'CY', label: 'Mechanical Durability', value: '200,000 Cycles', icon: Zap },
        { id: 'HD', label: 'Section Density', value: 'Heavy Duty / T5', icon: Target },
        { id: 'SC', label: 'Security Class', value: 'RC2 / Anti-Intrusion', icon: Shield },
      ],
      Balustrades: [
        { id: 'LL', label: 'Line Load Resistance', value: '1.5 kN/m', icon: Target },
        { id: 'GT', label: 'Glass Composition', value: '17.5mm Tempered Lam', icon: Shield },
        { id: 'FX', label: 'Fixation Method', value: 'Technical Wedge', icon: Settings },
        { id: 'HT', label: 'Standard Height', value: '1200mm / Optimized', icon: Maximize2 },
      ],
      Skylights: [
        { id: 'UV', label: 'UV Filtration', value: '99.9% Protection', icon: Zap },
        { id: 'LT', label: 'Light Transmission', value: '68% Visibility', icon: Info },
        { id: 'WL', label: 'Wind Load Capacity', value: '2.4 kN/m²', icon: Wind },
        { id: 'DR', label: 'Egress Drainage', value: 'Integrated Hydro', icon: Waves },
      ],
      Acoustic: [
        { id: 'FR', label: 'Fire Integrity', value: 'EI120 / 120 Mins', icon: Flame },
        { id: 'DB', label: 'Noise Mitigation', value: '52 dB STC Rating', icon: Waves },
        { id: 'TH', label: 'Total Thickness', value: '42mm Multi-Layer', icon: Maximize2 },
        { id: 'CR', label: 'Impact Category', value: 'Safety Class 1(B)1', icon: Target },
      ]
    }
  },
  GypsumWorks: {
    id: 'GypsumWorks',
    label: 'Gypsum & Ceilings',
    subCategories: [
      { id: 'Suspended', label: 'T-Bar Ceilings' },
      { id: 'Drywall', label: 'Partition Systems' },
      { id: 'Acoustic', label: 'Acoustic Panels' },
      { id: 'Decorative', label: 'Bespoke Plaster' },
    ],
    specs: {
      Suspended: [
        { id: 'FR', label: 'Fire Rating', value: '60 - 120 Mins', icon: Flame },
        { id: 'NRC', label: 'Sound Absorption', value: '0.85 NRC Index', icon: Waves },
        { id: 'RH', label: 'Humidity Resistance', value: '95% RH Rated', icon: Droplets },
        { id: 'LR', label: 'Light Reflectance', value: 'LR-1 / 88% Refl.', icon: Info },
      ],
      Drywall: [
        { id: 'SD', label: 'Sound Displacement', value: 'Rw 58 dB Rating', icon: Waves },
        { id: 'FP', label: 'Fire Protection', value: 'EI120 Certified', icon: Flame },
        { id: 'TH', label: 'Board Thickness', value: '15mm High-Density', icon: Maximize2 },
        { id: 'SL', label: 'Span Limits', value: 'Up to 6000mm', icon: Target },
      ],
      Acoustic: [
        { id: 'AW', label: 'Weighted Alpha', value: '0.95 αw index', icon: Target },
        { id: 'CAC', label: 'Ceiling Attenuation', value: '40 dB CAC', icon: Waves },
        { id: 'EC', label: 'Eco-Certification', value: 'Low VOC / A+', icon: Shield },
        { id: 'MT', label: 'Material Core', value: 'Mineral / Rockwool', icon: Layers },
      ],
      Decorative: [
        { id: 'MA', label: 'Material Alloy', value: 'Alpha Gypsum Plus', icon: Target },
        { id: 'DT', label: 'Detailing Tolerance', value: '0.5mm Precision', icon: Settings },
        { id: 'FI', label: 'Finish Integrity', value: 'Level 5 Q4 Standard', icon: Info },
        { id: 'CL', label: 'Chlorine Resistance', value: 'Non-Yellowing', icon: Shield },
      ]
    }
  },
  PaintingTiling: {
    id: 'PaintingTiling',
    label: 'Painting & Tiling',
    subCategories: [
      { id: 'Painting', label: 'Coating Systems' },
      { id: 'Tiling', label: 'Porcelain Slabs' },
      { id: 'Specialist', label: 'Texture Finishes' },
    ],
    specs: {
      Painting: [
        { id: 'AD', label: 'Surface Adhesion', value: 'Class 1 / ISO 2409', icon: Target },
        { id: 'VO', label: 'VOC Concentration', value: '< 1g/L Extra-Low', icon: Shield },
        { id: 'WR', label: 'Wash Resistance', value: '10,000 Cycles', icon: Droplets },
        { id: 'TC', label: 'Thermal Capillary', value: 'Vapour Permeable', icon: Wind },
      ],
      Tiling: [
        { id: 'SR', label: 'Slip Resistance', value: 'R11 / PTV 36+', icon: Target },
        { id: 'MS', label: 'Modulus of Rupture', value: '50 N/mm²', icon: Zap },
        { id: 'WA', label: 'Water Absorption', value: '< 0.05% E-Group', icon: Droplets },
        { id: 'SZ', label: 'Available Sizes', value: 'Up to 1.6m x 3.2m', icon: Maximize2 },
      ],
      Specialist: [
        { id: 'UV', label: 'UV Degradation', value: 'Fade Stable / Cat A', icon: Zap },
        { id: 'HR', label: 'Hardness Rating', value: 'Mohs 7 Surface', icon: Shield },
        { id: 'TX', label: 'Texture Profile', value: 'Fine to Coarse', icon: Layers },
        { id: 'PH', label: 'pH Stability', value: 'Alkali Resistant', icon: Info },
      ]
    }
  },
  CarpentryJoinery: {
    id: 'CarpentryJoinery',
    label: 'Carpentry & Joinery',
    subCategories: [
      { id: 'Timber', label: 'Technical Timber' },
      { id: 'Joinery', label: 'Bespoke Joinery' },
      { id: 'Doors', label: 'Technical Doors' },
    ],
    specs: {
      Timber: [
        { id: 'MC', label: 'Moisture Content', value: '8% - 12% Kiln Dry', icon: Droplets },
        { id: 'DN', label: 'Density Range', value: '650 - 850 kg/m³', icon: Layers },
        { id: 'FS', label: 'Fire Treatment', value: 'Class 0 / BS 476', icon: Flame },
        { id: 'EC', label: 'Certification', value: 'FSC / PEFC Chain', icon: Shield },
      ],
      Joinery: [
        { id: 'PT', label: 'Precision Tolerance', value: '±0.25mm CNC', icon: Settings },
        { id: 'GN', label: 'Grain Alignment', value: 'Architectural Match', icon: Target },
        { id: 'LF', label: 'Lacquer Finish', value: '25% Sheen / UV', icon: Info },
        { id: 'ST', label: 'Stability Index', value: 'Cross-Laminated', icon: Zap },
      ],
      Doors: [
        { id: 'FR', label: 'Fire Integrity', value: 'FD30 / FD60 Mins', icon: Flame },
        { id: 'DB', label: 'Acoustic Drop', value: '35 dB - 44 dB', icon: Waves },
        { id: 'SM', label: 'Smoke Seal', value: 'Intumescent Brush', icon: Wind },
        { id: 'CY', label: 'Operational Test', value: '100,000 Cycles', icon: Zap },
      ]
    }
  },
  Electrical: {
    id: 'Electrical',
    label: 'Electrical Systems',
    subCategories: [
      { id: 'Power', label: 'Power Distribution' },
      { id: 'Lighting', label: 'Smart Controls' },
      { id: 'Security', label: 'Integrated Safety' },
    ],
    specs: {
      Power: [
        { id: 'VT', label: 'Voltage Supply', value: '415V / 240V Systems', icon: Zap },
        { id: 'IP', label: 'Ingress Protect', value: 'IP55 / IP67 Options', icon: Shield },
        { id: 'BT', label: 'Busbar Rating', value: 'Up to 4000 Amps', icon: Target },
        { id: 'CE', label: 'Cert Compliance', value: 'BS 7671 / IEC', icon: Info },
      ],
      Lighting: [
        { id: 'DL', label: 'Dimming Logic', value: 'DALI-2 / KNX', icon: Settings },
        { id: 'CR', label: 'Colour Rendering', value: 'CRI 90+ Standard', icon: Info },
        { id: 'LM', label: 'Lumen Output', value: 'High Efficiency LED', icon: Zap },
        { id: 'EM', label: 'Emergency Backup', value: '3-Hour Duration', icon: Shield },
      ],
      Security: [
        { id: 'RS', label: 'Response Latency', value: '< 100ms Trigger', icon: Zap },
        { id: 'NT', label: 'Network Integration', value: 'CAT6A / Fiber Link', icon: Wind },
        { id: 'DC', label: 'Detection Range', value: '180° / 360° Hybrid', icon: Target },
        { id: 'SY', label: 'System Uptime', value: '99.9% High Avail.', icon: Shield },
      ]
    }
  },
  CurtainWall: {
    id: 'CurtainWall',
    label: 'Curtain Wall',
    subCategories: [
      { id: 'Stick', label: 'Stick Systems' },
      { id: 'Unitized', label: 'Unitized Facades' },
      { id: 'Structural', label: 'Structural Glazing' },
    ],
    specs: {
      Stick: [
        { id: 'UW', label: 'Thermal U-Value', value: '1.2 W/m²K', icon: Wind },
        { id: 'AD', label: 'Airtightness', value: '600 Pa / Class AE', icon: Wind },
        { id: 'WT', label: 'Watertightness', value: '750 Pa / Class RE', icon: Droplets },
        { id: 'WL', label: 'Wind Resistance', value: '2.4 kN/m² Service', icon: Target },
      ],
      Unitized: [
        { id: 'TH', label: 'Thermal Break', value: '34mm Polyamide', icon: Thermometer },
        { id: 'MT', label: 'Movement Tol.', value: '±15mm Seismic', icon: Maximize2 },
        { id: 'FS', label: 'Fabrication Std', value: 'Factory ISO 9001', icon: Shield },
        { id: 'IT', label: 'Installation Time', value: '-40% Site Duration', icon: Zap },
      ],
      Structural: [
        { id: 'GZ', label: 'Glazing Index', value: 'SSG No-Cap Flush', icon: Layers },
        { id: 'SC', label: 'Solar Control', value: 'G-Value 0.28 Opt.', icon: Zap },
        { id: 'DB', label: 'Sound Isolation', value: 'RW 45 dB reduction', icon: Waves },
        { id: 'SV', label: 'Silicone Validity', value: '25-Year Guarantee', icon: Shield },
      ]
    }
  },
  WindowSystems: {
    id: 'WindowSystems',
    label: 'Window Systems',
    subCategories: [
      { id: 'Casement', label: 'Casement / Tilt' },
      { id: 'Sliding', label: 'Sliding Systems' },
      { id: 'Fixed', label: 'Architectural Fixed' },
    ],
    specs: {
      Casement: [
        { id: 'UW', label: 'Thermal Loss', value: '1.3 W/m²K', icon: Wind },
        { id: 'RW', label: 'Sound Insulation', value: '40 dB Reduction', icon: Waves },
        { id: 'PD', label: 'Profile Width', value: '70mm High-Insul', icon: Maximize2 },
        { id: 'SC', label: 'Security Class', value: 'PAS 24 / RC2', icon: Shield },
      ],
      Sliding: [
        { id: 'GW', label: 'Glass Weight', value: 'Up to 400kg/Sash', icon: Target },
        { id: 'OT', label: 'Open Threshold', value: 'Low Profile Flush', icon: Maximize2 },
        { id: 'CY', label: 'Cycle Test', value: '150,000 Operations', icon: Zap },
        { id: 'AD', label: 'Air Leakage', value: 'Class 4 / EN 12207', icon: Wind },
      ],
      Fixed: [
        { id: 'MS', label: 'Max Surface', value: 'Up to 9.0 m²', icon: Maximize2 },
        { id: 'GZ', label: 'Glazing Depth', value: 'Up to 52mm Triple', icon: Layers },
        { id: 'FR', label: 'Frame Material', value: 'Alloy 6063-T6', icon: Target },
        { id: 'EX', label: 'Expansion Coeff.', value: 'Low Linear Delta', icon: Info },
      ]
    }
  },
  DoorSystems: {
    id: 'DoorSystems',
    label: 'Door Systems',
    subCategories: [
      { id: 'Entrance', label: 'Entrance Systems' },
      { id: 'Pivot', label: 'Large-Scale Pivot' },
      { id: 'Folding', label: 'Bi-Fold / Slide' },
    ],
    specs: {
      Entrance: [
        { id: 'UW', label: 'Insulation', value: '1.4 W/m²K', icon: Wind },
        { id: 'HD', label: 'Ironmongery', value: 'Multi-Point Locking', icon: Shield },
        { id: 'CY', label: 'Duty Cycle', value: '500,000 Operations', icon: Zap },
        { id: 'TH', label: 'Thermal Base', value: 'Aero-Infused Pylon', icon: Thermometer },
      ],
      Pivot: [
        { id: 'SZ', label: 'Maximum Width', value: '2500mm Per Leaf', icon: Maximize2 },
        { id: 'WT', label: 'Weight Limit', value: '500kg Capacity', icon: Target },
        { id: 'AX', label: 'Axis Control', value: 'Hydraulic Close', icon: Settings },
        { id: 'FI', label: 'Flush Finish', value: 'Zero-Gap Floor', icon: Maximize2 },
      ],
      Folding: [
        { id: 'CL', label: 'Stack Depth', value: 'Ultra-Slim 90mm', icon: Maximize2 },
        { id: 'AD', label: 'Acoustic Seal', value: 'Double Gasket EPDM', icon: Wind },
        { id: 'TR', label: 'Track Loading', value: 'Top or Bottom Hung', icon: Layers },
        { id: 'SC', label: 'Security Grade', value: 'WK2 / RC3 Rating', icon: Shield },
      ]
    }
  },
  GlassSystems: {
    id: 'GlassSystems',
    label: 'Glass Systems',
    subCategories: [
      { id: 'Tempered', label: 'Toughened Glass' },
      { id: 'Laminated', label: 'Safety Laminated' },
      { id: 'Insulated', label: 'Double / Triple IGU' },
    ],
    specs: {
      Tempered: [
        { id: 'ST', label: 'Surface Tension', value: '95 MPa High Temp.', icon: Zap },
        { id: 'FM', label: 'Fragmentation', value: 'Safe Granule Pattern', icon: Shield },
        { id: 'TH', label: 'Thermal Shock', value: 'Up to 250°C Delta', icon: Thermometer },
        { id: 'CL', label: 'Optical Clarity', value: 'Low-Iron Clear', icon: Info },
      ],
      Laminated: [
        { id: 'IL', label: 'Interlayer Type', value: 'PVB / SGP Sentry', icon: Layers },
        { id: 'BR', label: 'Burglary Resist', value: 'P6B Grade Option', icon: Shield },
        { id: 'UV', label: 'UV Block Index', value: '99.9% Filtration', icon: Zap },
        { id: 'DB', label: 'Acoustic Layer', value: '+3 dB Gain Option', icon: Waves },
      ],
      Insulated: [
        { id: 'UG', label: 'Glass U-Value', value: '1.0 W/m²K (S/L)', icon: Wind },
        { id: 'SP', label: 'Spacer Tech', value: 'Warm Edge / Swiss', icon: Thermometer },
        { id: 'AF', label: 'Argon Content', value: '90% Gas Fill High', icon: Wind },
        { id: 'DF', label: 'Dew Point Index', value: '< -40°C Tested', icon: Droplets },
      ]
    }
  },
  SpecializedSystems: {
    id: 'SpecializedSystems',
    label: 'Specialized Systems',
    subCategories: [
      { id: 'Fire', label: 'Fire Protective' },
      { id: 'Ballistic', label: 'Ballistic Rated' },
      { id: 'Automated', label: 'Active Smart Glass' },
    ],
    specs: {
      Fire: [
        { id: 'EI', label: 'Fire Integrity', value: 'EI30 / 60 / 120', icon: Flame },
        { id: 'TH', label: 'Thickness Ref', value: '25mm - 52mm Range', icon: Maximize2 },
        { id: 'CT', label: 'Certification', value: 'UL / EN Certified', icon: Info },
        { id: 'HS', label: 'Heat Shield 1', value: 'Radiant Heat Block', icon: Thermometer },
      ],
      Ballistic: [
        { id: 'BR', label: 'Ballistic Grade', value: 'FB4 / FB6 / FB7', icon: Shield },
        { id: 'NS', label: 'Spall Control', value: 'No-Spall Inner', icon: Target },
        { id: 'WT', label: 'Weight Impact', value: 'High Density Spec', icon: Layers },
        { id: 'ST', label: 'Steel Inserts', value: 'Alloy Reinforcement', icon: Zap },
      ],
      Automated: [
        { id: 'PD', label: 'Switch Latency', value: '< 100ms Reaction', icon: Zap },
        { id: 'LC', label: 'Light Control', value: '1% to 80% Range', icon: Info },
        { id: 'PW', label: 'Power Draw', value: '5W/m² Efficiency', icon: Zap },
        { id: 'CR', label: 'Control Logic', value: 'DALI / App / BMS', icon: Settings },
      ]
    }
  },
  GeneralFinishing: {
    id: 'GeneralFinishing',
    label: 'General Finishing',
    subCategories: [
      { id: 'Screeding', label: 'Floor Levelling' },
      { id: 'Turnkey', label: 'Project Handover' },
      { id: 'Curation', label: 'Material Selection' },
    ],
    specs: {
      Screeding: [
        { id: 'SL', label: 'Self-Levelling Tol.', value: '±1mm over 3m', icon: Target },
        { id: 'DC', label: 'Drying Capacity', value: '24hrs Foot Traffic', icon: Zap },
        { id: 'CH', label: 'Compressive Hard.', value: 'C30 / EN 13813', icon: Shield },
        { id: 'TH', label: 'Layer Thickness', value: '3mm - 50mm Range', icon: Maximize2 },
      ],
      Turnkey: [
        { id: 'QA', label: 'Snagging Protocol', value: 'Zero-Defect Goal', icon: Shield },
        { id: 'MC', label: 'Moisture Audit', value: '< 2.5% CM Testing', icon: Droplets },
        { id: 'CS', label: 'Cert. Submission', value: 'O&M Manual Ready', icon: Info },
        { id: 'HL', label: 'Handover Lead-Time', value: '48hr Final Prep', icon: Zap },
      ],
      Curation: [
        { id: 'MT', label: 'Material Sourcing', value: 'Global Supply Net', icon: Wind },
        { id: 'FI', label: 'Finish Verification', value: 'Mock-up Approval', icon: Target },
        { id: 'ST', label: 'Sustainability Gr.', value: 'LEED / BREEAM Opt.', icon: Shield },
        { id: 'DT', label: 'Detailing Focus', value: 'Sub-mm Tolerance', icon: Settings },
      ]
    }
  },
  AluminiumProfiles: {
    id: 'AluminiumProfiles',
    label: 'Aluminium Profiles',
    subCategories: [
      { id: 'Extrusions', label: 'Precision Extrusions' },
      { id: 'Finishing', label: 'Surface Finishing' },
      { id: 'Structural', label: 'Structural Die' },
    ],
    specs: {
      Extrusions: [
        { id: 'AL', label: 'Alloy Grade', value: '6063-T6 Architectural', icon: Target },
        { id: 'TL', label: 'Extrusion Tolerance', value: '±0.15mm Precision', icon: Settings },
        { id: 'TH', label: 'Wall Thickness', value: '1.2mm - 3.5mm Range', icon: Maximize2 },
        { id: 'ML', label: 'Maximum Length', value: '7.2 Metres', icon: Maximize2 },
      ],
      Finishing: [
        { id: 'AZ', label: 'Anodizing Class', value: 'Class 2 / AA 20', icon: Shield },
        { id: 'PC', label: 'Powder Coating', value: 'Qualicoat Class 2', icon: Zap },
        { id: 'UV', label: 'UV Resistance', value: 'Florida Tested Cat. A', icon: Thermometer },
        { id: 'CS', label: 'Color Stability', value: '25-Year Delta Stability', icon: Info },
      ],
      Structural: [
        { id: 'SY', label: 'Yield Strength', value: '170 MPa Standard', icon: Zap },
        { id: 'MD', label: 'Modulus of Elasticity', value: '69.5 GPa Range', icon: Layers },
        { id: 'TN', label: 'Ultimate Tensile', value: '215 MPa Range', icon: Target },
        { id: 'WL', label: 'Wind-Load Peak', value: '3.6 kN/m² Capacity', icon: Wind },
      ]
    }
  }
};
