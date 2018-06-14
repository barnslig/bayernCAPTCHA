import { h } from 'hyperapp';

import CheckmarkIcon from '../../40_icons/checkmark';

import './index.scss';

const ImageSelectOptionAtom = ({ id, imgSrc, checked, onChange }) => (
  <div class="a-bayerncaptcha-imageselect-option">
    <input
      class="a-bayerncaptcha-imageselect-option__checkbox"
      id={id}
      name="option"
      value={id}
      type="checkbox"
      checked={checked}
      onchange={onChange}
    />
    <label for={id} class="a-bayerncaptcha-imageselect-option__label">
      <div class="a-bayerncaptcha-imageselect-option__image-wrapper">
        <img class="a-bayerncaptcha-imageselect-option__image" src={imgSrc} alt="" />
      </div>
      <div class="a-bayerncaptcha-imageselect-option__label-indicator">
        <CheckmarkIcon />
      </div>
    </label>
  </div>
);

export default ImageSelectOptionAtom;
