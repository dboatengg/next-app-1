import TeamMemberCard from "./_components/TeamMemberCard";

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company, team, and mission.',
};

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <TeamMemberCard />
    </div>
  );
}