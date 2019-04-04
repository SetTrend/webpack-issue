import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import InnerWC from "../inner/inner-wc";
import "./outer-wc-styles"

export default class OuterWC extends HTMLElement
{
	public connectedCallback()
	{
		const div1: HTMLDivElement = document.createElement("div");
		const div2: HTMLDivElement = document.createElement("div");
		const wc: InnerWC = new InnerWC()

		div1.textContent = "You should see a throbber in each of the blocks after this text message.";

		div1.className = "text";
		div2.className = "outer";

		this.appendChild(div1);
		this.appendChild(div2);
		this.appendChild(wc);
	}
}




customElements.define('outer-wc', OuterWC);