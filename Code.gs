function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();

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
  var completion = 0;
  
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

  sheet.getRange("D2").setValue(completion+"%");
}

// Update sheet automatically
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  
  if (sheet.getName() === 'Sheet1'){
    myFunction();
  }
}
