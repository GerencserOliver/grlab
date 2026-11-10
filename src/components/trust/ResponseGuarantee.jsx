import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

/**
 * The "we reply within 24 hours" promise shown under forms and calls to action.
 * Purely presentational (no hooks) so it works in server and client components;
 * the parent passes the translated text.
 */
const ResponseGuarantee = ({ text, note, tone = 'light', className = '' }) => {
  const dark = tone === 'dark';

  return (
    <div className={className}>
      <p className={`inline-flex items-center gap-2 text-sm font-bold ${dark ? 'text-brand-green-400' : 'text-brand-green-700'}`}>
        <FontAwesomeIcon icon={faClock} aria-hidden='true' />
        {text}
      </p>
      {note && <p className={`mt-1 text-sm ${dark ? 'text-on-dark-muted' : 'text-ink-muted'}`}>{note}</p>}
    </div>
  );
};

export default ResponseGuarantee;
