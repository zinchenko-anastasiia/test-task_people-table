import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { getPeople } from '../Api';
import { Person } from '../types/Person';

interface Context {
  peopleTable: Person[];
  setPeopleTable: Dispatch<SetStateAction<Person[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

export const DataContext = createContext<Context>({
  setPeopleTable: () => undefined,
  peopleTable: [],
  isError: false,
  setIsError: () => undefined,
  isLoading: true,
  setIsLoading: () => undefined,
});

export const DataProvider = ({ children }: { children?: ReactNode }) => {
  const [peopleTable, setPeopleTable] = useState<Person[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const peopleFromServer = await getPeople();

        setPeopleTable(peopleFromServer);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        peopleTable,
        setPeopleTable,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
