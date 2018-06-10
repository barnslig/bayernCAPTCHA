import { h } from 'hyperapp';

import CheckmarkIcon from '../../40_icons/checkmark';
import LogoIcon from '../../40_icons/logo';

import './index.scss';

const CheckboxMolecule = () => (state, actions) => (
  <div class="m-bayerncaptcha-checkbox">
    <input
      class="m-bayerncaptcha-checkbox__input"
      type="checkbox"
      id={`${state.id}-checkbox`}
      disabled={state.checkbox.isClicked}
      checked={state.checkbox.isClicked}
      onchange={(e) => {
        actions.checkbox.setClicked(e.target.checked);
        actions.imageselect.loadData();
      }}
    />
    <label class="m-bayerncaptcha-checkbox__clicker" for={`${state.id}-checkbox`}>
      <div class={`m-bayerncaptcha-checkbox__clicker-box${state.checkbox.isClicked ? ' m-bayerncaptcha-checkbox__clicker-box--is-clicked' : ''}${state.checkbox.isSolved ? ' m-bayerncaptcha-checkbox__clicker-box--is-solved' : ''}`} />
      <div class={`m-bayerncaptcha-checkbox__clicker-checkmark${state.checkbox.isSolved ? ' m-bayerncaptcha-checkbox__clicker-checkmark--is-solved' : ''}`}>
        <CheckmarkIcon />
      </div>
    </label>
    <div class="m-bayerncaptcha-checkbox__label">{state.checkbox.label}</div>
    <figure class="m-bayerncaptcha-checkbox__logo">
      <div class="m-bayerncaptcha-checkbox__logo-image">
        <LogoIcon />
      </div>
      <figcaption class="m-bayerncaptcha-checkbox__logo-caption">bayernCAPTCHA</figcaption>
    </figure>
  </div>
);

export default CheckboxMolecule;
