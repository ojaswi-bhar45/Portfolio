export default function DuotoneAvatar({ firstName, lastName }) {
  const initials = `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`;
  return <div className="duotone-avatar">{initials || '?'}</div>;
}
