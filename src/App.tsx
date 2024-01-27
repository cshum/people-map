import React from 'react';
import { Navigator } from 'react-onsenui';
import PeopleListPage from './pages/PeopleListPage';
import { PeopleProvider } from './context/PeopleContext';

const renderPage = (route: any, navigator?: Navigator): React.JSX.Element => {
  const props = route.props || {};
  props.navigator = navigator;

  return <route.component {...props} />;
};

const App = () => {
  return (
    <PeopleProvider>
      <Navigator
        initialRoute={{
          component: PeopleListPage,
          props: { key: 'peopleListPage' },
        }}
        renderPage={renderPage}
        // @ts-ignore
        swipeable={true}
      />
    </PeopleProvider>
  );
};

export default App;
