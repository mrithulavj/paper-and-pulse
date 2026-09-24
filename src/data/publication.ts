export type MagazineEdition = {
  id: string;
  title: string;
  label: string;
  published: string;
  theme: "maroon" | "sage" | "ink";
  pdfUrl?: string;
};

export const magazineEditions: MagazineEdition[] = [
  {
    id: "volume-03",
    title: "The New Archive",
    label: "Volume 03",
    published: "2026",
    theme: "maroon",
  },
  {
    id: "volume-02",
    title: "Between the Lines",
    label: "Volume 02",
    published: "2025",
    theme: "sage",
  },
  {
    id: "volume-01",
    title: "First Impressions",
    label: "Volume 01",
    published: "2024",
    theme: "ink",
  },
];

export type Activity = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

export const activities: Activity[] = [
  {
    id: "writers-room",
    title: "The Writers’ Room",
    description:
      "An open editorial workshop exploring observation, voice, and the craft of turning campus life into stories.",
    date: "August 2026",
    category: "Workshop",
  },
  {
    id: "campus-chronicles",
    title: "Campus Chronicles",
    description:
      "A collaborative reporting project documenting the people, places, and ideas shaping our college community.",
    date: "February 2026",
    category: "Editorial Project",
  },
  {
    id: "open-mic",
    title: "Pages Out Loud",
    description:
      "An evening of poetry, essays, and spoken word where contributors bring the printed page to life.",
    date: "November 2025",
    category: "Community Event",
  },
];

export type FacultyIncharge = {
  id: string;
  name: string;
  designation: string;
  department: string;
};

export const facultyIncharge: FacultyIncharge = {
  id: "faculty-incharge",
  name: "Udhayabanu",
  designation: "Faculty Incharge",
  department: "Department of English",
};

export type OfficeBearer = {
  id: string;
  name: string;
  designation: string;
  department?: string;
  bio: string;
  focus?: string;
};

export const officeBearers: OfficeBearer[] = [
  {
    id: "head-of-publication",
    name: "Mrithula Vijay",
    designation: "Head of Publication",
    focus: "Publication Strategy & Editorial Leadership",
    bio: "Directs the overarching vision, brand direction, and curation of Paper & Pulse. Champions student voices across technical and humanities disciplines, connecting print traditions with modern campus culture.",
  },
  {
    id: "associate-head",
    name: "V Nithin",
    designation: "Associate Head of Publication",
    focus: "Operations & Production Management",
    bio: "Oversees production schedules, contributor liaisons, and cross-departmental outreach. Ensures smooth coordination between writing, review cycles, and final press execution.",
  },
  {
    id: "chief-editor",
    name: "Evangeline",
    designation: "Chief Editor",
    focus: "Literary Standards & Curatorial Direction",
    bio: "Guides editorial rigor and critical standards across issues. Curates student essays, reviews, and investigative features to ensure narrative depth, authentic prose, and stylistic cohesion.",
  },
  {
    id: "content-editor",
    name: "Aashika",
    designation: "Content Editor",
    focus: "Manuscript Editing & Creative Writing",
    bio: "Polishes poetry, prose, and student submissions with a keen eye for tone, rhythm, and clarity. Mentors contributing writers and preserves each author's distinct voice.",
  },
  {
    id: "graphic-designer",
    name: "Nyrah Sara Sanoop",
    designation: "Graphic Designer",
    focus: "Visual Identity & Editorial Art",
    bio: "Shapes the magazine's visual voice through bespoke cover artwork, typography systems, grid architectures, and evocative layout spreads that bring words dynamically to life.",
  },
];
