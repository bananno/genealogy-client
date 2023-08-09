import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import HomePage from './HomePage';
import ToDoPage from './ToDoPage';
import PageNotFound from './PageNotFound';

import EventsPage from './EventsPage';
import NotationIndexPage from './notation/NotationIndexPage';
import NotationProfilePage from './notation/NotationProfilePage';
import PersonIndexPage from './person/PersonIndexPage';
import PersonProfilePage from './person/PersonProfilePage';
import SourceIndexPage from './source/SourceIndexPage';
import SourceProfilePage from './source/SourceProfilePage';
import StoryIndexPage from './story/StoryIndexPage';
import StoryProfilePage from './story/StoryProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="notations" element={<NotationIndexPage />} />
          <Route path="notation/:notationId" element={<NotationProfilePage />} />
          <Route path="people" element={<PersonIndexPage />} />
          <Route path="person/:personId" element={<PersonProfilePage />} />
          <Route path="sources" element={<SourceIndexPage />} />
          <Route path="source/:sourceId" element={<SourceProfilePage />} />
          <Route path="stories" element={<StoryIndexPage />} />
          <Route path="story/:storyId" element={<StoryProfilePage />} />

          <Route path="map" element={<ToDoPage title="map"/>} />
          <Route path="checklist" element={<ToDoPage title="checklist"/>} />
          <Route path="tags" element={<ToDoPage title="tags"/>} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
