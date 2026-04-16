// ─── Central course registry ─────────────────────────────────────────────────
// To add a new course:
//   1. Create a new file in ./courses/your-course-slug.js
//   2. Import it here and add it to the array below.
// Everything else (cards, detail pages, routing) works automatically.
 
import advancedClinicalSkills from './courses/advanced-clinical-skills'
import icuCriticalCare from './courses/icu-critical-care'
import homeHealthcare from './courses/home-healthcare'
import softSkillsCommunication from './courses/soft-skills-communication'
import digitalSystemTraining from './courses/digital-system-training'
 
const courses = [
  advancedClinicalSkills,
  icuCriticalCare,
  homeHealthcare,
  softSkillsCommunication,
  digitalSystemTraining,
]
 
export default courses
 