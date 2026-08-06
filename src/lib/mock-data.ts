import headphones from "@/assets/item-headphones.jpg";
import keys from "@/assets/item-keys.jpg";
import backpack from "@/assets/item-backpack.jpg";
import laptop from "@/assets/item-laptop.jpg";
import bottle from "@/assets/item-bottle.jpg";
import idCard from "@/assets/item-id.jpg";

export type ItemStatus = "lost" | "found" | "claimed";

export type ItemCategory =
  | "Electronics"
  | "Keys"
  | "Bags"
  | "ID & Cards"
  | "Bottles"
  | "Books"
  | "Clothing";

export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  status: ItemStatus;
  location: string;
  date: string;
  image: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  reportedBy: string;
}

export const CATEGORIES: ItemCategory[] = [
  "Electronics",
  "Keys",
  "Bags",
  "ID & Cards",
  "Bottles",
  "Books",
  "Clothing",
];

export const LOCATIONS = [
  "Central Library — Floor 3",
  "Student Center",
  "Engineering Block C",
  "North Cafeteria",
  "Sports Complex",
  "Lecture Hall 204",
  "Bus Stop — Gate 2",
  "Hostel Block B",
];

export const items: Item[] = [
  {
    id: "cf-1041",
    name: "Sony WF-1000XM5 Earbuds",
    category: "Electronics",
    status: "found",
    location: "Central Library — Floor 3",
    date: "2026-08-04",
    image: headphones,
    description:
      "Black charging case with both earbuds inside, found on a study table near the window. Small scratch on the lid. Handed over to the library help desk.",
    contactName: "Ananya Rao",
    contactEmail: "ananya.rao@campus.edu",
    contactPhone: "+1 (415) 220-8891",
    reportedBy: "Library Help Desk",
  },
  {
    id: "cf-1039",
    name: "Hostel Keys with Blue Lanyard",
    category: "Keys",
    status: "lost",
    location: "Student Center",
    date: "2026-08-03",
    image: keys,
    description:
      "Three keys on a steel ring with a small black rubber tag. Lost somewhere between the Student Center and the north gate after evening club meet.",
    contactName: "Devansh Mehta",
    contactEmail: "devansh.m@campus.edu",
    contactPhone: "+1 (415) 771-4402",
    reportedBy: "Devansh Mehta",
  },
  {
    id: "cf-1036",
    name: "Navy Blue Wildcraft Backpack",
    category: "Bags",
    status: "found",
    location: "Engineering Block C",
    date: "2026-08-02",
    image: backpack,
    description:
      "Contains a notebook and a calculator. Found outside the CAD lab after the 4 PM session. Owner can claim after describing the contents.",
    contactName: "Priya Nair",
    contactEmail: "priya.nair@campus.edu",
    contactPhone: "+1 (415) 908-2231",
    reportedBy: "Priya Nair",
  },
  {
    id: "cf-1030",
    name: 'MacBook Air 13" (Silver)',
    category: "Electronics",
    status: "claimed",
    location: "Lecture Hall 204",
    date: "2026-07-29",
    image: laptop,
    description:
      "Left behind after the statistics lecture. Returned to its owner on 31 July after ID verification at the security office.",
    contactName: "Campus Security",
    contactEmail: "security@campus.edu",
    contactPhone: "+1 (415) 555-0119",
    reportedBy: "Campus Security",
  },
  {
    id: "cf-1027",
    name: "Steel Insulated Water Bottle",
    category: "Bottles",
    status: "found",
    location: "Sports Complex",
    date: "2026-07-28",
    image: bottle,
    description:
      "Brushed steel 750ml bottle with a dented base, found near the bench press area in the main gym.",
    contactName: "Coach Aditi Sharma",
    contactEmail: "aditi.sharma@campus.edu",
    contactPhone: "+1 (415) 332-7710",
    reportedBy: "Sports Complex Desk",
  },
  {
    id: "cf-1024",
    name: "Student ID Card & Lanyard",
    category: "ID & Cards",
    status: "lost",
    location: "North Cafeteria",
    date: "2026-07-26",
    image: idCard,
    description:
      "White ID card on a grey lanyard, roll number ending in 4471. Probably dropped near the cafeteria payment counter during lunch hour.",
    contactName: "Rohit Verma",
    contactEmail: "rohit.verma@campus.edu",
    contactPhone: "+1 (415) 664-9080",
    reportedBy: "Rohit Verma",
  },
  {
    id: "cf-1019",
    name: "Bose QuietComfort Earbuds",
    category: "Electronics",
    status: "claimed",
    location: "Bus Stop — Gate 2",
    date: "2026-07-22",
    image: headphones,
    description:
      "Found at the shuttle stop in the morning, reunited with the owner the same evening through CampusFind.",
    contactName: "Shuttle Office",
    contactEmail: "transport@campus.edu",
    contactPhone: "+1 (415) 555-0177",
    reportedBy: "Shuttle Office",
  },
  {
    id: "cf-1015",
    name: "Bike Lock Keys",
    category: "Keys",
    status: "found",
    location: "Hostel Block B",
    date: "2026-07-20",
    image: keys,
    description:
      "Two small keys with a red plastic head, found in the hostel B bicycle stand. Kept with the hostel warden.",
    contactName: "Warden's Office",
    contactEmail: "hostelb@campus.edu",
    contactPhone: "+1 (415) 555-0142",
    reportedBy: "Warden's Office",
  },
  {
    id: "cf-1011",
    name: "Grey Laptop Sleeve",
    category: "Bags",
    status: "lost",
    location: "Central Library — Floor 3",
    date: "2026-07-18",
    image: backpack,
    description:
      "Felt sleeve for a 13-inch laptop with a small enamel pin on the front. Last seen at the group study pods.",
    contactName: "Meera Iyer",
    contactEmail: "meera.iyer@campus.edu",
    contactPhone: "+1 (415) 447-1123",
    reportedBy: "Meera Iyer",
  },
  {
    id: "cf-1008",
    name: "Dell XPS Charger",
    category: "Electronics",
    status: "found",
    location: "Lecture Hall 204",
    date: "2026-07-15",
    image: laptop,
    description: "65W charger with a frayed cable tie, left plugged in at the third-row socket.",
    contactName: "Ravi Kulkarni",
    contactEmail: "ravi.k@campus.edu",
    contactPhone: "+1 (415) 889-3320",
    reportedBy: "Ravi Kulkarni",
  },
  {
    id: "cf-1004",
    name: "Copper Sipper Bottle",
    category: "Bottles",
    status: "claimed",
    location: "North Cafeteria",
    date: "2026-07-12",
    image: bottle,
    description: "Returned to its owner from the cafeteria counter after a matching report.",
    contactName: "Cafeteria Desk",
    contactEmail: "dining@campus.edu",
    contactPhone: "+1 (415) 555-0188",
    reportedBy: "Cafeteria Desk",
  },
  {
    id: "cf-1001",
    name: "Library Access Card",
    category: "ID & Cards",
    status: "found",
    location: "Central Library — Floor 3",
    date: "2026-07-10",
    image: idCard,
    description: "Access card without a name sticker, found inside a returned reference book.",
    contactName: "Library Help Desk",
    contactEmail: "library@campus.edu",
    contactPhone: "+1 (415) 555-0133",
    reportedBy: "Library Help Desk",
  },
];

export function getItem(id: string) {
  return items.find((item) => item.id === id);
}

export function similarItems(item: Item, count = 3) {
  return items
    .filter((candidate) => candidate.id !== item.id)
    .sort((a, b) => Number(b.category === item.category) - Number(a.category === item.category))
    .slice(0, count);
}

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const stats = {
  recovered: 1284,
  active: 342,
  students: 9600,
  matchRate: 78,
};
