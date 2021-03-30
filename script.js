const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>event.keycode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  `
})



//
// using `` called backticks, you can insert dynamic elements //
//   similar to an if then statement. test is first, then ? is then for what do do next and after the : is the else //
//   ${e.key === '' ? 'Space' : e.key} //
