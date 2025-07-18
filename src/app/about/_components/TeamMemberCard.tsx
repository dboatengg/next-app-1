import formatName from "../_utils/formatName";

export default function TeamMemberCard() {
    const name = formatName("john doe");
  return (
    <div>
      <h1>Team Member Card</h1>
      <h2>{name}</h2>
      <p>John Doe is a software engineer at Google.</p>
    </div>
  );
}