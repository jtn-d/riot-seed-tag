describe('<seed-tag>', function() {
	var tag, title, input, button, e

	beforeEach(function() {
		var html = document.createElement('seed-tag')
		document.body.appendChild(html)

		tag = riot.mount('seed-tag')[0]
		title = document.querySelector('h3')
		input = document.querySelector('#input')
		button = document.querySelector('#button')

		e = {target: {value: 'test'}}
	})

	afterEach(function() {
		tag.unmount()
	})

	it('should be ok', function() {
		expect(tag).to.be.ok
		expect(tag.isMounted).to.be.true
	})

	it('should have default title', function() {
		expect(title.textContent).to.be.equal('seed-tag')
	})

	it('should have button disabled', function() {
		expect(button.disabled).to.be.true
	})

	it('should enable/disable button when text is inputted', function() {
		tag.edit(e)
		tag.update()

		expect(button.disabled).to.be.false

		e.target.value = ''
		tag.edit(e)
		tag.update()

		expect(button.disabled).to.be.true
	})

	it('should add item to list when add button is pressed', function() {
		var item = {title: e.target.value}
		tag.edit(e)
		tag.update()

		expect(tag.items.length).to.be.empty

		button.click()

		expect(tag.items.length).to.be.equal(1)
		expect(tag.items[0]).to.be.deep.equal(item)
	})

	it('should set item as done when box is checked', function() {
		var item = {title: e.target.value}
		tag.items.push(item)
		tag.update()

		var check = document.querySelector('ul > li:nth-child(1) > label > input[type="checkbox"]')

		expect(check.checked).to.be.false

		check.click()

		expect(item.done).to.be.true
		expect(check.checked).to.be.true

		check.click()

		expect(item.done).to.be.false
		expect(check.checked).to.be.false
	})
})
