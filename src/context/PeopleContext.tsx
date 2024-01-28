import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { ErrorResponse, Person } from '../types';
import { listPeople } from '../services/peopleService';
import { isAxiosError } from 'axios';

interface PeopleProviderProps {
  children: ReactNode;
}

interface PeopleContextProps {
  people: Person[];
  isLoading: boolean;
  error: string | null;
  fetchPeople: () => Promise<void>;
}

const PeopleContext = createContext<PeopleContextProps>(
  {} as PeopleContextProps
);

export const usePeople = () => useContext(PeopleContext);

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPeople = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await listPeople();
      if (data) {
        setPeople(data);
      }
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        setError(error.response.data.error);
      } else {
        setError('Failed to fetch data.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <PeopleContext.Provider value={{ people, isLoading, error, fetchPeople }}>
      {children}
    </PeopleContext.Provider>
  );
};
