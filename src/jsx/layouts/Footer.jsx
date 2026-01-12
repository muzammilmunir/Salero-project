
const Footer = () => {
	var d = new Date();
	return (
		<div className="footer out-footer">
			<div className="copyright">
				<p>Copyright © All Right Reserved {" "}
					{d.getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default Footer;
