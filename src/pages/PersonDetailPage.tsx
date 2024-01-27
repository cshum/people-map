import React from 'react';
import { BackButton, ListItem, Page, Toolbar } from 'react-onsenui';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Person } from '../types';
import { LatLngTuple } from 'leaflet';

interface PersonDetailPageProps {
  navigator: any; // Onsen UI navigator
  person: Person;
}

const PersonDetailPage = ({ person, navigator }: PersonDetailPageProps) => {
  const position =
    typeof person.location.latitude == 'number' &&
    typeof person.location.longitude == 'number'
      ? ([person.location.latitude, person.location.longitude] as LatLngTuple)
      : undefined;
  const roughPosition = [
    person.location.latitude || 0,
    person.location.longitude || 0,
  ] as LatLngTuple;

  return (
    <Page
      renderToolbar={() => (
        // @ts-ignore
        <Toolbar>
          <div className='left'>
            <BackButton />
          </div>
          <div className='center'>
            {`${person.name.first} ${person.name.last}`}
          </div>
        </Toolbar>
      )}
    >
      <MapContainer
        center={roughPosition}
        attributionControl={false}
        zoom={position ? 13 : 2}
        scrollWheelZoom={true}
        style={{ height: '50%', width: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {position && <Marker position={position} />}
      </MapContainer>
      <ListItem key={person._id}>
        <div className='left'>
          <img
            className='list-item__thumbnail'
            src={person.picture}
            alt={`${person.name.first} ${person.name.last}`}
          />
        </div>
        <div className='center'>
          <span className='list-item__title'>{`${person.name.first} ${person.name.last}`}</span>
          <span className='list-item__subtitle'>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </span>
        </div>
      </ListItem>
    </Page>
  );
};

export default PersonDetailPage;
