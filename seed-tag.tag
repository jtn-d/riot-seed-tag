<seed-tag>
	<h3>{ title }</h3>

	<ul>
		<li each={ items }>
			<label class={ completed: done }>
				<input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
			</label>
		</li>
	</ul>

	<form onsubmit={ add }>
		<input id="input" name="input" onkeyup={ edit }>
		<button id="button" disabled={ !text }>Add #{ items.length + 1 }</button>
	</form>

	<img src="http://riotjs.com/img/logo/riot120x.png">

	<style scoped>
		:scope { 
			display: block;
			margin: 16px;
		}

		img {
			position: absolute;
			bottom: 16px;
			right: 16px;
		}
	</style>

	<script>
		this.title = opts.title || 'seed-tag'
		this.items = opts.items || []
		this.disabled = true

		edit(e) {
			this.text = e.target.value
		}

		add(e) {
			if (this.text) {
				this.items.push({ title: this.text })
				this.text = this.input.value = ''
			}
		}

		toggle(e) {
			var item = e.item
			item.done = !item.done
			return true
		}

	</script>
</seed-tag>