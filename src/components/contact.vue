<template lang="pug">
	.contact
		h1 {{title}}
		.contact__wrapper
			form.vue-form(@submit.prevent="submit")
				.error-message
					p(v-show="!email.valid") Oh, please enter a valid email address.
				fieldset
					legend {{name}}
					div
						label(class="label" for="name") Name
						input(type="text" name="name" id="name" required="" v-model="name")
					div
						label(class="label" for="email") Email
						input(type="email" name="email" id="email" required="" :class="{ email , error: !email.valid }" v-model="email.value")
					div
						h4 Team Member
						p.select
							select(class="budget" v-model="selection.member")
								option(value="0") Sarah Drasner
								option(value="1") Evan You
					div
						h4 Framework
						ul.vue-form-list
							li
								input(type="radio" name="radio-1" id="radio-1" value="angular" v-model="selection.framework")
								label(for="radio-1") AngularJS
							li
								input(type="radio" name="radio-2" id="radio-2" value="react" v-model="selection.framework")
								label(for="radio-2") ReactJS
							li
								input(type="radio" name="radio-3" id="radio-3" value="vue" v-model="selection.framework")
								label(for="radio-3") VueJS
					div
						h4 Features
						ul.vue-form-list
							li(v-for="(feature, index) in features")
								input(type="checkbox" :value="feature" :id="'cb-feature-'+index" v-model="selection.features")
								label(:for="'cb-feature-'+index") {{feature}}
							li
								input(type="checkbox" id="checkbox-all" @click="checkAll")
								label(for="checkbox-all") Check All
					div
						label(class="label" for="textarea") Message with Counter
						textarea.message(name="textarea" id="textarea" required="" v-model="message.text" :maxlength="message.maxlength")
						span.counter {{ message.text.length }} / {{ message.maxlength }}
					div
						input(type="submit" value="Send Form")
			.debug
				pre
					code {{ $data }}
</template>

<script>
	export default{
		name:'contacts',
		data: function() {
			return {
				title:'contact',
				name: "John Doe",
				email: {
					value: "jo@hnd.oe",
					valid: true
				},
				features: ["Reactivity", "Encapsulation", "Data Binding"],
				selection: {
					member: "0",
					framework: "vue",
					features: []
				},
				message: {
					text: `Dear Mr. President,\n...`,
					maxlength: 255
				},
				submitted: false
			};
		},
		methods: {
			// submit form handler
			submit: function() {
				this.submitted = true;
			},
			// validate by type and value
			validate: function(type, value) {
				if (type === "email") {
					this.email.valid = this.isEmail(value) ? true : false;
				}
			},
			// check for valid email adress
			isEmail: function(value) {
				return emailRegExp.test(value);
			},
			// check or uncheck all
			checkAll: function(event) {
				this.selection.features = event.target.checked ? this.features : [];
			}
		},
		watch: {
			// watching nested property
			"email.value": function(value) {
				this.validate("email", value);
			}
		}
	}
</script>

<style scoped lang="scss">
@import "../assets/styles/_contact.scss";
</style>