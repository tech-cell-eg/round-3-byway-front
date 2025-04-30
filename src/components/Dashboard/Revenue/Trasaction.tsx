import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Search } from 'lucide-react';

const initialData = [
  {
    id: '1',
    user: 'John Doe',
    date: '2024-04-01',
    type: 'Credit',
    amount: '$500.00',
  },
  {
    id: '2',
    user: 'Jane Smith',
    date: '2024-04-02',
    type: 'Debit',
    amount: '$250.00',
  },
  {
    id: '3',
    user: 'Ali Saleh',
    date: '2024-04-03',
    type: 'Credit',
    amount: '$800.00',
  },
  {
    id: '4',
    user: 'Fatima Noor',
    date: '2024-04-04',
    type: 'Debit',
    amount: '$400.00',
  },
  {
    id: '5',
    user: 'Omar Khaled',
    date: '2024-04-05',
    type: 'Credit',
    amount: '$900.00',
  },
];

type SortKey = 'user' | 'date' | 'type' | 'amount';

export default function TransactionsTable() {
  const { t } = useTranslation('dashboard/Transactions');
  const [data, setData] = useState(initialData);
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [ascending, setAscending] = useState(true);

  const handleSort = (key: SortKey) => {
    const isAsc = sortKey === key ? !ascending : true;
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return isAsc ? -1 : 1;
      if (a[key] > b[key]) return isAsc ? 1 : -1;
      return 0;
    });
    setData(sorted);
    setSortKey(key);
    setAscending(isAsc);
  };

  return (
    <div className="p-4 pt-0 mt-1 bg-transparent rounded-lg ">
      <h2 className="text-lg font-semibold">{t('transactions')}</h2>
      <div className="mt-2 mb-4">
        <div className="relative w-full md:max-w-sm">
          <Input
            type="search"
            placeholder={t('searchUser')}
            className="w-full pr-10 border-border-light text-button-secondary"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-button-secondary h-4 w-4" />
        </div>
      </div>
      <Table className="bg-white shadow-sm rounded-lg text-start">
        <TableHeader className="text-start">
          <TableRow className="border-b border-border-light text-button-secondary font-medium">
            {['user', 'date', 'type', 'amount'].map(key => (
              <TableHead
                key={key}
                className={`text-muted-foreground cursor-pointer select-none `}
                onClick={() => handleSort(key as SortKey)}
              >
                {t(key)}
                {sortKey === key ? (
                  ascending ? (
                    <ChevronUp className="inline w-4 h-4 ml-1" />
                  ) : (
                    <ChevronDown className="inline w-4 h-4 ml-1" />
                  )
                ) : (
                  <ChevronDown className="inline w-4 h-4 ml-1 opacity-50" />
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map(item => (
            <TableRow
              key={item.id}
              className="border-b border-border-light text-start font-medium text-surface-dark-secondary"
            >
              <TableCell>{item.user}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell
                className={
                  item.type === 'Credit'
                    ? 'text-green-600 font-medium'
                    : 'text-red-600 font-medium'
                }
              >
                {t(item.type)}
              </TableCell>
              <TableCell className="">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
