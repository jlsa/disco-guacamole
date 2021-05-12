import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import ThemeSelector from './ThemeSelector';


import theme from './theme/theme';
import Clock from './Components/Clock/Clock';
import Button from './theme/Components/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <Clock />
      <>
        <Button variant='primary'>Primary Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
        <Button variant='danger'>Danger Button</Button>
      </>
    </ThemeProvider>
  )
};

// const Container = styled.div`
//   margin: 5px auto 5px auto;
// `;
// const App = () => {
//   const { theme, themeLoaded, getFonts } = useTheme();
//   const [selectedTheme, setSelectedTheme] = useState(theme);

//   useEffect(() => {
//     setSelectedTheme(theme);
//   }, [themeLoaded]);

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: getFonts()
//       }
//     });
//   });

//   return (
//     <>
//     {
//       themeLoaded && <ThemeProvider theme={ selectedTheme }>
//         <GlobalStyles />
//         <Container style={{fontFamily: selectedTheme.font}}>
//           <h1>Lorem Ricksum</h1>
//           <p>
//               Lemme hear everybody say hey-yo! All the ladies say yeaaah! Everybody over thirty do this with your hand! Everybody with a red shirt jump up and down! Yo, everyone whose first name begins with an L who isn't hispanic, walk in a circle the same number of times as the square root of your age times teeenn! Well let me check my list of powers and weaknesses: ability to do anything, but only whenever I want. Yeah, that sounds like a job for me. You created a day care for my dad? Looks like some sort of legally safe knockoff of an '80s horror character with miniature swords for fingers instead of knives!
//             </p><p>
//               Whoa, spoilers! I'm a whole season behind. Prepare to be emancipated from your own inferior genes! Really, you're gonna pull that move? I guided your entire civilisation. Your people have a holiday named ricksgiving. They teach kids about me in school. Nobody's killing me until after I catch my wife with another man.
//             </p><p>
//               There's a lesson here and I'm not going to be the one to figure it out. Those guys are inside you building a piece of shit Ethan! They're inside you building a monument to compromise! Fuck them, fuck those people, fuck this whole thing Ethan. I know you're real because i have a ton of bad memories with you. Your failures are your own, old man! I say, follow throooough!
//             </p><p>
//               Awwww thanks, bitch! Well he roped me into this! Don't break an arm jerking yourself off Morty. I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me.
//           </p>
//           <ThemeSelector setter={ setSelectedTheme } />
//         </Container>
//       </ThemeProvider>
//     }
//     </>
//   )
// }

// import Clock from './Components/Clock/Clock';
// import Editor from './Components/Editor/Editor';

// const App = () => {
//   return (
//     <>
//       <Editor />
//       <Clock />
//     </>
//   );
// };

export default App;
