import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useTheme } from './theme/useTheme';
import { getFromLS } from './utils/storage';

const ThemedButton = styled.button`
  border: 0;
  display: inline-block;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover.background};
    color: ${({ theme }) => theme.colors.button.hover.text};
  }
`;

const Wrapper = styled.li`
  padding: 48px;
  text-align: center;
  border-radius: 4px;
  // border: 1px solid #000;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

const Container = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
  padding: 10px;
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;

  &:hover {
    background: tomato !important;
  }
`;

export default props => {
  const themesFromStore = getFromLS('all-themes');
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = selectedTheme => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    props.newTheme &&
      updateThemeCard(props.newTheme);
  }, [props.newTheme])

  const updateThemeCard = theme => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  }

  const ThemeCard = props => {
    return (
      <Wrapper style={{
        backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`,
        color: `${data[_.camelCase(props.theme.name)].colors.text}`,
        fontFamily: `${data[_.camelCase(props.theme.name)].font}`
      }}>
        <span>Click on the button to set this theme</span>
        <ThemedButton onClick={(theme) => themeSwitcher(props.theme)}
          // style={{
          //   backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`,
          //   color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
          //   fontFamily: `${data[_.camelCase(props.theme.name)].font}`,
          //   cursor: `${data[_.camelCase(props.theme.name)].button.cursor}`
          // }}
        >{props.theme.name}
        </ThemedButton>
      </Wrapper>
    );
  };

  return (
    <div>
      <Header>Select a Theme from below</Header>
      <Container>
        {themes.length > 0 && themes.map(theme => {
          return (
            <ThemeCard
              theme={data[theme]}
              key={data[theme].id}
            />
          );
        })}
      </Container>
    </div>
  );
};