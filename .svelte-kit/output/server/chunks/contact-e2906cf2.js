import { c as create_ssr_component } from "./app-e1f59100.js";
import "@sveltejs/kit/ssr";
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-kk3adw{width:100%}@media(min-width: 640px){.container.svelte-kk3adw{max-width:640px}}@media(min-width: 768px){.container.svelte-kk3adw{max-width:768px}}@media(min-width: 1024px){.container.svelte-kk3adw{max-width:1024px}}@media(min-width: 1280px){.container.svelte-kk3adw{max-width:1280px}}@media(min-width: 1536px){.container.svelte-kk3adw{max-width:1536px}}.rounded-lg.svelte-kk3adw{border-radius:0.5rem}.text-4xl.svelte-kk3adw{font-size:2.25rem;line-height:2.5rem}.m-auto.svelte-kk3adw{margin:auto}.m-4.svelte-kk3adw{margin:1rem}.focus\\:outline-none.svelte-kk3adw:focus{outline:2px solid transparent;outline-offset:2px}.p-4.svelte-kk3adw{padding:1rem}.shadow-2xl.svelte-kk3adw{--tw-shadow-color:0, 0, 0;--tw-shadow:0 25px 50px -12px rgba(var(--tw-shadow-color), 0.25);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\\:ring-4.svelte-kk3adw:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);-webkit-box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus\\:ring-purple-900.svelte-kk3adw:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(76, 29, 149, var(--tw-ring-opacity))}.focus\\:ring-opacity-80.svelte-kk3adw:focus{--tw-ring-opacity:0.8}.text-blue-300.svelte-kk3adw{--tw-text-opacity:1;color:rgba(147, 197, 253, var(--tw-text-opacity))}.text-purple-900.svelte-kk3adw{--tw-text-opacity:1;color:rgba(76, 29, 149, var(--tw-text-opacity))}.text-black.svelte-kk3adw{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.hover\\:text-red-500.svelte-kk3adw:hover{--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}.text-gray-700.svelte-kk3adw{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.w-auto.svelte-kk3adw{width:auto}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"container m-auto text-4xl text-blue-300 two svelte-kk3adw"}"><div id="${"blog-card"}" class="${"m-4 p-4 w-auto rounded-lg shadow-2xl svelte-kk3adw"}"><br>
		<form action="${"https://usebasin.com/f/d3817e926c9d"}" method="${"POST"}"><p><label class="${"text-purple-900 svelte-kk3adw"}">Name: <input class="${"text-black focus:outline-none focus:ring-4 focus:ring-purple-900 focus:ring-opacity-80 svelte-kk3adw"}" type="${"text"}" name="${"name"}"></label></p>
			<br>
			<p><label class="${"text-purple-900 svelte-kk3adw"}">Email: <input class="${"text-black focus:ring-4 focus:ring-purple-900 focus:ring-opacity-80 svelte-kk3adw"}" type="${"email"}" name="${"email"}"></label></p>
			<br>
			<p><label class="${"text-purple-900 svelte-kk3adw"}">Message: <textarea class="${"text-black focus:ring-4 focus:ring-purple-900 focus:ring-opacity-80 svelte-kk3adw"}" name="${"message"}"></textarea></label></p>
			<br>
			<p><input type="${"hidden"}" name="${"workmailaddress"}" value="${""}"></p>
			<p><button class="${"text-purple-900 hover:text-red-500 svelte-kk3adw"}" type="${"submit"}">Send </button></p></form>
		<br><br>

		
				
				

		<form name="${"contact"}" netlify><p class="${"text-gray-700 svelte-kk3adw"}"><label>Name <input type="${"text"}" name="${"name"}"></label></p>
  <br>
  <p class="${"text-gray-700 svelte-kk3adw"}"><label>Email <input type="${"email"}" name="${"email"}"></label></p>
  <br>
  <p class="${"form-row text-gray-700 svelte-kk3adw"}"><label id="${"contact-form-message-label"}" for="${"contact-form-message"}" class="${"form-label"}">Message</label>
  <textarea name="${"message"}" id="${"contact-form-message"}" aria-labelledby="${"contact-form-message-label"}" class="${"form-textarea"}" rows="${"2"}"></textarea>
  </p><p class="${"text-gray-700 svelte-kk3adw"}"><button type="${"submit"}">Send</button></p></form></div>
</section>`;
});
export { Contact as default };
