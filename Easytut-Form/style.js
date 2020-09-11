import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'background': 'linear-gradient(rgba(0, 0, 50, 0.5), rgba(0, 0, 50, 0.5)),
        url(canoes.jpg)',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'fontFamily': 'sans-serif'
  },
  'contact-title': {
    'marginTop': [{ 'unit': 'px', 'value': 100 }],
    'color': '#fff',
    'textTransform': 'uppercase',
    'transition': 'all 4s ease-in-out',
    'WebkitTransition': 'all 4s ease-in-out',
    'MozTransition': 'all 4s ease-in-out',
    'MsTransition': 'all 4s ease-in-out',
    'OTransition': 'all 4s ease-in-out'
  },
  'contact-title h1': {
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 10 }]
  },
  'contact-title h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  }
});
