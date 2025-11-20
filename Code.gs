//
// [!] ===== Main Checklist ===== [!]
// The checklist for 100% completion.
//
function MainCheck() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var completion = 0;

  // Register every checkbox (is there any better way to do this lmao)
  let farsight = [
    // Red Tools
    "D5","D6","D7","D8","D9","D10","D11","D12","D13","D14","D15","D16","D17","D18","D19","D20","D21","D22",
    // Blue Tools
    "G5","G6","G7","G8","G9","G10","G11","G12","G13","G14","G15","G16","G17","G18","G19","G20","G21","G22","G23","G24","G25",
    // Yellow Tools
    "J5","J6","J7","J8","J9","J10","J11","J12","J13","J14","J15","J16",
    // Ancestral Arts
    "M4","M5","M6","M7","M8","M9",
    // Needle Upgrades
    "M11","M12","M13","M14",
    // Silk Skills
    "M16","M17","M18","M19","M20","M21",
    // Tool Pouch & Crafting Kit Upgrades
    "M24","M25","M26","M27","M29","M30","M31","M32",
    // Silk Hearts
    "D27","D28","D29",
    // Crests
    "G27","G28","G29","G30","G31","G32",
    // Mask Shards
    "G34","G35","G36","G37","G38","G39","G40","G41","G42","G43","G44","G45","G46","G47","G48","G49","G50","G51","G52","G53",
    // Spool Fragments
    "M34","M35","M36","M37","M38","M39","M40","M41","M42","M43","M44","M45","M46","M47","M48","M49","M50","M51",
    // Bind Eva
    "J53",
    // Everbloom
    "M53"
  ];
  
  // Calculate Completion
  for (let i = 0; i<farsight.length; i++) {
    if (sheet.getRange(farsight[i]).getValue() === true) completion++;
  }

  // Clear All
  if (sheet.getRange("F2").getValue() === true) {
    for (let i = 0; i<farsight.length; i++) {
      sheet.getRange(farsight[i]).setValue(false);
    }
    sheet.getRange("F2").setValue(false);
    completion = 0;
  }

  // Show Completion
  sheet.getRange("D2").setValue(completion+"%");
}

//
// [!] ===== Wishes Checklist ===== [!]
// The checklist to keep track of wishes.
//
function Wishes() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var completion = 0;
  var goal = 0;

  // Register every wish
  let wishwall = [
    // Wayfarer Wishes
    "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19",
    // Gather Wishes
    "G4", "G5", "G6", "G7", "G8", "G9",
    // Hunt Wishes
    "J4", "J5", "J6", "J7", "J8", "J9", "J10", "J11", "J12", "J13", "J14",
    // Grand Hunt Wishes
    "M4", "M5", "M6", "M7",
    // Donation Wishes
    "G11", "G12", "G13", "G14", "G15", "G16", "G17",
    // Delivery Wishes
    "M9", "M10", "M11", "M12", "M13", "M14", "M15",
    // Unique Wishes
    "J14", "J15", "J16",
    // Steel Soul Exclusive
    "M17"
  ];

  // Clear All
  if (sheet.getRange("F2").getValue() === true) {
    for (let i = 0; i<wishwall.length; i++) {
      sheet.getRange(wishwall[i]).setValue(false);
    }
    sheet.getRange("F2").setValue(false);
    completion = 0;
  }

  // Calculate Completion
  for (let i = 0; i<wishwall.length; i++) {
    if (sheet.getRange(wishwall[i]).getValue() === true) completion++;
    goal++;
  }

  // Exclude Steel Soul Exclusive
  if (sheet.getRange("M17").getValue() === false) goal = goal - 1;

  // Show Completion
  sheet.getRange("D2").setValue(completion+" / "+goal);

  // Show Act 3 Requirements
  let requirement = ["B8", "B13", "H5", "H7", "E11", "E12", "E13", "E15", "E16", "E17"];
  let requirementcheckbox = ["D8", "D13", "J5", "J7", "G11", "G12", "G13", "G15", "G16", "G17"];
  if (sheet.getRange("J2").getValue() === true) {
    for (let i = 0; i<requirement.length; i++) {
      sheet.getRange(requirement[i]).setBackground("#ffe599");
      sheet.getRange(requirementcheckbox[i]).setBackground("#fff2cc");
    }
  } else {
    for (let i = 0; i<requirement.length; i++) {
      sheet.getRange(requirement[i]).setBackground("#a0c5e8");
      sheet.getRange(requirementcheckbox[i]).setBackground("#cfe2f3");
    }
    
  }

}

//
// [!] ===== Memory Lockets Checklist ===== [!]
// The checklist to keep track of memory lockets.
//
function Lockets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var completion = 0;

  // Register every memory locket
  let memories = ["M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15","M16","M17","M18","M19","M20","M21","M22","M23"];

  // Clear All
  if (sheet.getRange("E2").getValue() === true) {
    for (let i = 0; i<memories.length; i++) {
      sheet.getRange(memories[i]).setValue(false);
    }
    sheet.getRange("E2").setValue(false);
    completion = 0;
  }

  // Calculate Completion
  for (let i = 0; i<memories.length; i++) {
    if (sheet.getRange(memories[i]).getValue() === true) completion++;
  }

  // Show Completion
  sheet.getRange("C2").setValue(completion+" / 20");

  // Act 3
  if (sheet.getRange("L3").getValue() === true) {
    sheet.getRange("B5").setValue("Blasted Steps");
    sheet.getRange("D5").setValue("Purchased from Grindle for 250 rosaries.");
    sheet.getRange("B7").setValue("The Marrow");
    sheet.getRange("D7").setValue("Found in Survivor's Camp laying on the ground next to Flick the Fixer.");
  } else {
    sheet.getRange("B5").setValue("Far Fields");
    sheet.getRange("D5").setValue("Purchased from Mort for 150 rosaries.");
    sheet.getRange("B7").setValue("Bone Bottom");
    sheet.getRange("D7").setValue("Awarded after completing the Volatile Flintbeetles Wish. Reach Greymoor first.");
  }

}

//
// [!] ===== Void Masses Checklist ===== [!]
// The checklist to keep track of void masses because I'm bored
//
function Masses() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var completion = 0;

  // Register every void mass
  let voidmass = ["M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15","M16","M17","M18","M19","M20","M21","M22","M23","M24","M25","M26","M27","M28","M29","M30","M31","M32","M33","M34","M35","M36","M37","M38","M39","M40","M41","M42","M43","M44","M45","M46","M47","M48","M49","M50"];

  // Clear All
  if (sheet.getRange("E2").getValue() === true) {
    for (let i = 0; i<voidmass.length; i++) {
      sheet.getRange(voidmass[i]).setValue(false);
    }
    sheet.getRange("E2").setValue(false);
    completion = 0;
  }

  // Calculate Completion
  for (let i = 0; i<voidmass.length; i++) {
    if (sheet.getRange(voidmass[i]).getValue() === true) completion++;
  }

  if (sheet.getRange("M33").getValue() === true) completion++;

  // Show Completion
  sheet.getRange("C2").setValue(completion+" / 48");

}

//
// [!] ===== Miscellaneous ===== [!]
// Stuffs that do not count toward 100% completion, but still easy to lose track with.
// Some are may required toward the 100% completion, such as wishes and boss fights, to obtain certain tools or skills.
//
function Misc() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();

  let checks = [
    // Pale Oils
    "I5", "I6", "I7",
    // Mossberries
    "G9", "G10", "G11", "G12", "G13", "G14", "G15",
    // Pollip Hearts
    "M9", "M10", "M11", "M12", "M13", "M14",
    // Cogheart Pieces
    "M5", "M6", "M7"
    ];

  // Clear All
  if (sheet.getRange("C3").getValue() === true) {
    for (let i = 0; i<checks.length; i++) {
      sheet.getRange(checks[i]).setValue(false);
    }
    
    sheet.getRange("C3").setValue(false);
  }
}

// Update sheet automatically
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  
  if (sheet.getName() === 'Main Checklist'){
    MainCheck();
  }

  if (sheet.getName() === 'Wishes'){
    Wishes();
  }

  if (sheet.getName() === 'Memory Lockets'){
    Lockets();
  }

  if (sheet.getName() === 'Void Masses'){
    Masses();
  }

  if (sheet.getName() === 'Miscellaneous'){
    Misc();
  }
}
