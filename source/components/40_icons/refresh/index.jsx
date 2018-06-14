import { h } from 'hyperapp';

const RefreshIcon = ({ title }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
    <title>{title}</title>
    <path d="M26.47 9.53C24.3 7.35 21.32 6 18 6 11.37 6 6 11.37 6 18s5.37 12 12 12c5.94 0 10.85-4.33 11.81-10h-3.04c-.91 4.01-4.49 7-8.77 7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.49 0 4.71 1.03 6.34 2.66L20 16h10V6l-3.53 3.53z" />
  </svg>
);

export default RefreshIcon;
