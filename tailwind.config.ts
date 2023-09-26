import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-header': 'linear-gradient(135deg, #5135CE, #9684B7)',

        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customGreen: '#66BAA8',
        curstomDarkPurple: '#5135CE',
        customLightPurple: '#4526AA',
        customWhitePurple: '#F9EAFF', 
        customBackgroundPurple: '#806DD3'
      },
      // fontFamily: {
      //   sans: ['var(--font-family-logo)']
      // }
    },
  },
  plugins: [],
}
export default config
