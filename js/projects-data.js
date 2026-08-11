/**
 * Rotaract Club of Kathmandu Kalanki - Hosted Projects Data
 * Rota Year Source of Truth
 */

const ROTA_YEARS = [
  { code: "25-26", label: "2025–26" },
  { code: "26-27", label: "2026–27" }
];

const HOSTED_PROJECTS = [
  {
    id: "proj-01",
    name: "President Elect Finalization",
    rotaYear: "25-26",
    date: "20 December 2025",
    isoDate: "2025-12-20",
    day: "Saturday",
    time: "11:00 AM – 12:30 PM",
    venue: "Basiyo Office",
    category: "Club Administration",
    categorySlug: "club-admin",
    shortDescription: "A leadership transition initiative focused on finalizing the President-Elect and ensuring continuity in club leadership.",
    objectives: [
      "To finalize and endorse the President-Elect for the upcoming Rotary Year through a transparent and democratic process.",
      "To ensure a smooth leadership transition and continuity of club operations.",
      "To identify and empower future leaders capable of guiding the club toward sustained growth and impact."
    ],
    collaborators: []
  },
  {
    id: "proj-02",
    name: "2nd ZRR Visit",
    rotaYear: "25-26",
    date: "11 June 2026",
    isoDate: "2026-06-11",
    day: "Thursday",
    time: "9:00 PM – 10:45 PM",
    venue: "Google Meet",
    category: "Club Administration",
    categorySlug: "club-admin",
    shortDescription: "A virtual visit focused on reviewing club progress, receiving guidance, and strengthening coordination with district leadership.",
    objectives: [
      "To review the club's activities and progress during the Rotaract year.",
      "To facilitate communication between the club and district leadership.",
      "To receive guidance and recommendations for future projects and initiatives.",
      "To strengthen member engagement and organizational development.",
      "To ensure alignment with district goals and expectations."
    ],
    collaborators: []
  },
  {
    id: "proj-03",
    name: "Road Safety Awareness Session",
    rotaYear: "25-26",
    date: "8 June 2026",
    isoDate: "2026-06-08",
    day: "Monday",
    time: "2:00 PM",
    venue: "Shree Jana Udaya Secondary School, Bhaisepati",
    category: "Service Project",
    categorySlug: "service",
    shortDescription: "An awareness session designed to help students understand road safety, traffic rules, pedestrian safety, and responsible road behavior.",
    objectives: [
      "To educate students about road safety rules and traffic regulations.",
      "To raise awareness about pedestrian safety and accident prevention.",
      "To encourage responsible behavior while using roads and public spaces.",
      "To familiarize students with traffic signs and safe road-crossing practices."
    ],
    collaborators: []
  },
  {
    id: "proj-04",
    name: "Nationwide Cleaning Campaign 2026",
    rotaYear: "25-26",
    date: "5 June 2026",
    isoDate: "2026-06-05",
    day: "Friday",
    time: "4:00 PM",
    venue: "Mahalaxmistan Mandir, Bhaisepati",
    category: "Service Project",
    categorySlug: "service",
    shortDescription: "A community service initiative focused on cleanliness, environmental responsibility, waste management, and preservation of shared spaces.",
    objectives: [
      "To promote cleanliness and environmental responsibility through community action.",
      "To contribute to the maintenance and preservation of Mahalaxmistan Temple premises.",
      "To raise awareness about proper waste management and hygiene practices."
    ],
    collaborators: []
  },
  {
    id: "proj-05",
    name: "Zonal Painting",
    rotaYear: "25-26",
    date: "28 March 2026",
    isoDate: "2026-03-28",
    day: "Saturday",
    time: "1:00 PM",
    venue: "Anmol Children Development Home, Baneshwor",
    category: "Service Project",
    categorySlug: "service",
    shortDescription: "A collaborative painting initiative aimed at improving and refreshing the living environment of the children at Anmol Children Development Home.",
    objectives: [
      "To improve the physical environment and aesthetics of the orphanage.",
      "To create a more positive and child-friendly living space for residents."
    ],
    collaborators: []
  },
  {
    id: "proj-06",
    name: "Goodwill Visit From RAC Sainbu Bhaisepati",
    rotaYear: "25-26",
    date: "7 February 2026",
    isoDate: "2026-02-07",
    day: "Saturday",
    time: "11:00 AM",
    venue: "Basiyo Office",
    category: "Fellowship",
    categorySlug: "fellowship",
    shortDescription: "A goodwill visit focused on strengthening fellowship, networking, idea exchange, and future collaboration between Rotaract clubs.",
    objectives: [
      "To strengthen fellowship between both clubs.",
      "To promote networking and relationship-building among members.",
      "To exchange ideas and experiences related to Rotaract activities.",
      "To encourage future collaboration and joint initiatives."
    ],
    collaborators: ["RAC Sainbu Bhaisepati"]
  },
  {
    id: "proj-07",
    name: "1st ZRR Visit",
    rotaYear: "25-26",
    date: "22 November 2025",
    isoDate: "2025-11-22",
    day: "Saturday",
    time: "2:00 PM",
    venue: "Basiyo Office",
    category: "Club Administration",
    categorySlug: "club-admin",
    shortDescription: "A club review and guidance session focused on progress, future plans, organizational development, and coordination with district leadership.",
    objectives: [
      "To facilitate communication between the club and district leadership.",
      "To review the club's progress, activities, and future plans.",
      "To receive guidance and recommendations for club development.",
      "To strengthen member engagement and organizational effectiveness.",
      "To align club goals with the vision and objectives of the district."
    ],
    collaborators: []
  },
  {
    id: "proj-08",
    name: "Club COTS",
    rotaYear: "25-26",
    date: "28 February 2026",
    isoDate: "2026-02-28",
    day: "Saturday",
    time: "12:00 PM",
    venue: "Basiyo Office",
    category: "Training & Leadership",
    categorySlug: "training",
    shortDescription: "A Club Officers Training Seminar focused on leadership, administration, project planning, teamwork, and preparing officers for their responsibilities.",
    objectives: [
      "To provide club officers with a clear understanding of their roles and responsibilities.",
      "To develop leadership, communication, and team management skills among board members.",
      "To enhance knowledge of club administration, project planning, and execution.",
      "To promote effective coordination and collaboration within the leadership team.",
      "To strengthen officers' capacity to organize impactful service and professional development projects.",
      "To encourage strategic planning for a successful and sustainable Rotaract year.",
      "To build confidence and preparedness among officers for carrying out their duties effectively."
    ],
    collaborators: []
  },
  {
    id: "proj-09",
    name: "Bond Beyond Bhailo",
    rotaYear: "25-26",
    date: "20 November 2025",
    isoDate: "2025-11-20",
    day: "Thursday",
    time: "7:00 PM",
    venue: "Cooker's Coffee, Baneshwor",
    category: "Fellowship",
    categorySlug: "fellowship",
    shortDescription: "A fellowship initiative designed to strengthen relationships, engagement, teamwork, and a sense of belonging among club members.",
    objectives: [
      "To provide a platform for meaningful interaction and relationship-building.",
      "To enhance member engagement and participation in club activities.",
      "To foster unity, friendship, and a sense of belonging within the club.",
      "To encourage teamwork and collaboration through interactive games and activities."
    ],
    collaborators: []
  },
  {
    id: "proj-10",
    name: "Retro de Nepal",
    rotaYear: "25-26",
    date: "18 January 2026",
    isoDate: "2026-01-18",
    day: "Sunday",
    time: "6:00 AM",
    venue: "Busy Bee Cafe",
    category: "Fellowship",
    categorySlug: "fellowship",
    shortDescription: "A fellowship-focused event bringing together Rotaractors, alumni, professionals, sponsors, and community members for networking, engagement, and support for future initiatives.",
    objectives: [
      "To strengthen fellowship and camaraderie among Rotaractors, alumni, and community members.",
      "To mobilize resources that support future club activities and community service projects.",
      "To provide opportunities for networking and meaningful relationship-building.",
      "To strengthen the public image of the club."
    ],
    collaborators: []
  },
  {
    id: "proj-11",
    name: "Sankat Pachi Sahara: A Post GenZ Movement Initiative",
    rotaYear: "25-26",
    date: "15 September 2025 – 22 September 2025",
    isoDate: "2025-09-15",
    day: "Monday – Monday",
    time: "12:00 PM – 6:00 PM",
    venue: "Kalanki Traffic Police Station",
    category: "Service Project",
    categorySlug: "service",
    shortDescription: "A humanitarian and institutional support initiative focused on improving the working environment and supporting traffic police personnel serving the Kalanki community.",
    objectives: [
      "To improve the working and living conditions of traffic police personnel stationed at Kalanki Traffic Police Station.",
      "To support the renovation and enhancement of the station's physical infrastructure through the provision of furniture and painting materials.",
      "To promote the values of service, gratitude, and civic responsibility among Rotaractors and community members.",
      "To promote a culture of gratitude and respect towards frontline public service providers."
    ],
    collaborators: []
  },
  {
    id: "proj-12",
    name: "First Installation Ceremony",
    rotaYear: "25-26",
    date: "19 July 2025",
    isoDate: "2025-07-19",
    day: "Saturday",
    time: "4:00 PM",
    venue: "Drisaya Hotel",
    category: "Club Administration",
    categorySlug: "club-admin",
    shortDescription: "The formal installation ceremony establishing the club's leadership, vision, goals, and foundation for the new Rotaract year.",
    objectives: [
      "To officially establish the Rotaract Club of Kathmandu Kalanki.",
      "To introduce the new team, visions, and goals for the upcoming year.",
      "To strengthen unity, commitment, and leadership values among all members.",
      "To foster fellowship among members and set the tone for the new Rotaract year."
    ],
    collaborators: []
  },
  {
    id: "proj-13",
    name: "Teej Daar Celebration",
    rotaYear: "25-26",
    date: "30 August 2025",
    isoDate: "2025-08-30",
    day: "Saturday",
    time: "1:00 PM – 5:00 PM",
    venue: "Thak Khola, New Baneshwor",
    category: "Fellowship",
    categorySlug: "fellowship",
    shortDescription: "A cultural fellowship celebration focused on bonding, cultural appreciation, inter-club relations, and women's empowerment.",
    objectives: [
      "To celebrate Teej 2082 while strengthening fellowship among members of the Rotaract Club of Kopundol and the Rotaract Club of Kathmandu Kalanki.",
      "To create a joyful and culturally rich space for bonding and togetherness while empowering women on the occasion of Teej."
    ],
    collaborators: ["RAC Kopundol"]
  }
];
