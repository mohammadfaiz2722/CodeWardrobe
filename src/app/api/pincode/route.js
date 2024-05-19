import { NextResponse } from "next/server";

// Define the GET function for the API route
export async function GET(req) {
  const indianPincodes = [
    110001, 110002, 110003, 110004, 110005, 110006, 110007, 110008, 110009,
    110010, 110011, 110012, 110013, 110014, 110015, 110016, 110017, 110018,
    110019, 110020, 110021, 110022, 110023, 110024, 110025, 110026, 110027,
    110028, 110029, 110030, 110031, 110032, 110033, 110034, 110035, 110036,
    110037, 110038, 110039, 110040, 110041, 110042, 110043, 110044, 110045,
    110046, 110047, 110048, 110049, 110050, 110051, 110052, 110053, 110054,
    110055, 110056, 110057, 110058, 110059, 110060, 110061, 110062, 110063,
    110064, 110065, 110066, 110067, 110068, 110069, 110070, 110071, 110072,
    110073, 110074, 110075, 110076, 110077, 110078, 110079, 110080, 110081,
    110082, 110083, 110084, 110085, 110086, 110087, 110088, 110089, 110090,
    110091, 110092, 110093, 110094, 110095, 110096, 110097, 110098, 110099,
    // Pincodes of Uttar Pradesh
    201001, 201002, 201003, 201004, 201005, 201006, 201007, 201008, 201009,
    201010, 201011, 201012, 201013, 201014, 201015, 201016, 201017, 201018,
    201019, 201020, 201021, 201022, 201023, 201024, 201025, 201026, 201027,
    201028, 201029, 201030, 201031, 201032, 201033, 201034, 201035, 201036,
    201037, 201038, 201039, 201040, 201041, 201042, 201043, 201044, 201045,
    201046, 201047, 201048, 201049, 201050, 201051, 201052, 201053, 201054,
    201055, 201056, 201057, 201058, 201059, 201060, 201061, 201062, 201063,
    201064, 201065, 201066, 201067, 201068, 201069, 201070, 201071, 201072,
    201073, 201074, 201075, 201076, 201077, 201078, 201079, 201080, 201081,
    201082, 201083, 201084, 201085, 201086, 201087, 201088, 201089, 201090,
    201091, 201092, 201093, 201094, 201095, 201096, 201097, 201098, 201099,
    202001, 202002, 202003, 202004, 202005, 202006, 202007, 202008, 202009,
    202010, 202011, 202012, 202013, 202014, 202015, 202016, 202017, 202018,
    202019, 202020, 202021, 202022, 202023, 202024, 202025, 202026, 202027,
    202028, 202029, 202030, 202031, 202032, 202033, 202034, 202035, 202036,
    202037, 202038, 202039, 202040, 202041, 202042, 202043, 202044, 202045,
    202046, 202047, 202048, 202049, 202050, 202051, 202052, 202053, 202054,
    202055, 202056, 202057, 202058, 202059, 202060, 202061, 202062, 202063,
    202064, 202065, 202066, 202067, 202068, 202069, 202070, 202071, 202072,
    202073, 202074, 202075, 202076, 202077, 202078, 202079, 202080, 202081,
    202082, 202083, 202084, 202085, 202086, 202087, 202088, 202089, 202090,
    202091, 202092, 202093, 202094, 202095, 202096, 202097, 202098, 202099,
    203001, 203002, 203003, 203004, 203005, 203006, 203007, 203008, 203009,
    203010, 203011, 203012, 203013, 203014, 203015, 203016, 203017, 203018,
    203019, 203020, 203021, 203022, 203023, 203024, 203025, 203026, 203027,
    203028, 203029, 203030, 203031, 203032, 203033, 203034, 203035, 203036,
    203037, 203038, 203039, 203040, 203041, 203042, 203043, 203044, 203045,
    203046, 203047, 203048, 203049, 203050, 203051, 203052, 203053, 203054,
    203055, 203056, 203057, 203058, 203059, 203060, 203061, 203062, 203063,
    203064, 203065, 203066, 203067, 203068, 203069, 203070, 203071, 203072,
    203073, 203074, 203075, 203076, 203077, 203078, 203079, 203080, 203081,
    203082, 203083, 203084, 203085, 203086, 203087, 203088, 203089, 203090,
    203091, 203092, 203093, 203094, 203095, 203096, 203097, 203098, 203099,224001
    // Add more pincodes as needed
  ];

  return NextResponse.json(indianPincodes);
}