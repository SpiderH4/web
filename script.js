document.querySelectorAll('.button').forEach(button => {
	button.addEventListener('click', () => {
		const os = button.classList[1];
		if (os === 'windows') {
			window.location.href = 'download_windows.exe';
		} else if (os === 'linux') {
			window.location.href = 'download_linux.tar.gz';
		} else if (os === 'macos') {
			window.location.href = 'download_macos.dmg';
		}
	});
});