import React from 'react';

import clsx from 'clsx';

import * as Styled from './Person.styled';

type PersonProps = {
  person: any;
  onSelect?: (person: any) => void;
  type?: 'single' | 'selected';
  className?: string;
};

export const Person: React.FC<PersonProps> = (props) => {
  const { person, onSelect, type = 'selected', className } = props;

  const handleSelect = () => {
    if (onSelect) {
      onSelect(person);
    }
  };

  return (
    <Styled.Container onClick={handleSelect}>
      <Styled.Avatar className={clsx({ selected: person.selected })}>
        <Styled.Image src={person.src} />
      </Styled.Avatar>
      {type === 'selected' && <Styled.Name>{person.name}</Styled.Name>}
    </Styled.Container>
  );
};
