import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faSearch,
  faCogs,
  faCode,
  faRocket,
  faLightbulb,
  faStar,
  faHeart,
  faUser,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

// Gradients derived from the logo (blue -> teal -> green) and the dark navy ink.
// Every stop keeps white text >= 6:1.
const BRAND_GRADIENT = 'bg-linear-to-br from-[#0a62b8] via-[#0b7a8c] to-[#0d6a4a]';
const GREEN_GRADIENT = 'bg-linear-to-br from-brand-green-700 via-[#0c5c44] to-ink';

// Complete class strings (not concatenated) so Tailwind can detect them.
export const ACCENTS = {
  brand: BRAND_GRADIENT,
  green: GREEN_GRADIENT,
  teal: 'bg-linear-to-br from-[#0f766e] via-[#0b5d57] to-[#102a2d]',
  orange: 'bg-linear-to-br from-orange-700 via-[#9a3412] to-[#102a2d]',
  slate: 'bg-linear-to-br from-[#2f5b86] via-[#1b3f66] to-ink',
  gray: 'bg-linear-to-br from-[#4b5563] via-[#1f2937] to-ink',
  black: 'bg-linear-to-br from-ink via-[#1f2937] to-ink',
  white: 'bg-linear-to-br from-white via-[#f3f4f6] to-ink',
  blue: 'bg-linear-to-br from-blue-700 via-[#1d4ed8] to-[#1e40af]',
  purple: 'bg-linear-to-br from-purple-700 via-[#7e22ce] to-[#4c1d95]',
};

const ICONS = {
  chart: faChartLine,
  search: faSearch,
  cogs: faCogs,
  code: faCode,
  rocket: faRocket,
  lightbulb: faLightbulb,
  star: faStar,
  heart: faHeart,
  user: faUser,
  clock: faClock,
};

/**
 * Typographic cover art generated from the post's `accent` and `icon` fields,
 * so a post never needs an image file. Purely decorative (aria-hidden).
 */
const PostCover = ({ accent = 'teal', icon = 'code', className = '' }) => {
  const symbol = ICONS[icon] ?? faCode;

  return (
    <div aria-hidden='true' className={`relative overflow-hidden ${ACCENTS[accent] ?? ACCENTS.teal} ${className}`}>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.2),transparent_42%)]' />
      <div className='absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#fff_1.5px,transparent_1.5px)] bg-size-[22px_22px]' />
      <FontAwesomeIcon icon={symbol} className='absolute -bottom-8 -right-6 h-44 w-44 text-white/15' />
      <span className='absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm'>
        <FontAwesomeIcon icon={symbol} className='h-5 w-5' />
      </span>
    </div>
  );
};

export default PostCover;
