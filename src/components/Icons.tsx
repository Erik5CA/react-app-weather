export const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="location__icon"
  >
    <path
      fillRule="evenodd"
      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </svg>
);

type Props = {
  cla: boolean;
};

export const HumidityIcon = ({ cla }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-5.0 -10.0 110.0 135.0"
      fill="#fff"
      className={cla ? "details__icon" : "container__icon-sm"}
    >
      <g>
        <path d="m77.656 56.094c-3.75-22.969-31.562-49.844-32.812-50.938-0.625-0.625-1.5625-0.625-2.1875 0-1.4062 1.25-33.281 31.875-33.281 55.781 0 18.906 15.469 34.375 34.375 34.375 5.3125 0 10.469-1.25 15.156-3.5938 3.2812 2.1875 7.1875 3.5938 11.406 3.5938 11.25 0 20.312-9.0625 20.312-20.312 0-8.5938-5.3125-15.938-12.969-18.906zm-33.906 36.094c-17.188 0-31.25-14.062-31.25-31.25 0-20.156 25.625-46.875 31.25-52.5 5.1562 5.1562 26.562 27.5 30.625 46.719-1.4062-0.3125-2.6562-0.46875-4.0625-0.46875-11.25 0-20.312 9.0625-20.312 20.312 0 5.7812 2.3438 10.938 6.25 14.531-3.9062 1.7188-8.125 2.6562-12.5 2.6562zm26.562 0c-9.5312 0-17.188-7.6562-17.188-17.188s7.6562-17.188 17.188-17.188 17.188 7.6562 17.188 17.188-7.6562 17.188-17.188 17.188z" />
        <path d="m43.75 84.375c-12.969 0-23.438-10.469-23.438-23.438 0-0.9375-0.625-1.5625-1.5625-1.5625s-1.5625 0.625-1.5625 1.5625c0 14.688 11.875 26.562 26.562 26.562 0.9375 0 1.5625-0.625 1.5625-1.5625s-0.625-1.5625-1.5625-1.5625z" />
        <path d="m75.625 62.656c-0.78125-0.3125-1.7188 0-2.0312 0.78125l-9.375 21.875c-0.3125 0.78125 0 1.7188 0.78125 2.0312 0.15625 0.15625 0.46875 0.15625 0.625 0.15625 0.625 0 1.25-0.3125 1.4062-0.9375l9.375-21.875c0.3125-0.78125 0-1.7188-0.78125-2.0312z" />
        <path d="m68.75 68.75c0-2.6562-2.0312-4.6875-4.6875-4.6875s-4.6875 2.0312-4.6875 4.6875 2.0312 4.6875 4.6875 4.6875 4.6875-2.0312 4.6875-4.6875zm-6.25 0c0-0.9375 0.625-1.5625 1.5625-1.5625s1.5625 0.625 1.5625 1.5625-0.625 1.5625-1.5625 1.5625-1.5625-0.625-1.5625-1.5625z" />
        <path d="m76.562 76.562c-2.6562 0-4.6875 2.0312-4.6875 4.6875s2.0312 4.6875 4.6875 4.6875 4.6875-2.0312 4.6875-4.6875-2.0312-4.6875-4.6875-4.6875zm0 6.25c-0.9375 0-1.5625-0.625-1.5625-1.5625s0.625-1.5625 1.5625-1.5625 1.5625 0.625 1.5625 1.5625-0.625 1.5625-1.5625 1.5625z" />
      </g>
    </svg>
  );
};

export const PressureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="40px"
    y="40px"
    viewBox="0 0 60 75"
    fill="#fff"
    className="details__icon"
  >
    <path d="M26.92,54H33c0.55,0,1-0.45,1-1v-7.4c3.89-0.79,7.38-2.72,10.09-5.42c0.02-0.01,0.03-0.02,0.05-0.03  c0.01-0.01,0.02-0.03,0.03-0.05C47.77,36.47,50,31.49,50,26s-2.23-10.47-5.83-14.09c-0.01-0.02-0.02-0.03-0.03-0.05  c-0.01-0.01-0.03-0.02-0.05-0.03C40.47,8.23,35.49,6,30,6s-10.47,2.23-14.09,5.83c-0.02,0.01-0.03,0.02-0.05,0.03  c-0.01,0.01-0.02,0.03-0.03,0.05C12.23,15.53,10,20.51,10,26s2.23,10.47,5.83,14.09c0.01,0.02,0.02,0.03,0.03,0.05  c0.01,0.01,0.03,0.02,0.05,0.03c2.7,2.68,6.15,4.6,10.01,5.4V53C25.92,53.55,26.37,54,26.92,54z M18.02,39.4l1.37-1.37  c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.37,1.37c-2.64-2.95-4.32-6.77-4.55-10.98H14c0.55,0,1-0.45,1-1  s-0.45-1-1-1h-1.95c0.23-4.21,1.91-8.03,4.55-10.98l1.37,1.37c0.2,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29  c0.39-0.39,0.39-1.02,0-1.41l-1.37-1.37C20.97,9.96,24.79,8.28,29,8.05V10c0,0.55,0.45,1,1,1s1-0.45,1-1V8.05  c4.21,0.23,8.03,1.91,10.98,4.55l-1.37,1.37c-0.39,0.39-0.39,1.02,0,1.41c0.2,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29l1.37-1.37  c2.64,2.95,4.32,6.77,4.55,10.98H46c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.95c-0.23,4.21-1.91,8.03-4.55,10.98l-1.37-1.37  c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1.37,1.37c-2.95,2.64-6.77,4.32-10.98,4.55V42c0-0.55-0.45-1-1-1  s-1,0.45-1,1v1.95C24.79,43.72,20.97,42.04,18.02,39.4z" />
    <path d="M33.99,26.26l6.21-7c0.32-0.36,0.34-0.89,0.04-1.27c-0.29-0.38-0.82-0.5-1.24-0.28l-8.47,4.33C30.36,22.01,30.18,22,30,22  c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4C32.12,30,33.86,28.35,33.99,26.26z" />
  </svg>
);

export const WindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="-5.0 -10.0 110.0 135.0"
    className="details__icon"
    fill="#fff"
  >
    <path
      d="m81.18 38.711c-0.51953 1.4492-2.1094 2.2109-3.5703 1.6914-1.4492-0.51953-2.2109-2.1094-1.6914-3.5703 1.5781-4.3984 5.7695-7.3594 10.441-7.3594 6.1289 0 11.09 4.9688 11.09 11.09s-4.9688 11.09-11.09 11.09l-81.031-0.003906c-1.5391 0-2.7891-1.25-2.7891-2.7891s1.25-2.7891 2.7891-2.7891h81.031c3.0391 0 5.5117-2.4688 5.5117-5.5117 0-3.0391-2.4688-5.5117-5.5117-5.5117-2.3281 0-4.3984 1.4492-5.1914 3.6484zm-27.77 38.68c-0.30859-1.5117 0.66016-2.9805 2.1719-3.2812 1.5117-0.30859 2.9805 0.66016 3.2812 2.1719 0.85156 4.1289 4.4883 7.0703 8.6914 7.0703 4.8984 0 8.8594-3.9688 8.8594-8.8594 0-4.8906-3.9688-8.8594-8.8594-8.8594l-43.324-0.003906c-1.5391 0-2.7891-1.25-2.7891-2.7891 0-1.5391 1.25-2.7891 2.7891-2.7891h43.32c7.9805 0 14.449 6.4688 14.449 14.449s-6.4688 14.449-14.449 14.449c-6.8398 0-12.77-4.8398-14.141-11.539zm-5.6289-54.879c0.96875-3.4805 4.1289-5.8594 7.7383-5.8594 4.4414 0 8.0312 3.5898 8.0312 8.0312s-3.5898 8.0312-8.0312 8.0312l-39.168-0.003906c-1.5391 0-2.7891 1.25-2.7891 2.7891s1.25 2.7891 2.7891 2.7891h39.16c7.5195 0 13.609-6.1016 13.609-13.609 0-7.5117-6.1016-13.609-13.609-13.609-6.0898 0-11.469 4.0898-13.109 9.9609-0.41016 1.4805 0.46094 3.0117 1.9414 3.4219s3.0117-0.46094 3.4219-1.9414z"
      fillRule="evenodd"
    />
  </svg>
);

export const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 98 122.5"
    className="details__icon"
    fill="#fff"
  >
    <path d="M76.166,75.499H21.835c-8.704,0-15.786-7.081-15.786-15.785c0-8.471,6.708-15.406,15.091-15.77  c-0.262-1.218-0.393-2.463-0.393-3.727c0-9.768,7.947-17.715,17.715-17.715c6.965,0,13.132,3.987,16.022,10.139  c1.813-0.724,3.756-1.1,5.729-1.1c7.408,0,13.709,5.3,15.136,12.387h0.816c8.704,0,15.785,7.081,15.785,15.785  S84.869,75.499,76.166,75.499z M21.835,48.181c-6.359,0-11.533,5.174-11.533,11.533s5.174,11.533,11.533,11.533h54.331  c6.359,0,11.533-5.173,11.533-11.533s-5.174-11.533-11.533-11.533h-2.671c-1.118,0-2.045-0.866-2.121-1.981  c-0.401-5.835-5.303-10.407-11.159-10.407c-2.038,0-4.032,0.553-5.768,1.6c-0.559,0.337-1.242,0.399-1.854,0.167  c-0.61-0.232-1.08-0.732-1.275-1.355c-1.762-5.653-6.928-9.451-12.855-9.451C31.039,26.754,25,32.793,25,40.217  c0,1.742,0.329,3.438,0.977,5.041c0.265,0.655,0.187,1.4-0.208,1.986c-0.395,0.586-1.056,0.938-1.763,0.938H21.835z" />
  </svg>
);

export const RainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="-5.0 -10.0 110.0 135.0"
    fill="#fff"
    className="container__icon"
  >
    <path d="m19.793 43.543c-0.011719-2.1719 0.72266-4.2773 2.082-5.9688-1.8945-3.9258-1.7422-8.5312 0.40625-12.32 2.1523-3.7891 6.0234-6.2852 10.363-6.6719 1.4453-4.4453 4.8398-7.9922 9.2148-9.6367 4.3789-1.6445 9.2656-1.207 13.281 1.1875 4.0156 2.3945 6.7227 6.4844 7.3594 11.117 5.0078-2.5547 11.113-1.3477 14.766 2.9258 3.6562 4.2734 3.9023 10.492 0.59766 15.043 0.003907 0.027344 0.003907 0.054688 0 0.082031 0.68359 1.3125 1.0391 2.7656 1.043 4.2422-0.003906 5.2383-4.25 9.4844-9.4883 9.4883h-2.3242c-0.86328 0-1.5625-0.69922-1.5625-1.5625s0.69922-1.5625 1.5625-1.5625h2.3438c3.5117-0.003906 6.3594-2.8516 6.3633-6.3633 0-0.63672-0.097656-1.2695-0.28906-1.875-0.87109 0.6875-1.8359 1.2539-2.8672 1.6758-0.1875 0.078125-0.39062 0.11719-0.59375 0.11328-0.75391 0.019531-1.4102-0.50781-1.5586-1.25-0.14453-0.73828 0.26172-1.4766 0.96484-1.75 2.3711-0.94922 4.2266-2.8594 5.1133-5.2578 0.88281-2.3945 0.71484-5.0547-0.46875-7.3164-1.1836-2.2656-3.2695-3.9219-5.7422-4.5664-2.4727-0.64062-5.0977-0.20703-7.2344 1.1953-0.15234 0.097656-0.32422 0.16797-0.5 0.20703-0.054688 0.625-0.15234 1.2422-0.28125 1.8555-0.15234 0.71484-0.78516 1.2305-1.5195 1.2266-0.11328 0.015625-0.22266 0.015625-0.33594 0-0.40234-0.082031-0.75781-0.32812-0.98047-0.67578-0.22656-0.34766-0.29687-0.77344-0.20703-1.1758 0.16016-0.74219 0.25-1.4961 0.27344-2.25 0.18359-5.9414-3.918-11.16-9.7305-12.383-5.8164-1.2227-11.672 1.9023-13.895 7.4141 1.3281 0.19141 2.6211 0.58984 3.832 1.1758 0.39453 0.16797 0.69922 0.49219 0.84766 0.89453 0.14844 0.39844 0.125 0.84375-0.0625 1.2266-0.19141 0.38672-0.52734 0.67578-0.93359 0.80469-0.41016 0.12891-0.85156 0.082031-1.2266-0.125-3.7422-1.8203-8.2188-1.1797-11.297 1.6172-3.082 2.8008-4.1484 7.1914-2.6914 11.094 1.4766-0.90625 3.1719-1.3867 4.9062-1.3867 0.86328 0 1.5625 0.69922 1.5625 1.5625s-0.69922 1.5625-1.5625 1.5625c-3.5156 0-6.3672 2.8477-6.3672 6.3633s2.8516 6.3672 6.3672 6.3672h30.207c0.86328 0 1.5625 0.69922 1.5625 1.5625s-0.69922 1.5625-1.5625 1.5625h-30.207c-2.5234 0.011719-4.9414-0.98047-6.7305-2.7578s-2.7969-4.1914-2.8008-6.7109zm13.32 31.676c-2.4258-0.003906-4.668-1.3008-5.8828-3.4023-1.2109-2.1016-1.2148-4.6914 0-6.7969l4.5312-7.8438c0.27734-0.48438 0.79297-0.78125 1.3516-0.78125 0.55859 0 1.0781 0.29688 1.3555 0.78125l4.5312 7.8438c1.2109 2.1055 1.2109 4.6953-0.003906 6.7969-1.2109 2.1016-3.4531 3.3984-5.8828 3.4023zm3.1758-8.6367-3.1758-5.5-3.1758 5.5c-0.65234 1.1367-0.65234 2.5312 0.003906 3.668 0.65234 1.1328 1.8633 1.832 3.1719 1.832 1.3125 0 2.5195-0.69922 3.1758-1.832 0.65625-1.1367 0.65625-2.5312 0.003907-3.668zm7.8242 5.207v0.003907c-1.2266-2.1016-1.2266-4.7031 0-6.8047l4.5312-7.8438c0.28125-0.48438 0.79688-0.78125 1.3555-0.78125s1.0742 0.29688 1.3555 0.78125l4.5312 7.8438c1.8984 3.25 0.80469 7.4297-2.4453 9.3281-3.25 1.9023-7.4258 0.80859-9.3281-2.4414zm2.707-1.5625 0.003907 0.003907c1.0156 1.7539 3.2578 2.3516 5.0156 1.3359 1.7539-1.0156 2.3516-3.2578 1.3359-5.0156l-3.125-5.5-3.125 5.5c-0.69141 1.1367-0.71094 2.5586-0.050781 3.7109zm-11.152 18.48c-1.2305-2.1016-1.2305-4.6992 0-6.8008l4.5391-7.8438c0.27734-0.48438 0.79297-0.78516 1.3516-0.78516s1.0703 0.30078 1.3477 0.78516l4.543 7.8438c1.8477 3.25 0.72656 7.3867-2.5117 9.2539-3.2383 1.8711-7.3789 0.77734-9.2695-2.4531zm2.707-1.5625c1.0156 1.7734 3.2734 2.3867 5.0469 1.3711s2.3867-3.2734 1.3711-5.0469l-3.2305-5.5-3.1875 5.5c-0.66406 1.1367-0.66406 2.543 0 3.6758zm20.062 4.9609c-2.4258-0.003907-4.668-1.3008-5.8828-3.4023-1.2148-2.1055-1.2148-4.6953-0.003907-6.7969l4.543-7.8438c0.27734-0.48438 0.78906-0.78516 1.3477-0.78516s1.0742 0.30078 1.3516 0.78516l4.543 7.8438h-0.003907c1.2148 2.1055 1.2109 4.6953-0.003906 6.8008-1.2148 2.1016-3.4609 3.3984-5.8906 3.3984zm0-3.125c1.3125 0 2.5273-0.69922 3.1836-1.8359s0.66016-2.5391 0.003906-3.6758l-3.1875-5.5-3.1758 5.5c-0.65625 1.1367-0.65234 2.5352 0 3.6719 0.65625 1.1328 1.8633 1.8359 3.1758 1.8398zm8.4492-13.762c-2.4297-0.003906-4.6719-1.3008-5.8828-3.4023-1.2148-2.1016-1.2148-4.6914-0.003906-6.7969l4.5312-7.8438c0.27734-0.48438 0.79688-0.78125 1.3555-0.78125 0.55859 0 1.0742 0.29688 1.3516 0.78125l4.5312 7.8438c1.2148 2.1055 1.2109 4.6953 0 6.7969-1.2148 2.1016-3.457 3.3984-5.8828 3.4023zm0-3.125c1.3086-0.003906 2.5195-0.70312 3.1758-1.8398 0.65234-1.1367 0.65234-2.5352 0-3.6719l-3.1758-5.5-3.125 5.5c-0.65234 1.1289-0.65625 2.5156-0.011719 3.6484 0.64062 1.1328 1.832 1.8398 3.1367 1.8633z" />
  </svg>
);

type PropsR = {
  cls: string;
};

export const RefreshIcon = ({ cls }: PropsR) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`${cls}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);
