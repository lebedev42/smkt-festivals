import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import clsx from 'clsx';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

import { BtnClose } from '../../shared/ui/btn-close';

import { Person as PersonComponent } from '../../shared/ui/person';
import { Btn } from '../../shared/ui/btn';
import { Stage, Person } from '../../pages/festival/Festival';

import * as Styled from './Festival.styled';

interface FestivalProps {
  stages: Stage[];
  persons: Person[] | null;
  setPersons: (persons: Person[]) => void;
  setStages: (stages: Stage[]) => void;
  onReset: () => void;
}

export const Festival: React.FC<FestivalProps> = (props) => {
  const { stages, persons, setPersons, setStages, onReset } = props;

  const { width = 0 } = useWindowSize();
  const flicking = useRef<Flicking | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const [results, setResults] = useState('');

  const [selectedStage, setSelectedStage] = useState<any>('');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const [info, setInfo] = useState<{
    title: string;
    description: string;
  } | null>(null);

  useLayoutEffect(() => {
    // ширина контейнера - 475
    // при ширине контейнера в 475 - ширина поля игры - 475
    // при ширине контейнера в 475 - высота поля игры - 734

    const containerWidth = (width * 475) / 475;
    const containerHeight = (width * 734) / 475;

    setContainerHeight(containerHeight);
    setContainerWidth(containerWidth);

    containerRef.current?.addEventListener('click', onClickListener, false);

    return () => {
      containerRef.current?.removeEventListener(
        'click',
        onClickListener,
        false,
      );
    };
  }, [width, props]);

  const onClickListener = (e: any) => {
    if (e.target.id.startsWith('stage-')) {
      const selected = stages.find((stage) => stage.name === e.target.id);

      const isSelected = selected?.selectedPerson !== null;

      if (selected && !isSelected) {
        setSelectedStage(selected);

        removeSelectedPersons();

        setInfo({
          title: selected?.title,
          description: selected?.description,
        });
      }
    } else {
      e.preventDefault();

      removeSelectedPersons();

      setSelectedStage(null);
      setInfo(null);
    }
  };

  const removeSelectedPersons = () => {
    const newPersons = persons?.map((p) => ({ ...p, selected: false }));

    if (newPersons) {
      setPersons(newPersons);
    }
    setSelectedPerson(null);
  };

  const handleSelectPerson = (person: Person) => {
    if (!info) return;

    const newPersons = persons?.map((p: Person) => {
      if (p.id === person.id) {
        return { ...p, selected: !p.selected };
      } else {
        return { ...p, selected: false };
      }
    });

    if (newPersons) {
      setPersons(newPersons);
    }

    setSelectedPerson(person);

    setInfo({
      title: person.title,
      description: person.description,
    });
  };

  const handleAcceptPerson = () => {
    setStages(
      stages.map((stage) => {
        if (stage.name === selectedStage.name) {
          return { ...stage, selectedPerson: selectedPerson };
        }

        return stage;
      }),
    );

    const newPersons = persons?.filter((p) => p.id !== selectedPerson?.id);

    if (newPersons) {
      setPersons(newPersons);
    }

    setSelectedPerson(null);
    setSelectedStage(null);
    setInfo(null);
  };

  const handleReset = () => {
    onReset();

    setResults('');

    setSelectedPerson(null);
    setSelectedStage(null);
    setInfo(null);
  };

  const handleCloseGame = () => {
    console.log('close game');
  };

  const handleQuit = () => {
    console.log('quit game');
  };

  useEffect(() => {
    if (persons && persons.length === 0) {
      const correctAmount = stages.filter(
        (stage) => stage.correctPersonId === stage.selectedPerson?.id,
      ).length;

      setResults(correctAmount === 5 ? 'win' : 'loose');
    }
  }, [persons]);

  return (
    <Styled.Wrapper isSelected={!!selectedStage?.name}>
      <Styled.ResultsBackdrop className={clsx({ active: results })} />
      <Styled.CloseBtn>
        <BtnClose onClick={handleCloseGame} />
      </Styled.CloseBtn>

      <Styled.Container
        width={containerWidth}
        height={containerHeight}
        selectedStage={selectedStage?.name}
        ref={containerRef}
      >
        {stages.length && (
          <Styled.Stages>
            <Styled.StageRow>
              <Styled.StageItem id="stage-5">
                {stages[4].selectedPerson && (
                  <PersonComponent
                    person={stages[4].selectedPerson}
                    type="single"
                  />
                )}
              </Styled.StageItem>
              <Styled.StageItem id="stage-6">
                {stages[5].selectedPerson && (
                  <PersonComponent
                    person={stages[5].selectedPerson}
                    type="single"
                  />
                )}
              </Styled.StageItem>
              <Styled.StageItem id="stage-7">
                {stages[6].selectedPerson && (
                  <PersonComponent
                    person={stages[6].selectedPerson}
                    type="single"
                  />
                )}
              </Styled.StageItem>
            </Styled.StageRow>
            <Styled.StageRow>
              <Styled.StageItem id="stage-2">
                {stages[1].selectedPerson && (
                  <PersonComponent
                    person={stages[1].selectedPerson}
                    type="single"
                  />
                )}
              </Styled.StageItem>
              <Styled.StageItem id="stage-4">
                {stages[3].selectedPerson && (
                  <PersonComponent
                    person={stages[3].selectedPerson}
                    type="single"
                  />
                )}
              </Styled.StageItem>
              <Styled.StageItem></Styled.StageItem>
            </Styled.StageRow>
            <Styled.StageRow>
              <Styled.StageItem id="stage-1">
                {stages[0].selectedPerson && (
                  <PersonComponent
                    person={stages[0].selectedPerson}
                    type="single"
                  />
                )}
              </Styled.StageItem>
              <Styled.StageItem></Styled.StageItem>
              <Styled.StageItem id="stage-3">
                {stages[2].selectedPerson && (
                  <PersonComponent
                    person={stages[2].selectedPerson}
                    type="single"
                  />
                )}
              </Styled.StageItem>
            </Styled.StageRow>
          </Styled.Stages>
        )}
      </Styled.Container>

      {info && (
        <Styled.Info>
          <Styled.InfoTitle>{info?.title}</Styled.InfoTitle>
          <Styled.InfoText>
            <p>{info?.description}</p>

            {selectedPerson && (
              <Styled.InfoAction>
                <Btn
                  label="Выбрать"
                  onClick={handleAcceptPerson}
                  type="white-full"
                  size="small"
                />
              </Styled.InfoAction>
            )}
          </Styled.InfoText>
        </Styled.Info>
      )}

      <Styled.Persons className={clsx({ disabled: !info })}>
        {persons && (
          <Flicking
            align="prev"
            bound={true}
            circular={true}
            className="flickingScroll"
            ref={flicking}
            useFindDOMNode={true}
            renderOnSameKey={true}
          >
            {persons.map((person) => (
              <PersonComponent
                key={person.id}
                person={person}
                onSelect={handleSelectPerson}
                className="panel"
              />
            ))}
          </Flicking>
        )}
      </Styled.Persons>

      {results && (
        <Styled.Results>
          <Styled.ResultTitle>Игра завершена!</Styled.ResultTitle>
          <Styled.ResultDescription>
            {results === 'win' ? (
              <p>
                У вас классно получилось! <br />
                Чтобы получить приз, вернитесь в чат-бот.
              </p>
            ) : (
              <p>
                Это было близко! <br />
                Попробуйте найти правильные павильоны <br />
                для всех персонажей ещё раз.
              </p>
            )}
          </Styled.ResultDescription>
          <Styled.ResultActions>
            {results === 'win' ? (
              <Btn
                label="В чат-бот"
                onClick={handleQuit}
                type="red"
                size="small"
              />
            ) : (
              <>
                <Btn
                  label="Играть ещё"
                  onClick={handleReset}
                  type="red"
                  size="small"
                />
                <Btn
                  label="В чат-бот"
                  onClick={handleQuit}
                  type="white"
                  size="small"
                />
              </>
            )}
          </Styled.ResultActions>
        </Styled.Results>
      )}
    </Styled.Wrapper>
  );
};