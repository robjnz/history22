<section class="container m-auto text-4xl text-blue-300 two">
	<div id="blog-card" class="m-4 p-4 w-auto rounded-lg shadow-2xl">
		<br />
		<form action="https://usebasin.com/f/d3817e926c9d" method="POST">
			<p>
				<label class="text-purple-900"
					>Name: <input
						class="text-black focus:outline-none focus:ring-4 focus:ring-purple-900 focus:ring-opacity-80"
						type="text"
						name="name"
					/></label
				>
			</p>
			<br />
			<p>
				<label class="text-purple-900"
					>Email: <input
						class="text-black focus:ring-4 focus:ring-purple-900 focus:ring-opacity-80"
						type="email"
						name="email"
					/></label
				>
			</p>
			<br />
			<p>
				<label class="text-purple-900"
					>Message: <textarea
						class="text-black focus:ring-4 focus:ring-purple-900 focus:ring-opacity-80"
						name="message"
					/></label
				>
			</p>
			<br />
			<p>
				<input type="hidden" name="workmailaddress" value="" />
			</p>
			<p>
				<button class="text-purple-900 hover:text-red-500" type="submit"> Send </button>
			</p>
		</form>
		<br /><br />

		
				
				

		<form name="contact" netlify>
  <p class=text-gray-700>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <br />
  <p class=text-gray-700>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <br />
  <p class="form-row text-gray-700">
				<label id="contact-form-message-label" for="contact-form-message" class="form-label"
					>Message</label
				>
  <textarea
					name="message"
					id="contact-form-message"
					aria-labelledby="contact-form-message-label"
					class="form-textarea"
					rows="2"
				/>
  <p class=text-gray-700>
    <button type="submit">Send</button>
  </p>
</form>
	</div>
</section>
