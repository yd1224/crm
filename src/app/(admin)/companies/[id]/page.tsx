import AddCompanyButton from '../../../components/add-company-button';
import CompanyRow from '../../../components/company-row';
import CompanyTable from '../../../components/company-table';
import Header from '../../../components/header';
import SearchInput from '../../../components/search-input';
import { Status } from '../../../components/status-label';
import Toolbar from '../../../components/toolbar';

export interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies {params.id}</Header>
    </>
  );
}
