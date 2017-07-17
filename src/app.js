const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const win = BrowserWindow.getAllWindows()[0];
const ipcMain = electron.ipcMain;

const axios = require('axios');
const shell = electron.shell;

const app = new Vue({
    el: '#app',
    data: {
        isHidden: false,
        version: 2,
        update: {},
        showUpdate: false
    },
    methods: {
        handleCreateApp () {
            window.location.href = 'create.html';
        },
        handleOpenDoc () {
            // this.isHidden = true;
            setTimeout(() => {
                window.open("http://www.baidu.com");

            }, 100);
        },
        handleOk () {
            if (process.platform === 'darwin') {
                shell.openExternal(this.update.mac);
            } else {
                shell.openExternal(this.update.windows);
            }
        },
        handleCancel () {

        }
    },
    mounted () {
    }
});