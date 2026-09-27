import DashboardScreen from '../screens/Dealer-Dashboard';
import { useAuth } from '../lib/auth';

/** Phase 2: the dashboard greets the signed-in dealer; its figures become live in Phase 3. */
export default function DealerDashboardPage() {
  const { me } = useAuth();
  const dealer = me?.dealer;
  const design = !!(window as unknown as { __D90_DESIGN_MODE__?: boolean }).__D90_DESIGN_MODE__;
  if (design || !dealer) return <DashboardScreen />;
  return (
    <DashboardScreen
      content={{ welcome: `Welcome back, ${dealer.businessName}` }}
      // The "Marketing restricted by Admin" pill only shows when Marketing really is locked.
      slots={dealer.features.marketing ? { marketingPill: null } : {}}
    />
  );
}
