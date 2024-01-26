import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Person } from '../types';
import { listPeople } from "../services/peopleService";

interface PeopleProviderProps {
    children: ReactNode;
}

interface PeopleContextProps {
    people: Person[];
    isLoading: boolean;
    error: string | null;
    fetchPeople: () => Promise<void>;
}

const PeopleContext = createContext<PeopleContextProps>({} as PeopleContextProps);

export const usePeople = () => useContext(PeopleContext);

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
    const [people, setPeople] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const fetchPeople = async () => {
        try {
            setIsLoading(true);
            setError(null)
            const data = await listPeople();
            if (data) {
                setPeople(data);
            }
        } catch (error) {
            setError('Failed to fetch people.');
            console.error(error);
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
