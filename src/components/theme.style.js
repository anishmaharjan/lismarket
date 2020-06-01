import gss from './variables.styles';
import {Platform} from 'react-native';

/*
 * Fonts
 * Platform.OS === 'ios'?
 *
 * Questrial-Regular
 * Montserrat-SemiBold
 * Montserrat-Regular
 * Roboto
 *
 */
export const borderBottom = `
  border-bottom-width: 1px; 
  border-bottom-color: ${gss.grey2};
  padding: 10px 0;
  `;

export const h1 = `
font-size: 24px;
font-weight: bold;`;

export const h2 = `
font-size: 20px;`;

export const h3 = `
font-size: 16px;
`;

export const p = `
font-family: Questrial-Regular;
color: ${gss.text};
`;

export const primary = `
color: ${gss.primary};`;

// 5px 10px 20px 35px 50px
export const pt2 = `
padding-top: 10px;`;

export const flexRow = `
  flex-direction: row;`;

export const padding = `
  padding: 0 5px;
  `;

export const paddingWalls = 'padding: 10px 20px;';

export const btn = `
background-color: #FC8369;
border-radius: 9px;
height: 45px;
padding: 0 5px;
`;

export const btnOutline = `
background-color: white;
border-radius: 9px;
border-width: 1px;
border-color: #FC8369;
height: 45px;
padding: 0 5px;`;

export const btnText = `
color: #fff;
font-weight: bold;
align-items: center;
padding: 10px;`;

export const activeCategory = `
font-size: 20px;
font-weight: bold;
`;

export const activeCategoryBorder = `
border-bottom-width: 3px;
border-bottom-color: ${gss.primary};`;

export const boxShadow = `
box-shadow: 1px 5px 5px ${gss.grey2};
`;
