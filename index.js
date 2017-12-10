const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app
const globalShortcut = electron.globalShortcut

const path = require('path')

app.on('ready', ()=>{
	
	const modalPath = path.join('file://', __dirname, 'launcher/index.html')
	let win = new BrowserWindow({
  		frame: true,
  		width: 600,
		height: 800,
		hasShadow: true,
	})

	win.customProps = {}

	win.on('close', function () { win = null })
	win.loadURL(modalPath)
	win.show()
	
	globalShortcut.register('Alt+L', function () {
		if(!win.isFocused()){
			win.focus()
		}else{
			win.blur()
		}
	})

})

