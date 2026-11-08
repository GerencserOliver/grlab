// Portfolio project metadata shared by the gallery (client) and the
// CollectionPage JSON-LD (server). Text comes from messages/*.json -> projects.<key>.
export const PROJECTS = [
  { key: 'szelvedo', kind: 'client', url: 'https://www.kunpeter-szelvedojavitas.hu' },
  { key: 'pille', kind: 'client', url: null },
  { key: 'fleetflow', kind: 'client', url: null },
  { key: 'car-rental', kind: 'client', url: null },
  { key: 'gym', kind: 'client', url: null },
  { key: 'jedligram', kind: 'school', url: null },
];

// kind: 'client' = real client project, 'school' = school project (labelled as such in the UI).
export const PROJECT_KINDS = Object.fromEntries(PROJECTS.map(({ key, kind }) => [key, kind]));

export const PROJECT_URLS = Object.fromEntries(
  PROJECTS.map(({ key, url }) => [key, url]),
);
