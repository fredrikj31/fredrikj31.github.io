class Main {

	/**
     * @author fredrikj31
	 */
	constructor() {

	}

	setCopyright = () => {
		const container = document.getElementById("copyright");
		const d = new Date();

		container.innerText = `Copyright \u00A9 Fredrik Johansen ${d.getFullYear()}`;
	}
	
}