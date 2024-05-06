import React, { useEffect, useState } from 'react';

import { Welcome } from '../../widgets/welcome';

import { Festival as FestivalGame } from '../../widgets/festival';

import * as Styled from './Festival.styled';
import { useWindowSize } from '@uidotdev/usehooks';

export interface Stage {
  id: number;
  name: string;
  title: string;
  description: string;
  selectedPerson: Person | null;
  correctPersonId: number;
}

export interface Person {
  id: number;
  name: string;
  src: string;
  selected: boolean;
  available: boolean;
  title: string;
  description: string;
}

const initialStages: Stage[] = [
  {
    id: 1,
    name: 'stage-1',
    title: 'Fun Con',
    description:
      'Выберете персонажа, который отправится на эту фестивальную площадку.',
    selectedPerson: null,
    correctPersonId: 6,
  },
  {
    id: 2,
    name: 'stage-2',
    title: 'Simvol',
    description:
      'Выберете персонажа, который отправится на эту фестивальную площадку.',
    selectedPerson: null,
    correctPersonId: 4,
  },
  {
    id: 3,
    name: 'stage-3',
    title: 'Сonnect Fest',
    description:
      'Выберете персонажа, который отправится на эту фестивальную площадку.',
    selectedPerson: null,
    correctPersonId: 1,
  },
  {
    id: 4,
    name: 'stage-4',
    title: 'IT Pir',
    description:
      'Выберете персонажа, который отправится на эту фестивальную площадку.',
    selectedPerson: null,
    correctPersonId: 5,
  },
  {
    id: 5,
    name: 'stage-5',
    title: 'Перекус под музыку',
    description:
      'Выберете персонажа, который отправится на эту фестивальную площадку.',
    selectedPerson: null,
    correctPersonId: 3,
  },
  {
    id: 6,
    name: 'stage-6',
    title: 'Лесная фиалка',
    description:
      'Выберете персонажа, который отправится на эту фестивальную площадку.',
    selectedPerson: null,
    correctPersonId: 2,
  },
  {
    id: 7,
    name: 'stage-7',
    title: 'День баланса',
    description:
      'Выберете персонажа, который отправится на эту фестивальную площадку.',
    selectedPerson: null,
    correctPersonId: 7,
  },
];

const initialPersons: Person[] = [
  {
    id: 1,
    name: 'Илья',
    src: '/ilya.svg',
    selected: false,
    available: true,
    title: 'Илья, 18 лет, студент',
    description: 'Ему хочется найти любимого блогера и попросить автограф.',
  },
  {
    id: 2,
    name: 'Никита',
    src: '/nikita.svg',
    selected: false,
    available: true,
    title: 'Никита, 29 лет, оператор',
    description: 'Любит кэмпинг и открывать новые музыкальные группы.',
  },
  {
    id: 3,
    name: 'Алёна',
    src: '/alona.svg',
    selected: false,
    available: true,
    title: 'Алёна, 36 лет, фрилансер и мама',
    description:
      'Каждый год приезжает сюда, чтобы попробовать необычные блюда и напитки. А ещё — послушать любимую музыку и купить классные вещи.',
  },
  {
    id: 4,
    name: 'Катя',
    src: '/katya.svg',
    selected: false,
    available: true,
    title: 'Катя, 25 лет, художница',
    description: 'Катя ищет единомышленников и вдохновение.',
  },
  {
    id: 5,
    name: 'Андрей',
    src: '/andrey.svg',
    selected: false,
    available: true,
    title: 'Андрей, 40 лет, биолог',
    description:
      'Планирует прочитать лекцию о ГМО, а после — поиграть в VR-шлеме и полистать комиксы.',
  },
  {
    id: 6,
    name: 'Наташа',
    src: '/nata.svg',
    selected: false,
    available: true,
    title: 'Наташа, 32 года, косплеер',
    description:
      'Недавно прошла популярную игру и сделала костюм полуэльфийки.',
  },
  {
    id: 7,
    name: 'Марина',
    src: '/marina.svg',
    selected: false,
    available: true,
    title: 'Марина, 35 лет, предпринимательница',
    description:
      'Хочет отдохнуть от работы, поэтому ищет интересные тренировки.',
  },
];

const Festival = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const { width, height } = useWindowSize();

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const [persons, setPersons] = useState<Person[] | null>(null);
  const [stages, setStages] = useState<Stage[]>([]);

  const [reset, setReset] = useState(true);

  useEffect(() => {
    window.Telegram.WebApp.expand();
  }, []);

  useEffect(() => {
    if (reset) {
      setPersons([...initialPersons]);
      setStages([...initialStages]);

      setReset(false);
    }
  }, [reset]);

  return (
    <Styled.Content>
      {gameStarted ? (
        <FestivalGame
          persons={persons}
          stages={stages}
          setPersons={setPersons}
          setStages={setStages}
          onReset={() => setReset(true)}
        />
      ) : (
        <Welcome type="festival" onClick={handleStartGame}>
          Каждый из персонажей хочет зайти в определённый павильон. Чтобы им
          помочь, сначала выберете павильон, а затем познакомьтесь со всеми
          героями и отправьте его на соответствующую площадку, нажав «Выбрать»
        </Welcome>
      )}
      <Styled.Size>
        {width} {height}
      </Styled.Size>
    </Styled.Content>
  );
};

export default Festival;
