// Portfolio project metadata shared by the gallery (client) and the
// CollectionPage JSON-LD (server). Text comes from messages/*.json -> projects.<key>.
export const PROJECTS = [
  { key: 'szelvedo', url: 'https://www.kunpeter-szelvedojavitas.hu' },
  { key: 'pille', url: null },
  { key: 'fleetflow', url: null },
  { key: 'car-rental', url: null },
  { key: 'gym', url: null },
  { key: 'jedligram', url: null },
];

export const PROJECT_URLS = Object.fromEntries(
  PROJECTS.map(({ key, url }) => [key, url]),
);
