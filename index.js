const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app
const globalShortcut = electron.globalShortcut

const path = require('path')

app.on('ready', ()=>{
	
	const modalPath = path.join('file://', __dirname, 'launcher/index.html')
	let win = new BrowserWindow({
  		frame: false,
  		width: 600,
		height: 60,
		hasShadow: true,
	})

	win.customProps = {}

	win.on('close', function () { win = null })
	win.loadURL(modalPath)
	win.show()
	win.blur()
	
	globalShortcut.register('Alt+C', function () {
		if(!win.isFocused()){
			win.focus()
		}
	})

	globalShortcut.register('Esc',function(){
		let curr = BrowserWindow.getFocusedWindow()
		curr.blur()
	})
})

