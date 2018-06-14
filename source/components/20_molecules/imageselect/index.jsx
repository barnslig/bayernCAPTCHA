import { h } from 'hyperapp';

import ImageselectOptionAtom from '../../10_atoms/imageselect-option';
import RefreshIcon from '../../40_icons/refresh';

import './index.scss';

const ImageselectMolecule = () => (state, actions) => (
  <div class="m-bayerncaptcha-imageselect">
    <svg class="m-bayerncaptcha-imageselect__arrow" xmlns="http://www.w3.org/2000/svg" width="13.962" height="27.924" viewBox="0 0 3.6941124 7.3882271">
      <path fill="#fff" fill-rule="evenodd" stroke="#ccc" stroke-width=".265" d="M3.695.187l3.507 3.507-3.507 3.507L.187 3.694z" />
    </svg>
    <div class="m-bayerncaptcha-imageselect__header">
      {state.imageselect.headline} <strong>{state.imageselect.data.copy}</strong>
    </div>
    <div class="m-bayerncaptcha-imageselect__options">
      {state.imageselect.data.options.map((option, i) => (
        <ImageselectOptionAtom
          id={`${state.id}-option-${i}`}
          imgSrc={`${state.imageselect.dataBasePath}/${state.imageselect.dataCurrentVariant}/${option.img}`}
          checked={state.imageselect.selectedOptions.indexOf(i) !== -1}
          onChange={() => {
            actions.imageselect.toggleSelectedOption(i);
          }}
        />
      ))}
    </div>
    <div class="m-bayerncaptcha-imageselect__footer">
      {state.imageselect.isErroneous
        ? <div class="m-bayerncaptcha-imageselect__footer-error">{state.imageselect.errorCopy}</div>
        : null}
      <button
        class="m-bayerncaptcha-imageselect__footer-icon-btn"
        title={state.imageselect.reloadButtonTitle}
        onclick={(ev) => {
          ev.preventDefault();
          actions.imageselect.loadData();
        }}
      >
        <RefreshIcon title={state.imageselect.reloadButtonTitle} />
      </button>
      <button
        class="m-bayerncaptcha-imageselect__footer-submit-btn"
        onclick={(ev) => {
          ev.preventDefault();
          actions.checkResult();
        }}
      >
        {state.imageselect.submitButtonCopy}
      </button>
    </div>
  </div>
);

export default ImageselectMolecule;
