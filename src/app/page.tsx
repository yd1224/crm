import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page {new Date().toString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
