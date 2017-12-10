const {
    app,
    BrowserWindow,
    Menu
} = require('electron');
const path = require('path');
const url = require('url');
const os = require('os');

let logo = path.join(__dirname, 'assets/img/ibiu.png');
let win = null;
let win_about = null;

let willClose = false;

function createWindow() {
    win = new BrowserWindow({
        width: 410,
        // width: 1000,
        height: 650,
        title: 'iBiu',
        center: true,
        resizable: true,
        icon: logo,
        titleBarStyle: 'hidden'
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // 打开开发者工具。
    win.webContents.openDevTools();

    // 当 window 被关闭，这个事件会被触发。
    win.on('close', (event) => {
        if (process.platform !== 'win32' && !willClose) {
            win.hide();
            event.preventDefault();
        }
    });
    win.on('closed', () => {
        win = null;
    });
}

function createMenu() {
    const template = [{
            label: "Application",
            submenu: [{
                    label: "About Application",
                    selector: "orderFrontStandardAboutPanel:"
                },
                {
                    type: "separator"
                },
                {
                    label: "Quit",
                    accelerator: "Command+Q",
                    click: function () {
                        app.quit();
                    }
                }
            ]
        }, {
            label: "Edit",
            submenu: [{
                    label: "Undo",
                    accelerator: "CmdOrCtrl+Z",
                    selector: "undo:"
                },
                {
                    label: "Redo",
                    accelerator: "Shift+CmdOrCtrl+Z",
                    selector: "redo:"
                },
                {
                    type: "separator"
                },
                {
                    label: "Cut",
                    accelerator: "CmdOrCtrl+X",
                    selector: "cut:"
                },
                {
                    label: "Copy",
                    accelerator: "CmdOrCtrl+C",
                    selector: "copy:"
                },
                {
                    label: "Paste",
                    accelerator: "CmdOrCtrl+V",
                    selector: "paste:"
                },
                {
                    label: "Select All",
                    accelerator: "CmdOrCtrl+A",
                    selector: "selectAll:"
                }
            ]
        },
        {
            label: app.getName(),
            submenu: [

                {
                    label: 'About iBiu',
                    click() {
                        if (win_about == null) {
                            win_about = new BrowserWindow({
                                width: 300,
                                height: 220,
                                title: 'About iBiu',
                                center: true,
                                resizable: false,
                                icon: logo,
                                minimizable: false,
                                maximizable: false
                            });

                            win_about.loadURL(url.format({
                                pathname: path.join(__dirname, 'app/about.html'),
                                protocol: 'file:',
                                slashes: true
                            }));

                            win_about.on('closed', (e) => {
                                win_about = null;
                            });
                        }
                    }
                },
                {
                    role: 'quit',
                    label: '退出 iBiu'
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.on('ready', () => {
    createWindow();
    if (os.type().indexOf('Win') == -1) {
        createMenu();
    }
});
app.on('activate', () => {
    if (win == null) {
        createWindow();
    } else {
        win.show();
    }
});
app.on('before-quit', function () {
    willClose = true;
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});