import React from 'react';
import {
  Page,
  List,
  Toolbar,
  ProgressCircular,
  Button,
  Icon,
} from 'react-onsenui';
import PersonListItem from '../components/PersonListItem';
import { Person } from '../types';
import { usePeople } from '../context/PeopleContext';
import PersonDetailPage from './PersonDetailPage';

interface PeopleListPageProps {
  navigator: any; // Onsen UI navigator
}

const PeopleListPage = ({ navigator }: PeopleListPageProps) => {
  const { people, isLoading, error, fetchPeople } = usePeople();

  const showPersonDetail = (person: Person) => {
    navigator.pushPage({
      component: PersonDetailPage,
      props: { key: `personDetailPage-${person._id}`, person },
    });
  };

  return (
    <Page
      renderToolbar={() => (
        // @ts-ignore
        <Toolbar>
          <div className='center'>All Friends</div>
        </Toolbar>
      )}
    >
      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '50px',
          }}
        >
          <ProgressCircular indeterminate />
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>{error}</p>
          {
            //@ts-ignore
            <Button onClick={fetchPeople} modifier='outline'>
              <Icon icon='md-refresh' /> Retry
            </Button>
          }
        </div>
      )}

      <List
        dataSource={people}
        renderRow={(person: Person) => (
          <PersonListItem
            key={person._id}
            id={person._id}
            name={`${person.name.first} ${person.name.last}`}
            picture={person.picture}
            onClick={() => showPersonDetail(person)}
          />
        )}
      />
    </Page>
  );
};

export default PeopleListPage;
