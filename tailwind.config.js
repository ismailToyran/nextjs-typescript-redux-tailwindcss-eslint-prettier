module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#4BB2F9',
          bg: '#ffffff',
          'bg-paper': '#dbdbdb',
          'bg-disabled': '#e3e3e3',
          'text-primary': '#313131',
          'text-secondary': '#717171',
          'text-disabled': '#a5a5a5',
          'bg-color': '#f1f9ff',
          'bg-paper-color': '#f5f9fb',
          'bg-disabled-color': '#e9f6fe',
          'text-primary-color': '#34729d',
          'text-secondary-color': '#93d1fb',
          'text-disabled-color': '#bbe2fd',
          error: '#B00020'
        },
        dark: {
          primary: '#4BB2F9',
          bg: '#121212',
          'bg-paper': '#363636',
          'bg-disabled': '#2e2e2e',
          'text-primary': '#e0e0e0',
          'text-secondary': '#a0a0a0',
          'text-disabled': '#6c6c6c',
          'bg-color': '#171f24',
          'bg-paper-color': '#1b2a35',
          'bg-disabled-color': '#19252e',
          'text-primary-color': '#449ddb',
          'text-secondary-color': '#34729d',
          'text-disabled-color': '#284f6a',
          error: '#CF6679'
        }
      },
      width: {
        '(hover)': 'calc(100% * 2.25)',
        'line-xl': 'calc(50vw - 800px + 9rem - 17px)',
        'line-lg': 'calc(9rem - 17px)',
        'line-md': 'calc(6rem - 17px)',
        'line-sm': 'calc(3rem - 17px)',
        layout: 'calc(100vw - 5rem - 17px)',
        'layout-lg': 'calc(100vw - 7.5rem - 17px)'
      },
      height: {
        'line-xl': 'calc(50vw - 800px + 9rem - 17px)',
        'line-lg': 'calc(9rem - 17px)',
        'line-md': 'calc(6rem - 17px)',
        'line-sm': 'calc(3rem - 17px)',
        line: 'calc(50vh - 115px)',
        '3px': '3px'
      },
      maxWidth: {
        '8xl': '100rem'
      },
      maxHeight: {
        line: '35vh'
      },
      padding: {
        '(hover)': 'calc(100% * 2.25)'
      },
      zIndex: {
        '-1': '-1'
      },
      transitionTimingFunction: {
        'in-hamburger': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-hamburger': 'cubic-bezier(0.215, 0.610, 0.355, 1)'
      },
      transitionProperty: {
        hover: 'width padding-top'
      },
      transitionDelay: {
        666: '666ms',
        1333: '1333ms'
      },
      keyframes: {
        float: {
          '0%': {
            filter: 'drop-shadow(0 0 4px rgba(0,0,0,.25))',
            transform: 'translateY(0)'
          },
          '10%': {
            filter: 'drop-shadow(0 30px 4px rgba(0,0,0,.15))',
            transform: 'translateY(-8px)'
          },
          '50%': {
            filter: 'drop-shadow(0 20px 4px rgba(0,0,0,.2))',
            transform: 'translateY(-4px)'
          },
          '90%': {
            filter: 'drop-shadow(0 30px 4px rgba(0,0,0,.15))',
            transform: 'translateY(-8px)'
          },
          '100%': {
            filter: 'drop-shadow(0 0 4px rgba(0,0,0,.25))',
            transform: 'translateY(0)'
          }
        },
        'float-dark': {
          '0%': {
            filter: 'drop-shadow(0 0 4px rgba(68,157,219,.25))',
            transform: 'translateY(0)'
          },
          '10%': {
            filter: 'drop-shadow(0 30px 4px rgba(68,157,219,.15))',
            transform: 'translateY(-8px)'
          },
          '50%': {
            filter: 'drop-shadow(0 20px 4px rgba(68,157,219,.2))',
            transform: 'translateY(-4px)'
          },
          '90%': {
            filter: 'drop-shadow(0 30px 4px rgba(68,157,219,.15))',
            transform: 'translateY(-8px)'
          },
          '100%': {
            filter: 'drop-shadow(0 0 4px rgba(68,157,219,.25))',
            transform: 'translateY(0)'
          }
        },
        pulse1: {
          '0%': { opacity: 0.3 },
          '15%': { opacity: 0 },
          '65%': { opacity: 1 },
          '100%': { opacity: 0.3 }
        },
        pulse2: {
          '0%': { opacity: 0.6 },
          '30%': { opacity: 0 },
          '80%': { opacity: 1 },
          '100%': { opacity: 0.6 }
        },
        pulse3: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        pulse3: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        text1: {
          '0%': { opacity: 1 },
          '16.667%': { opacity: 1 },
          '33.333%': { opacity: 0 },
          '83.333%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        // text1: {
        //   '0%': { opacity: 0 },
        //   '33%': { opacity: 1 },
        //   '100%': { opacity: 0 }
        // },
        text2: {
          '0%': { opacity: 0 },
          '16.667%': { opacity: 0 },
          '33.333%': { opacity: 1 },
          '50%': { opacity: 1 },
          '66.667%': { opacity: 0 },
          '100%': { opacity: 0 }
        },
        text3: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '66.667%': { opacity: 1 },
          '83.333%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        float: 'float 10s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite',
        'float-dark': 'float-dark 10s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite',
        pulse1: 'pulse1 2s linear infinite',
        pulse2: 'pulse2 2s linear infinite',
        pulse3: 'pulse3 2s linear infinite',
        text1: 'text1 8s ease infinite',
        text2: 'text2 8s ease infinite',
        text3: 'text3 8s ease infinite'
      }
    },
    boxShadow: {
      dark: '0 10px 30px -15px rgba(27, 42, 53, 0.7)',
      light: '0 10px 30px -15px rgba(0, 0, 0, 0.7)',
      none: 'none'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1600px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwindcss-pseudo-elements')]
};
