import { serviceImageList } from './images'

// image is assigned by position: the 1st photo in src/assets/services/
// goes to the 1st service below, the 2nd photo to the 2nd service, etc.
export const process = [
  { number: '01', title: 'Discuss Your Idea', description: 'Call or WhatsApp us with what you need — a door, a panel, a jali design, or a full custom piece.' },
  { number: '02', title: 'Design / Pattern Selection', description: 'We work out the pattern, size and wood type with you before anything is cut.' },
  { number: '03', title: 'CNC Preparation', description: 'The design is set up and prepared for precise CNC cutting.' },
  { number: '04', title: 'Precision Carving', description: 'The CNC machine carves the pattern accurately into the wood.' },
  { number: '05', title: 'Finishing & Inspection', description: 'Every piece is sanded, finished and checked against your requirements.' },
  { number: '06', title: 'Delivery / Installation', description: 'The finished work is delivered or installed, ready for use.' },
]

export const whyChooseUs = [
  'Precision CNC cutting',
  'Custom designs built around your space',
  'Detailed hand and machine wood carving',
  'Careful finishing on every piece',
  'Work made to your exact requirements',
  'Local, Rawalpindi-based workshop',
  'Direct WhatsApp communication throughout the job',
]
const serviceDefs = [
  {
    id: 'three-d-design',
    number: '01',
    title: '3D Wood Design & Carving',
    description:
      'Custom 3D relief carving cut with CNC precision, then finished by hand for depth and detail on feature panels and furniture pieces.',
  },
  {
    id: 'two-d-design',
    number: '02',
    title: '2D CNC Design',
    description:
      'Precise 2D patterns, engraving and decorative cutting for panels, signage and detail work where clean lines matter most.',
  },
  {
    id: 'cnc-carving',
    number: '03',
    title: 'CNC Wood Carving',
    description:
      'Detailed CNC carving for architectural elements and furniture, cut to exact measurements for a consistent, repeatable finish.',
  },
  {
    id: 'panels',
    number: '04',
    title: 'Decorative Wood Panels',
    description:
      'Carved panels for feature walls, interiors and partitions, designed to fit your space and the pattern you have in mind.',
  },
  {
    id: 'doors',
    number: '05',
    title: 'Solid Wood Doors',
    description:
      'Solid wood doors with CNC-cut patterns, carving and engraving, built for entrances, main gates and interior doorways.',
  },
  {
    id: 'jali',
    number: '06',
    title: 'Jali / Decorative Jali Design',
    description:
      'Intricate jali patterns for partitions, doors and interiors, balancing light, airflow and traditional design.',
  },
  {
    id: 'engraving',
    number: '07',
    title: 'Custom Wood Engraving',
    description:
      'Personalised names, motifs and decorative designs engraved into wood for gifts, signage and interior detailing.',
  },
  {
    id: 'kitchen-doors',
    number: '08',
    title: 'Kitchen & Room Doors',
    description:
      'Custom-designed and CNC-cut doors for kitchens and interior rooms, made to the exact sizes your space needs.',
  },
  {
    id: 'carpentry',
    number: '09',
    title: 'Custom Carpentry',
    description:
      'General custom carpentry work built around your requirements, from measurement to finishing.',
  },
  {
    id: 'wardrobes',
    number: '10',
    title: 'Wardrobe / Cabinet Work',
    description:
      'Wardrobes and cabinets built to fit your room, with CNC detailing on shutters and panels where needed.',
  },
]

export const services = serviceDefs.map((service, i) => ({
  ...service,
  image: serviceImageList[i],
}))