import React from 'react';
import {useParams} from 'react-router-dom';

import {useStaticDb} from '../SETTINGS';
import CitationList from '../CitationList';
import LinkList from '../LinkList';
import PersonList from './PersonList';
import PersonTree from './PersonTree';
import TagList from '../tag/TagList';
import usePersonProfile from '../hooks/usePersonProfile';

const PersonProfilePage = () => {
  const {personId} = useParams();
  const {person, isLoading} = usePersonProfile({personId});

  if (isLoading) {
    return (<div>loading...</div>);
  }

  return (
    <div>
      <h2>PERSON: {person.name}</h2>
      {!useStaticDb && <>
        <h3>share level</h3>
        {person.shareLevel}
        <h3>tags</h3>
        <TagList tags={person.tags}/>
      </>}
      <hr/>
      <h3>parents</h3>
      <PersonList people={person.parents}/>
      <h3>siblings</h3>
      <PersonList people={person.siblings}/>
      <h3>spouses</h3>
      <PersonList people={person.spouses}/>
      <h3>children</h3>
      <PersonList people={person.children}/>
      <hr/>
      {(!useStaticDb || !person.private) && <>
        <h3>links</h3>
        <LinkList links={person.links}/>
      </>}
      <h3>tree</h3>
      <PersonTree person={person}/>
      {(!useStaticDb || !person.private) && <>
        <h3>citations</h3>
        <CitationList citations={person.citations} showPerson={false}/>
      </>}
    </div>
  );
};

export default PersonProfilePage;

