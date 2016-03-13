riot.tag2('seed-tag', '<h3>{title}</h3> <ul> <li each="{items}"> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label> </li> </ul> <form onsubmit="{add}"> <input id="input" name="input" onkeyup="{edit}"> <button id="button" __disabled="{!text}">Add #{items.length + 1}</button> </form> <img src="http://riotjs.com/img/logo/riot120x.png">', 'seed-tag,[riot-tag="seed-tag"],[data-is="seed-tag"]{ display: block; margin: 16px; } seed-tag img,[riot-tag="seed-tag"] img,[data-is="seed-tag"] img{ position: absolute; bottom: 16px; right: 16px; }', '', function(opts) {
		this.title = opts.title || 'seed-tag'
    this.items = opts.items || []
		this.disabled = true

    this.edit = function(e) {
      this.text = e.target.value
    }.bind(this)

    this.add = function(e) {
      if (this.text) {
        this.items.push({ title: this.text })
        this.text = this.input.value = ''
      }
    }.bind(this)

    this.toggle = function(e) {
      var item = e.item
      item.done = !item.done
      return true
    }.bind(this)

});
