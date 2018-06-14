import { app } from 'hyperapp';

import CaptchaOrganism from './components/30_organisms/captcha';

const createBayernCaptcha = ($elem, id) => {
  const state = {
    id: `bayerncaptcha-${id}`,
    checkbox: {
      label: 'Ich bin kein Roboter',
      isClicked: false,
      isSolved: false,
    },
    imageselect: {
      headline: 'Wählen Sie alle Bilder mit',
      errorCopy: 'Bitte überprüfen Sie ihre Auswahl.',
      reloadButtonTitle: 'Anderes Captcha laden',
      submitButtonCopy: 'Weiter',

      isVisible: false,
      isErroneous: false,
      selectedOptions: [],

      dataBasePath: 'captchas',
      dataCurrentVariant: null,
      dataVariants: [
        '01',
        '02',
      ],
      data: {},
    },
  };

  const actions = {
    checkResult: () => (state, actions) => {
      const isCorrect = state.imageselect.data.options
        .map((option, i) =>
          !option.required && state.imageselect.selectedOptions.indexOf(i) === -1
          || option.required && state.imageselect.selectedOptions.indexOf(i) !== -1
        )
        .every((option) => !!option);

      actions.imageselect.setErroneous(!isCorrect);
      if (isCorrect) {
        $elem.dataset.isSolved = true;

        actions.checkbox.setSolved(true);
        actions.imageselect.setVisible(false);
      }
    },

    checkbox: {
      setClicked: (isClicked) => () => ({ isClicked }),
      setSolved: (isSolved) => () => ({ isSolved }),
    },
    imageselect: {
      setVisible: (isVisible) => () => ({ isVisible }),
      setErroneous: (isErroneous) => () => ({ isErroneous }),
      toggleSelectedOption: (selectedOption) => (state) => ({
        selectedOptions: state.selectedOptions.indexOf(selectedOption) === -1
          ? state.selectedOptions.concat([selectedOption])
          : state.selectedOptions.filter(option => option !== selectedOption),
      }),
      resetSelectedOptions: () => () => ({ selectedOptions: [] }),

      setDataCurrentVariant: (dataCurrentVariant) => () => ({ dataCurrentVariant }),
      setData: (data) => () => ({ data }),
      loadData: () => (state, actions) => {
        // make sure to choose another variant
        const availableVariants = state.dataVariants.length > 1
          ? state.dataVariants.filter(variant => variant !== state.dataCurrentVariant)
          : state.dataVariants;

        const current = availableVariants[Math.floor(Math.random() * availableVariants.length)];

        const req = new XMLHttpRequest();
        req.addEventListener('load', (response) => {
          const data = JSON.parse(req.responseText);
          data.options = data.options.sort(() => Math.random() - 0.5);
          actions.setData(data);
          actions.setDataCurrentVariant(current);
          actions.setErroneous(false);
          actions.resetSelectedOptions();
          actions.setVisible(true);
        });
        req.open('GET', `${state.dataBasePath}/${current}/data.json`);
        req.send();
      },
    },
  };

  app(state, actions, CaptchaOrganism, $elem);
};

const createBayernCaptchaForm = ($elem) => {
  const $captcha = $elem.querySelector('[data-bayerncaptcha]');

  $elem.addEventListener('submit', (ev) => {
    if (!$captcha.dataset.isSolved) {
      ev.preventDefault();
    }
  });
};

const $captchas = document.querySelectorAll('[data-bayerncaptcha]');
for (let i = 0; i < $captchas.length; i += 1) {
  createBayernCaptcha($captchas[i], i);
}

const $forms = document.querySelectorAll('[data-bayerncaptcha-form]');
for (let i = 0; i < $forms.length; i += 1) {
  createBayernCaptchaForm($forms[i]);
}
