const downloadButtonWindows = document.getElementById('download-button-windows');
const downloadButtonMacos = document.getElementById('download-button-macos');
const downloadButtonLinux = document.getElementById('download-button-linux');

downloadButtonWindows.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/Spiderh2/Spider-Launcher/releases/download/1.0.4/spider-client-win-x64.exe';
  link.download = 'spider-client-win-x64.exe';
  link.click();
});

downloadButtonMacos.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/Spiderh2/Spider-Launcher/releases/download/1.0.4/spider-client-mac-universal.zip';
  link.download = 'spider-client-mac-universal.dmg';
  link.click();
});

downloadButtonLinux.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'https://github.com/Spiderh2/Spider-Launcher/releases/download/1.0.4/spider-client-linux-x86_64.AppImage';
  link.download = 'spider-client-linux-x86_64.AppImage';
  link.click();
});
