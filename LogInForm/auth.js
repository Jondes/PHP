import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fbfbfb',
    'textAlign': 'center'
  },
  'rlform': {
    // variables
    'ColorPrimary': '#ff9800',
    'ColorGrey': 'rgba(255, 152, 0, 0.06)',
    'ColorDark': 'rgba(255, 152, 0, .5)',
    'ColorSemidark': 'rgba(255, 152, 0, 0.5)',
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Segoe UI'',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'rlform rlform-wrapper': {
    'WebkitTransition': 'all 1s',
    'OTransition': 'all 1s',
    'transition': 'all 1s',
    'WebkitPerspective': '1000px',
    'perspective': '1000px',
    'position': 'relative',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 360 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'screen&&<w320': {
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'rlform a': {
    'color': 'var(--color-primary)',
    'textDecoration': 'none',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'em', 'value': NaN }],
    'marginTop': [{ 'unit': 'px', 'value': -3 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 2 }]
  },
  'rlform *': {
    'WebkitBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'rlform rlform-box-inner': {
    'backgroundColor': '#fff',
    'WebkitBoxShadow': '0 7px 25px rgba(0, 0, 0, .08)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .08)' }],
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'textAlign': 'left',
    'borderRadius': '3px'
  },
  'rlform rlform-box p': {
    'color': 'var(--color-semidark)',
    'fontWeight': '700',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'rlform rlform-box rlform-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'rlform rlform-box label': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'color': 'var(--color-semidark)',
    'fontWeight': '700'
  },
  'rlform rlform-box label a': {
    'float': 'right'
  },
  'rlform rlform-box rlform-input': {
    'backgroundColor': 'var(--color-grey)',
    'color': 'var(--color-dark)',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'outline': '0'
  },
  'rlform rlform-box rlform-btn': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'borderRadius': '3px',
    'backgroundColor': 'var(--color-primary)',
    'WebkitBoxShadow': '0 2px 7px var(--color-semidark)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'em', 'value': NaN }],
    'fontWeight': '700',
    'outline': '0',
    'cursor': 'pointer',
    'WebkitTransition': 'all .5s',
    'OTransition': 'all .5s',
    'transition': 'all .5s'
  },
  'rlform rlform-box rlform-btn:active': {
    'WebkitBoxShadow': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'rlform rlform-box rlform-btn:hover': {
    'opacity': '.9'
  },
  'rlform text-foot': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'fontWeight': '700',
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'color': 'var(--color-semidark)'
  }
});
