import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import "./inner-wc-styles"

export default class InnerWC extends HTMLElement
{
	connectedCallback()
	{
		const div: HTMLDivElement = document.createElement("div");

		this.appendChild(div);
	}
}




customElements.define('inner-wc', InnerWC);