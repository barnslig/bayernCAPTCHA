import { h } from 'hyperapp';

import CheckboxMolecule from '../../20_molecules/checkbox';
import ImageselectMolecule from '../../20_molecules/imageselect';

import './index.scss';

const CaptchaOrganism = () => (state) => (
  <div class="o-bayerncaptcha">
    <CheckboxMolecule />
    {state.imageselect.isVisible
      ? <ImageselectMolecule />
      : null}
  </div>
);

export default CaptchaOrganism;
