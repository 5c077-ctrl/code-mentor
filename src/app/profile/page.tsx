import { getSession } from '@/lib/auth';
import { getUserStats, getUserCertificates } from '@/lib/db';
import { redirect } from 'next/navigation';
import ProfileClientView from './ProfileClientView';

export default async function ProfilePage() {
  const session = await getSession();
  if (!session) {
    redirect('/auth/login');
  }

  const userId = session.userId as string;
  const [stats, certificates] = await Promise.all([
    getUserStats(userId),
    getUserCertificates(userId)
  ]);

  return <ProfileClientView stats={stats} certificates={certificates} username={session.username as string} email={session.email as string} />;
}
